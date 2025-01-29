import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyPosts } from "../../store/myPostsSlice"
import PostCardMiddle from "../../Components/PostCard/PostCardMiddle/PostCardMiddle"
import style from "./MyFavorite.module.scss"
import { Link, useNavigate } from "react-router-dom"
import { setPage } from "../../store/paginationSlice"
import PostCardBig from "../../Components/PostCard/PostCardBig/PostCardBig"
import PostCardSmall from "../../Components/PostCard/PostCardSmall/PostCardSmall"
import { ReactComponent as LeftArrow } from "../../assets/left_arrow.svg"
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg"
import Title from "../../Components/Title/Title"
import { height } from "@fortawesome/free-solid-svg-icons/fa0"

interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  isFavorite: boolean
}

const MyFavorite = () => {
  const { favorites } = useSelector((state: any) => state.posts)

  return (
    <div className={style.container}>
      <div className={style.postsCardWrap}>
        <div className={style.postCardWrap}>
          <div className={style.postCardWrapMiddleandLittle}>
            <div className={style.postCardWrapMiddles}>
              {favorites.length > 0 ? (
                favorites.map(
                  ({ id, image, date, text, title, isFavorite }: IPostCard) => (
                    <div className={style.postCardWrapMiddle}>
                      <div
                        key={id}
                        style={{
                          height: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <PostCardMiddle
                          id={id}
                          image={image}
                          date={date}
                          title={title}
                          text={text}
                          isFavorite={isFavorite}
                        />
                      </div>
                    </div>
                  )
                )
              ) : (
                <div>No favorite posts yet!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyFavorite

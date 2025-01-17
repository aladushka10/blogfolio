import { useEffect, useState } from "react"
import { NavLink, Route, useNavigate } from "react-router-dom"
import style from "./PostCardBig.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown,
  faEllipsisH,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { incrementDislike, incrementLike } from "../../../store/counterSlice"

interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  isFavorite: boolean
}

const PostCardBig = ({ id, image, text, date, title }: IPostCard) => {
  const navigate = useNavigate()
  const { likes, dislikes } = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div className={style.postCardWrapMain}>
        <div className={style.postCardWrapUp}>
          <div className={style.postCardWrapLeft}>
            <div className={style.postCardDate}>{date}</div>
            <h2 className={style.postCardTitle}>{title}</h2>
            <h3 className={style.postCardSubtitle}>{text}</h3>
          </div>
          <div className={style.postCardWrapRight}>
            <div className={style.imgWrap}>
              <img
                className={style.postCardImg}
                onClick={() => {
                  navigate(`${id}`)
                }}
                src={image}
              ></img>
            </div>
          </div>
        </div>

        <div className={style.postCardWrapDown}>
          <div className={style.thumbsWrap}>
            <div className={style.thumbsUpWrap}>
              <FontAwesomeIcon
                onClick={() => dispatch(incrementLike())}
                cursor={"pointer"}
                icon={faThumbsUp}
                style={{ fontSize: "25px" }}
              />
              <div>{likes}</div>
            </div>
            <div className={style.thumbsDownWrap}>
              <FontAwesomeIcon
                onClick={() => dispatch(incrementDislike())}
                cursor={"pointer"}
                icon={faThumbsDown}
                style={{ fontSize: "25px" }}
              />
              <div>{dislikes}</div>
            </div>
          </div>
          <div className={style.saveDotsWrap}>
            <div className={style.saveDots}>
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ fontSize: "25px" }}
                cursor={"pointer"}
              />
              <FontAwesomeIcon
                icon={faEllipsisH}
                style={{ fontSize: "25px" }}
                cursor={"pointer"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostCardBig

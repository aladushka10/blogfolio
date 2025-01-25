import { useEffect, useState } from "react"
import { NavLink, Route, useNavigate } from "react-router-dom"
import style from "./PostCardSmall.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown,
  faEllipsisH,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { incrementDislike, incrementLike } from "../../../store/counterSlice"
import PopUp from "../../PopUp/PopUp"
import { openPopUp, closePopUp } from "../../../store/popUpSlice"
interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  isFavorite: boolean
}

interface ICounter {
  counter: {
    likes: number
    dislikes: number
  }
}

interface IPopUp {
  popUp: {
    isOpen: boolean
    postId: null
  }
}

const PostCardSmall = ({ id, image, text, date, title }: IPostCard) => {
  const navigate = useNavigate()

  const { likes, dislikes } = useSelector((state: ICounter) => state.counter)
  const dispatch = useDispatch()
  const { isOpen, postId } = useSelector((state: IPopUp) => state.popUp)

  return (
    <div className={style.postCardWrapLittle}>
      <div className={style.postCardWrapUp}>
        <div className={style.postCardWrapLeft}>
          <div className={style.postCardDate}>{date}</div>
          <h2 className={style.postCardTitle}>
            <a
              className={style.postCardTitleLink}
              onClick={() => {
                navigate(`${id}`)
              }}
            >
              {title}
            </a>
          </h2>
        </div>
        <div className={style.postCardWrapRight}>
          <div className={style.imgWrap}>
            <img
              className={style.postCardImg}
              onClick={() => dispatch(openPopUp(id))}
              src={image}
            />
            {isOpen && postId === id && (
              <PopUp
                id={id}
                image={image}
                date={date}
                title={title}
                text={text}
                isFavorite={false}
                close={() => dispatch(closePopUp())}
              />
            )}
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
  )
}

export default PostCardSmall

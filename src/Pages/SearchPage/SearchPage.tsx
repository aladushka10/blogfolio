import { useEffect, useState } from "react"
import { NavLink, Route, useNavigate } from "react-router-dom"
import style from "./SearchPage.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { incrementDislike, incrementLike } from "../../store/counterSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faThumbsDown,
  faEllipsisH,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons"
import { ReactComponent as LeftArrow } from "../../assets/left_arrow.svg"
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg"
import {
  fetchPosts,
  setOrdering,
  setPage,
  setSearchQuery,
} from "../../store/paginationSlice"
import Title from "../../Components/Title/Title"
import { openPopUp, closePopUp } from "../../store/popUpSlice"
import PopUp from "../../Components/PopUp/PopUp"

interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  index: number
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

const Search = () => {
  const { likes, dislikes } = useSelector((state: ICounter) => state.counter)
  const dispatch = useDispatch()

  const { isOpen, postId } = useSelector((state: IPopUp) => state.popUp)

  const {
    posts,
    loading,
    error,
    currentPage,
    itemsPerPage,
    totalItems,
    searchQuery,
    ordering,
  } = useSelector((state) => state.pagination)

  const searchQueryTitle = useSelector(
    (state) => state.pagination.searchQueryTitle
  )

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(
      fetchPosts({
        limit: itemsPerPage,
        offset: (currentPage - 1) * itemsPerPage,
        searchQuery: searchQuery,
        ordering: ordering,
      })
    )
  }, [currentPage, ordering])
  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Error...</div>
  }
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber))
  }
  const handlePrevious = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1))
    }
  }
  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1))
    }
  }

  const renderPageNumber = () => {
    const pageNumber = []
    const maxPageNumber = 10
    const startPage = Math.max(currentPage - Math.floor(maxPageNumber / 2), 1)
    const endPage = Math.min(startPage + maxPageNumber - 1, totalPages)
    for (let i = startPage; i <= endPage; i++) {
      pageNumber.push(
        <button
          className={style.numbers}
          style={{ color: i === currentPage ? "rgba(83, 96, 205, 1)" : "" }}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      )
    }
    return pageNumber
  }

  return (
    <div className={style.searchWrap}>
      <div className={style.container}>
        <Title title={`Search results "${searchQueryTitle}"`} />
        <div className={style.postsCardWrap}>
          {posts.map(({ id, image, date, text, title, index }: IPostCard) => (
            <div key={id}>
              <div className={style.postCardWrap}>
                <div className={style.imgTitleWrap}>
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
                  <div className={style.dateTitleWrap}>
                    <div className={style.postCardDate}>{date}</div>
                    <div className={style.postCardTitle}>{title}</div>
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
            </div>
          ))}
        </div>
        <div className={style.numbersWrapper}>
          <div className={style.leftArrowWrap}>
            <button
              className={style.leftArrow}
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              <LeftArrow className={style.leftArrowSvg} />
            </button>
            <button
              className={style.prevWrap}
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </div>
          <div className={style.pageNubmers}>{renderPageNumber()}</div>
          <div className={style.rightArrowWrap}>
            <button
              className={style.nextWrap}
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
            <button
              className={style.rightArrow}
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              <RightArrow className={style.rightArrowSvg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search

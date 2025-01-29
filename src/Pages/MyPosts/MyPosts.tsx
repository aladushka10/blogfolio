import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyPosts } from "../../store/myPostsSlice"
import PostCardMiddle from "../../Components/PostCard/PostCardMiddle/PostCardMiddle"
import style from "./MyPosts.module.scss"
import { Link, useNavigate } from "react-router-dom"
import { setPage } from "../../store/paginationSlice"
import PostCardBig from "../../Components/PostCard/PostCardBig/PostCardBig"
import PostCardSmall from "../../Components/PostCard/PostCardSmall/PostCardSmall"
import { ReactComponent as LeftArrow } from "../../assets/left_arrow.svg"
import { ReactComponent as RightArrow } from "../../assets/right_arrow.svg"
import Title from "../../Components/Title/Title"

interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  isFavorite: boolean
}

interface IMyPost {
  myPosts: {
    myPosts: IPostCard[]
    error: null | string
    isLoading: boolean
    currentPage: number
    itemsPerPage: number
    totalItems: number
  }
}

const MyPosts = () => {
  const dispatch = useDispatch()
  const { myPosts, isLoading, error, currentPage, itemsPerPage, totalItems } =
    useSelector((state: IMyPost) => state.myPosts)

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(
      getMyPosts({
        limit: itemsPerPage,
        offset: (currentPage - 1) * itemsPerPage,
      })
    )
  }, [currentPage])
  if (isLoading) {
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
          style={{ color: i === currentPage ? "red" : "#fff" }}
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
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={style.container}>
            <Link className={style.backHomeBtn} to={"/"}>
              Back to Home
            </Link>
            <Title title={"My Posts"} />
            <div className={style.postsCardWrap}>
              {myPosts.map(({ id, image, date, text, title }: IPostCard) => (
                <div key={id}>
                  <div className={style.postCardWrap}>
                    <div className={style.postCardWrapMiddleandLittle}>
                      <div className={style.postCardWrapMiddles}>
                        <PostCardMiddle
                          id={id}
                          image={image}
                          date={date}
                          title={title}
                          text={text}
                          isFavorite={false}
                        />
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
        </>
      )}
    </div>
  )
}
export default MyPosts

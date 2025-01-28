import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMyPosts } from "../../store/favoriteSlice"
import PostCardMiddle from "../../Components/PostCard/PostCardMiddle/PostCardMiddle"

interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  isFavorite: boolean
}

const MyFavorite = () => {
  const dispatch = useDispatch()
  const { myPosts, isLoading } = useSelector((state: any) => state.myPosts)
  useEffect(() => {
    dispatch(getMyPosts())
  }, [])
  console.log("myPosts", myPosts)
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {myPosts.map(({ id, image, date, text, title }: IPostCard) => {
            return (
              <PostCardMiddle
                id={id}
                image={image}
                date={date}
                title={title}
                text={text}
                isFavorite={true}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
export default MyFavorite

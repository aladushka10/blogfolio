import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const PostPage = () => {
  const [book, setBook] = useState({ title: "", price: "", authors: "" })
  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${path.isbn13}`).then(
      (response) => response.json().then((data) => setBook(data))
    )
  }, [])
  const path = useParams()
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h1>{book.title}</h1>
        <p>Price: {book.price}</p>
        <p>Authors: {book.authors}</p>
        <button onClick={() => navigate(-1)}>Go back to all posts</button>
      </div>
    </>
  )
}
export default PostPage

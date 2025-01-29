import { createSlice } from "@reduxjs/toolkit"

interface IPostCard {
  id: number
  image?: string
  text?: string
  date: string
  title: string
  isFavorite: boolean
}

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [] as IPostCard[],
    loading: false,
    error: null,
    selectedPost: null,
    favorites: [] as IPostCard[],
  },
  reducers: {
    selectPost(state, action) {
      state.selectedPost = action.payload
    },
    clearPost(state) {
      state.selectedPost = null
    },
    fetchPostStart(state) {
      state.loading = true
      state.error = null
    },
    fetchPostSuccess(state, action) {
      state.loading = false
      state.posts = action.payload
    },
    fetchPostFail(state, action) {
      state.loading = false
      state.error = action.payload
    },
    toggleFavorite: (state, action) => {
      const obj = action.payload
      if (state.favorites.filter((x: any) => x.id === obj.id).length === 0) {
        state.favorites.push(obj)
      }
    },
  },
})

export const {
  selectPost,
  clearPost,
  fetchPostFail,
  fetchPostStart,
  fetchPostSuccess,
  toggleFavorite,
} = postSlice.actions
export const fetchPostsAction = () => {
  return { type: "posts/fetchPosts" }
}

export default postSlice.reducer

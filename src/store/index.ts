import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./themeSlice"
import counterSlice from "./counterSlice"
import activeSlice from "./activeSlice"
import paginationSlice from "./paginationSlice"
import selectedPostSlice from "./selectedPostSlice"
// import postSlice from "./postsSlice"
// import UserMeSlice from "./UserMeSlice"
export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    counter: counterSlice,
    active: activeSlice,
    pagination: paginationSlice,
    selectedPost: selectedPostSlice,
    // posts: postSlice,
    // UserMe: UserMeSlice,
  },
})

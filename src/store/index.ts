import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./themeSlice"
import counterSlice from "./counterSlice"
import activeSlice from "./activeSlice"
import paginationSlice from "./paginationSlice"
import selectedPostSlice from "./selectedPostSlice"
import popUpSlice from "./popUpSlice"
import postSlice from "./postSlice"
import SignInSlice from "./SignInSlice"
import SignUpSlice from "./SignUpSlice"
import myPostsSlice from "./myPostsSlice"

export default configureStore({
  reducer: {
    themeInStoreConfiguration: themeSlice,
    counter: counterSlice,
    active: activeSlice,
    pagination: paginationSlice,
    selectedPost: selectedPostSlice,
    popUp: popUpSlice,
    posts: postSlice,
    signIn: SignInSlice,
    signUp: SignUpSlice,
    myPosts: myPostsSlice,
  },
})

import { createSlice } from "@reduxjs/toolkit"

const popUpSlice = createSlice({
  name: "popUp",
  initialState: { isOpen: false, postId: null },
  reducers: {
    openPopUp(state, action) {
      state.isOpen = true
      state.postId = action.payload
    },
    closePopUp(state) {
      state.isOpen = false
      state.postId = null
    },
  },
})

export const { openPopUp, closePopUp } = popUpSlice.actions

export default popUpSlice.reducer

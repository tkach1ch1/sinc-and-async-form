import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: false
}

const postsReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: (state, action) =>  {
      state.posts.push(action.payload)
    },
    toggleStatusTrue: (state) => {
      state.status = true
    },
    toggleStatusFalse: (state) => {
      state.status = false 
    }
  }
});

export const {addNewPost, toggleStatusFalse,toggleStatusTrue} = postsReducer.actions

export default postsReducer.reducer
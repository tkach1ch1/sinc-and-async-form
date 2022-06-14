import { configureStore } from "@reduxjs/toolkit";
import fetchedPostsReducer from "./fetchedPostsReducer";
import postsReducer  from "./postsReducer";





export const store = configureStore ({
    reducer: {
        posts: postsReducer,
        fetchP: fetchedPostsReducer,
        // status: titleCheck
    }
})


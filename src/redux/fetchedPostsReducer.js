import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const urlRequest = "https://jsonplaceholder.typicode.com/users"

// {
//     // Multiple possible status enum values
//     status: 'idle' | 'loading' | 'succeeded' | 'failed',
//     error: string | null
//   }

const fetchedPostsReducer = createSlice({
    name: "fetchP",
    initialState: {
        items: [],
        status: "idle",
        error: null
    },
    reducers: {
        
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.items = action.payload    
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message  
            })
    }
})



const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));


export const fetchPosts = createAsyncThunk('fetchP/fetchPosts', async () => {
        await delay(500)
        const response = await fetch(urlRequest)
    return response.json() 
})

export default fetchedPostsReducer.reducer
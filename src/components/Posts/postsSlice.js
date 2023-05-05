import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  posts: [],
  status: "idle",
  error: null
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userid) {
        return {
          id: nanoid(),
          title,
          content,
          date: new Date().toISOString(),
          user: userid
        };
      }
    },
    postUpdated(state, action) {
      const [id, title, content] = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await client.get("/fakeApi/posts");
  return response.data;
});

export const SelectAllPost = (state) => state.posts.posts;

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;

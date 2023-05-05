import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Posts/postsSlice";
import userReducer from "../components/Users/usersSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer
  }
});

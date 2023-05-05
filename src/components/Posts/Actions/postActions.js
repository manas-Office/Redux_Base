import { nanoid } from "@reduxjs/toolkit";

export const postAdded = (title, content) => {
  const id = nanoid();
  return {
    type: "posts/postAdded",
    payload: { id, title, content }
  };
};

export const postUpdate = ({ id, title, content }) => {
  return {
    type: "posts/postUpdate",
    id,
    title,
    content
  };
};

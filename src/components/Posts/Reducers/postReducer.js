import { postAdded } from "../Actions/postActions";
const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" }
];
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
  }
};

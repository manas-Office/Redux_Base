import React from "react";
import { useSelector } from "react-redux";

import { PostAuthor } from "../SharedFeatures/PostsxUsers/PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButton";

export const SinglePostPage = ({ match }) => {
  debugger;
  const { postId } = match.params;
  //stores id

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  //stores info using id

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  // conditional to alternate between
  // two different renders based on condition result

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
      </article>
    </section>
  );
};

// eslint-disable-next-line no-unused-vars
import React from "react";
import SingleComment from "./SingleComment";

function CommentsList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import AddComment from "./AddComment";
function CommentArea({ bookId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (bookId) {
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [bookId]);

  return (
    <div>
      <AddComment bookId={bookId} />
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>{comment.comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentArea;

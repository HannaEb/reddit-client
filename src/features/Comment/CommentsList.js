import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Comment.css";
import Comment from "./Comment";
import { fetchComments, selectComments } from "../../slices/commentSlice";

const CommentsList = () => {
  const selectedPost = useSelector((state) => state.comments.selectedPost);
  const comments = useSelector(selectComments);
  const status = useSelector((state) => state.comments.status);
  const error = useSelector((state) => state.comments.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(selectedPost));
  }, [selectedPost, dispatch]);

  if (status === "loading") {
    return <div className="notification">Loading comments...</div>;
  }

  if (status === "failed") {
    return <div className="notification">{error}</div>;
  }

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentsList;

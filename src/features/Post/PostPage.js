import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import Backlink from "../../components/Backlink/Backlink";
import { selectPostById } from "../../slices/postSlice";
import { setSelectedPermalink } from "../../slices/commentSlice";
import CommentsList from "../Comment/CommentsList";
import Card from "../../components/Card/Card";

const PostPage = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector((state) => selectPostById(state, postId));
  const dispatch = useDispatch();

  if (!post) {
    return (
      <>
        <div className="notification">Post not found</div>
        <Backlink />
      </>
    );
  }

  return (
    <>
      <Backlink onClick={() => dispatch(setSelectedPermalink(""))} />
      <Card>
        <Post post={post} />
        <CommentsList />
      </Card>
    </>
  );
};

export default PostPage;

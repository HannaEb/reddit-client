import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../Post/Post.css";
import Post from "../Post/Post";
import Backlink from "../../components/Backlink/Backlink";
import { setSelectedPermalink } from "../../slices/commentSlice";
import {
  fetchPosts,
  selectFilteredPosts,
  setSearchTerm,
} from "../../slices/postSlice";

const Feed = () => {
  const selectedSubreddit = useSelector(
    (state) => state.posts.selectedSubreddit
  );
  const filteredPosts = useSelector(selectFilteredPosts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

  if (status === "loading") {
    return <div className="notification">Loading posts...</div>;
  }

  if (status === "failed") {
    return (
      <>
        <div className="notification">{error}</div>
        <Backlink onClick={() => dispatch(setSearchTerm(""))} />
      </>
    );
  }

  if (filteredPosts.length === 0) {
    return (
      <>
        <div className="notification">No posts found</div>
        <Backlink onClick={() => dispatch(setSearchTerm(""))} />
      </>
    );
  }

  return (
    <>
      {filteredPosts.map((post) => (
        <Link
          key={post.id}
          to={`/posts/${post.id}`}
          onClick={() => dispatch(setSelectedPermalink(post.permalink))}
        >
          <div className="post">
            <Post post={post} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Feed;

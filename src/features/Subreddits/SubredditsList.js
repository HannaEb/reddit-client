import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Subreddits.css";
import Subreddit from "./Subreddit";
import { selectSubreddits, fetchSubreddits } from "../../slices/subredditSlice";
import { setSelectedSubreddit, setSearchTerm } from "../../slices/postSlice";

const Subreddits = () => {
  const subreddits = useSelector(selectSubreddits);
  const status = useSelector((state) => state.subreddits.status);
  const error = useSelector((state) => state.subreddits.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSubreddits());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div className="notification">Loading subreddits...</div>;
  }

  if (status === "failed") {
    return <div className="notification">{error}</div>;
  }

  return (
    <>
      <div className="subreddits-section">
        <div className="subreddits-header">
          <h2>Subreddits</h2>
          <IoMdArrowDropdown className="dropdown-arrow" size={18} />
        </div>
        <div className="subreddits-container">
          <div className="subreddits-list">
            {subreddits.map((subreddit) => (
              <Link
                to="/"
                key={subreddit.id}
                onClick={() => [
                  dispatch(setSelectedSubreddit(subreddit.url)),
                  dispatch(setSearchTerm("")),
                ]}
              >
                <div>
                  <Subreddit subreddit={subreddit} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subreddits;

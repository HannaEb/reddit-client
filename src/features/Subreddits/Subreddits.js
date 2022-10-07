import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import icon from "../../images/reddit-icon.png";
import "./Subreddits.css";
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
          <ul>
            {subreddits.map((subreddit) => (
              <Link to="/" key={subreddit.id}>
                <li>
                  <button
                    onClick={() => [
                      dispatch(setSelectedSubreddit(subreddit.url)),
                      dispatch(setSearchTerm("")),
                    ]}
                  >
                    <img
                      src={subreddit.icon_img || icon}
                      className="subreddit-icon"
                      alt=""
                    ></img>
                    <div>{subreddit.display_name}</div>
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Subreddits;

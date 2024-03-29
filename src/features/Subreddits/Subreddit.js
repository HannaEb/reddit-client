import React from "react";
import "./Subreddits.css";
import icon from "../../images/reddit-icon.png";

const Subreddit = (props) => {
  const { subreddit } = props;

  return (
    <>
      <button className="subreddit-btn">
        <img
          src={subreddit.icon_img || icon}
          className="subreddit-icon"
          alt=""
        ></img>
        <span>{subreddit.display_name}</span>
      </button>
    </>
  );
};

export default Subreddit;

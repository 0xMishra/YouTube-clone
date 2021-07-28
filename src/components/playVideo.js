import React from "react";
import { useGlobalContext } from "./context";
import { useParams } from "react-router-dom";
import "./playVideo.css";
import { useEffect } from "react";
import { useState } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ClearIcon from "@material-ui/icons/Clear";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
const PlayVideo = () => {
  const [videoToShow, setVideoToShow] = useState({});
  const { id } = useParams();
  const { searchResults } = useGlobalContext();
  useEffect(() => {
    const search = searchResults.find((item) => item.id === id);
    if (search) {
      setVideoToShow(search);
      console.log(videoToShow);
    }
  }, []);
  return (
    <>
      <div className="videoContainer">
        <iframe
          className="video"
          width="450"
          height="315"
          src={`https://www.youtube.com/embed/${videoToShow.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video_title">
          <h2>{videoToShow ? videoToShow.title : ""}</h2>
        </div>
      </div>
      <section className="video_info">
        <div className="video_icons">
          <div>
            <ThumbUpAltIcon className="videoBtn" />
          </div>
          <h4 className="iconName">LIKE</h4>
        </div>
        <div className="video_icons">
          <div>
            <ThumbDownIcon className="videoBtn" />
          </div>
          <h4 className="iconName">DISLIKE</h4>
        </div>
        <div className="video_icons videoBtnclip">
          <div>
            <ClearIcon className="videoBtn" />
          </div>
          <h4 className="iconName">CLIP</h4>
        </div>
        <div className="video_icons">
          <div>
            <ShareIcon className="videoBtn" />
          </div>
          <h4 className="iconName">SHARE</h4>
        </div>
        <div className="video_icons">
          <div>
            <FavoriteIcon className="videoBtn" />
          </div>
          <h4 className="iconName">THANKS</h4>
        </div>
      </section>
      <div className="line">
        <hr />
      </div>

      <div className="desc">
        <h3>{videoToShow ? videoToShow.description : ""}</h3>
      </div>
    </>
  );
};

export default PlayVideo;

import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useGlobalContext } from "./context";
import "./searchPage.css";
import { Link } from "react-router-dom";

var views = Math.floor(Math.random() * 200);

const SearchPage = () => {
  const { hideSidebar, searchResults, searchItem } = useGlobalContext();

  return (
    <main className="searchContent">
      {searchItem.length >= 1 ? (
        <div className="suggestions" onClick={hideSidebar}>
          {searchResults.map((item) => {
            const { id } = item;
            return (
              <Link
                to={`/video/${id}`}
                style={{
                  paddingLeft: 13,
                  textDecoration: "none",
                  color: "white",
                }}
                key={id}
              >
                <div>
                  <SearchElements {...item} />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h1 className="error">Type something in search box</h1>
      )}
    </main>
  );
};
const SearchElements = ({ thumbnails, channel, title, description }) => {
  return (
    <>
      <div>
        <main className="searchedVideos">
          <div className="searchedVideos__image">
            <img src={thumbnails.high.url} alt="" className="video_thumbnail" />
          </div>

          <aside className="more__info">
            <article className="searched__info">
              <h3 className="video_title">{title}</h3>
              <div className="moreIcon">
                <MoreVertIcon />
              </div>
            </article>
            <article className="searched__footer">
              <h4 className="ChannelName">{channel.title}</h4>
              <p className="views_on_video">
                {views}
                {views <= 2 ? "M" : "K"} views
                <span className="uploadTime">
                  {channel.raw.snippet.publishedAt}
                </span>
              </p>
            </article>
            <div className="video_dsc">{description}</div>
          </aside>
        </main>
        <div className="horizon">
          <hr />
        </div>
      </div>
    </>
  );
};

export default SearchPage;

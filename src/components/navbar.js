import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import iron from "../iron.jpg";
import logo from "../logo.svg";
import "./navbar.css";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { showSidebar, searchForVideos, submitSearch, searchValue } =
    useGlobalContext();

  return (
    <div className="content">
      <main className="navbar">
        <section className="navbar__icons">
          <MenuIcon className="navbar__menu" onClick={showSidebar} />
          <Link to="/">
            <img src={logo} alt="" className="navbar__logo" />
          </Link>
        </section>
        <form className="navbar__search">
          <div className="navbar__input">
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              className="searchBar"
              onChange={(e) => searchForVideos(e)}
            />
            <Link to={`/${searchValue}`}>
              <SearchIcon
                className="navbar__searchicon"
                onClick={() => submitSearch()}
              />
            </Link>
          </div>
        </form>
        <section className="navbar__profile">
          <div className="videoIcon">
            <VideoCallIcon />
          </div>
          <div className="AppsIcon">
            <AppsIcon />
          </div>
          <div className="bellIcon">
            <NotificationsIcon />
          </div>
          <div>
            <img src={iron} alt="" className="navbar__avatar" />
          </div>
        </section>
      </main>

      <div className="horizon">
        <hr />
      </div>
      <article className="topics">
        <form className="extraSearch">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            className="miniSearch"
            onChange={(e) => searchForVideos(e)}
          />
          <Link to={`/${searchValue}`}>
            <SearchIcon
              className="navbar__searchicon2"
              onClick={() => submitSearch()}
            />
          </Link>
        </form>

        <div className="cards">
          <div id="All">All</div>
          <div className="JavaScript">JavaScript</div>
          <div className="python">python</div>
          <div className="comedy">comedy</div>
          <div className="movies">movies</div>
          <div className="stock">stock market</div>
          <div className="wordPress">wordPress</div>
          <div className="TVF">the viral fever</div>
          <div className="tsp">TSP</div>
          <div className="clever">clever programmer</div>
        </div>
        <div className="forwardArrow">
          <ArrowForwardIosIcon className="arrowfor" />
        </div>
      </article>

      <hr />
    </div>
  );
};

export default Navbar;

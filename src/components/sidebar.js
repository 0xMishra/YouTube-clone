import React from "react";
import "./sidebar.css";
import data from "./data";
import { extra, final } from "./data";
import logo from "../logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import { useGlobalContext } from "./context";
const Sidebar = () => {
  const { isSidebarShow, showSidebar, hideSidebar } = useGlobalContext();
  return (
    <div className={isSidebarShow ? "sidebar" : "sidebar__hide"}>
      <section className="sidebar__list">
        <article className="sidebar__heading">
          <div className="sidebar__menu">
            <MenuIcon onClick={hideSidebar} />
          </div>
          <div>
            <img src={logo} alt="" className="sidebar__logo" />
          </div>
          <div className="unused"></div>
        </article>
        {data.map((item) => {
          const { id, icon, title } = item;
          return (
            <div key={id} className="sidebar__elements">
              <div className="sidebar__icon">{icon}</div>
              <h1 className="sidebar__title">{title}</h1>
            </div>
          );
        })}
        <div className="horizon">
          <hr />
        </div>

        <div className="sidebar__info">
          <p className="firstInfo sidebar__paras"> About Press Copyright</p>
          <p className="sidebar__paras">Contact us Creators</p>
          <p className="sidebar__paras">Advertise Developers</p>
          <br />

          <p className="sidebar__paras">Terms Privacy Policy & Safety </p>
          <p className="sidebar__paras">How YouTube works</p>
          <p className="sidebar__paras">Test new features</p>

          <p className="license sidebar__paras">@ 2021 Google LLC</p>
          <br />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;

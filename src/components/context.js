import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
const YouTube = require("simple-youtube-api");

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchItem, setSearchItem] = useState(searchValue);
  const [canSearchForVideos, setCanSearchForVideos] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const youTube = new YouTube("YOUR API KEY");

    youTube.searchVideos(searchItem, 15).then((resp) => {
      setSearchResults(resp);
      console.log(resp);
      console.log(searchResults);
    });
  }, [searchItem, window.onload]);
  const searchForVideos = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const submitSearch = () => {
    setSearchItem(searchValue);
    setCanSearchForVideos(true);
  };

  const showSidebar = () => {
    setIsSidebarShow(true);
  };
  const hideSidebar = () => {
    setIsSidebarShow(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarShow,
        showSidebar,
        searchForVideos,
        searchValue,
        hideSidebar,
        submitSearch,
        searchItem,
        items,
        canSearchForVideos,
        searchResults,
        setItems,
      }}
    >
      <div>{children}</div>
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;

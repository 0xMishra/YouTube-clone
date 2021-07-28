import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import { useGlobalContext } from "./components/context";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/searchPage";
import PlayVideo from "./components/playVideo";
import Recommended from "./components/Recommended";
const App = () => {
  const { searchItem } = useGlobalContext();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Navbar />
            <Sidebar />
            <Recommended />
          </div>
        </Route>
        <Route
          path={`/${searchItem}`}
          children={
            <div>
              <Navbar />
              <Sidebar />
              <SearchPage />
            </div>
          }
        />
        <Route
          path="/video/:id"
          children={
            <div>
              <Navbar />
              <Sidebar />
              <PlayVideo />
            </div>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

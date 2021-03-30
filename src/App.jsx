import React, { useEffect } from "react";
import SearchBar from "./components/searchBar";
import CardList from "./components/cardList";
import { Route, Switch } from "react-router";

const App = () => {
  return (
    <div>
      <SearchBar />
      <CardList />
      <Switch>{/* <Route /> */}</Switch>
    </div>
  );
};

export default App;

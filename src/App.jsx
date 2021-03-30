import React, { useEffect, useState } from "react";
import CardList from "components/cardList";
import { Route, Switch } from "react-router";
import requestAPI, { APIList } from "apis";
import SearchBar from "components/searchBar";
import qs from "query-string";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {
        data: { items },
      } = await requestAPI(APIList.getMostPopular);
      setItems(items);
    };
    getData();
  }, []);

  const onSearch = (q) => {
    console.log(typeof q);
    const getData = async () => {
      const {
        data: { items },
      } = await requestAPI(APIList.getSearch, { q: q });
      setItems(items);
    };
    getData();
  };
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <CardList items={items} />
      <Switch>{/* <Route /> */}</Switch>
    </div>
  );
};

export default App;

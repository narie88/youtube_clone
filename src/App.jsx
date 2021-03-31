import React, { useCallback, useEffect, useState } from "react";
import CardList from "components/cardList";
import { Route, Switch } from "react-router";
import requestAPI, { APIList } from "apis";
import SearchBar from "components/searchBar";
import Home from "pages/home";
import Detail from "pages/detail";

const App = () => {
  const [items, setItems] = useState([]);
  const [nextToken, setNextToken] = useState("");
  const [dataItem, setDataItem] = useState({
    nextPageToken: null,
    prevPageToken: null,
    pageInfo: {},
  });
  const [loading, setLoading] = useState(false);

  //
  useEffect(() => {
    setLoading(true);
    const res = async () => {
      const {
        data: { items, nextPageToken, prevPageToken, pageInfo },
      } = await requestAPI(APIList.getMostPopular);
      setItems(items);
      setNextToken(nextPageToken);
      setLoading(false);
    };
    res();
  }, []);

  const onSearch = useCallback((qs) => {
    setLoading(true);
    const res = async () => {
      const {
        data: { items, nextPageToken },
      } = await requestAPI(APIList.getSearch, { q: qs });
      setItems(items);
      setNextToken(nextPageToken);
      setLoading(false);
    };
    res();
  }, []);

  const onMore = useCallback(() => {
    const res = async () => {
      const {
        data: { items: newItems, nextPageToken },
      } = await requestAPI(APIList.getMostPopular, {
        pageToken: nextToken,
      });

      setItems([...items, ...newItems]);
      setNextToken(nextPageToken);
      setLoading(false);
    };
    res();
  }, []);
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  );
};

export default App;

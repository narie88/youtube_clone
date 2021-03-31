import React, { useState, useEffect } from "react";
import Loading from "components/loading";
import CardList from "components/cardList";
import requestAPI, { APIList } from "apis";
import SearchBar from "components/searchBar";
import Detail from "pages/detail";

const Home = () => {
  const [items, setItems] = useState([]);
  const [detailVideo, setDetailVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nextToken, setNextToken] = useState("");
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

  const onMore = () => {
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
  };

  const onSearch = (qs) => {
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
  };

  const onSelected = (video) => {
    setDetailVideo(video);
  };
  return (
    <>
      <SearchBar onSearch={onSearch} />
      {detailVideo && <Detail video={detailVideo} />}

      {loading ? (
        <Loading />
      ) : (
        <CardList items={items} onSelected={onSelected} onMore={onMore} />
      )}
    </>
  );
};

export default Home;

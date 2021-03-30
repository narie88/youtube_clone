import React, { useEffect, useState } from "react";
import requestAPI, { APIList } from "../apis";

import CardItem from "./cardItem";

const CardList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getSource = async () => {
      console.log("a");
      const {
        data: { items },
      } = await requestAPI(APIList.getMostPopular);
      setItems(items);
    };
    getSource();
  }, []);
  return (
    <div>
      {items &&
        items.length &&
        items.map((item) => <CardItem key={item.id} item={item} />)}
    </div>
  );
};

export default CardList;

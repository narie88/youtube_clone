import React, { useEffect, useState } from "react";
import requestAPI, { APIList } from "../apis";

import CardItem from "./cardItem";

const CardList = ({ items }) => {
  return (
    <div>
      {items &&
        items.length &&
        items.map((item) => <CardItem key={item.id} item={item} />)}
    </div>
  );
};

export default CardList;

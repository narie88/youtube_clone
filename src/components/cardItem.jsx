import React, { useEffect } from "react";
const CardItem = ({ item }) => {
  return (
    <a href="#none">
      <span>
        <img src="" alt="" />
      </span>
      <div className="info">
        <strong>{item.snippet.title}</strong>
        <span>channel</span>
      </div>
    </a>
  );
};

export default CardItem;

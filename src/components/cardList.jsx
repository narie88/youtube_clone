import React, { useCallback, useEffect, useState } from "react";
import requestAPI, { APIList } from "../apis";

import CardItem from "./cardItem";
import NotFound from "./notFound";
import styles from "components/cardList.module.css";

const CardList = ({ items, onMore, onSelected }) => {
  const cardId = useCallback((item) => {
    if (item.kind === "youtube#searchResult") {
      return item.id.kind === "youtube#channel"
        ? item.id.channelId
        : item.id.videoId;
    } else {
      return item.id;
    }
  }, []);
  return (
    <div>
      {items && items.length > 0 ? (
        <>
          <ul className={styles.videos}>
            {items.map((item) => (
              <CardItem
                key={cardId(item)}
                onSelected={onSelected}
                item={item}
              />
            ))}
          </ul>
          <button type="button" onClick={onMore}>
            more
          </button>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default CardList;

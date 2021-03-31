import React, { memo, useEffect } from "react";
import styles from "components/cardItem.module.css";
const CardItem = ({ item, item: { snippet }, onSelected }) => {
  return (
    <li className={styles.container} onClick={() => onSelected(item)}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default memo(CardItem);

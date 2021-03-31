import React from "react";

const Detail = ({ video }) => {
  console.log(video);
  return (
    <div>
      {video.snippet.title}
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Detail;

import React, { useEffect, useState } from "react";
import { SEARCH_YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const SerachResults = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(SEARCH_YOUTUBE_API + searchParams.get("q"));
    const json = await data.json();
    setVideo(json.items);
  };

  const DisplayCards = ({ info }) => {
    if (!info) return;
    const { snippet } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
      <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg" alt={title} src={thumbnails.medium.url} />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.snippet.title} to={"/watch?v=" + video.id.videoId}>
          <DisplayCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SerachResults;

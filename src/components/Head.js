import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GOOGLE_SEARCH_API, SEARCH_YOUTUBE_API } from "../utils/constants";
import { cacheResults, searchResults } from "../utils/searchSlice";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchRes(searchCache[searchText]);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchText]);

  const handleSearchClick = (searchText) => {
    window.location.href = "/search?q=" + searchText;
  };

  const getSearchResults = async () => {
    const data = await fetch(GOOGLE_SEARCH_API + searchText);
    const json = await data.json();
    setSearchRes(json[1]);
    dispatch(
      cacheResults({
        [searchText]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1920px-Hamburger_icon.svg.png"
        />
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
        />
        <button
          className="p-2 border border-gray-400 rounded-r-full"
          onClick={() => handleSearchClick(searchText)}
        >
          Search
        </button>
        {searchText.length > 0 && showSuggestions && (
          <div className="absolute py-2 mx-5 w-[30rem] bg-white p-2 border border-gray-10 shadow-lg rounded-lg">
            <ul>
              {searchRes.map((res) => (
                <li
                  className="py-2 shadow-sm cursor-pointer hover:bg-gray-100"
                  key={res}
                  onClick={() => {
                    setSearchText(res);
                  }}
                >
                  {res}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 ">
        <img
          className="h-8"
          alt="user-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
        />
      </div>
    </div>
  );
};

export default Head;

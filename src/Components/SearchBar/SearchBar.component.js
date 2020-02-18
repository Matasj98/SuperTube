import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../Actions/setSearchTerm";
import { getVideoList } from "../../Thunk/getVideoList";
import "./SearchBar.style.scss";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search for video"
        onChange={e => dispatch(setSearchTerm(e.target.value))}
        onKeyDown={e => {
          if (e.key === "Enter") {
            dispatch(getVideoList());
          }
        }}
      />
      <button onClick={() => dispatch(getVideoList())}>Search</button>
    </div>
  );
};

export default SearchBar;

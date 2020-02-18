import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import "./PopUp.style.scss";
import { setIsSelected } from "../../Actions/setSelectedVideo";

const PopUp = () => {
  const data = useSelector(state => ({
    videoId: state.selectedVideo.videoId
  }));

  const dispatch = useDispatch();

  return (
    <div className="PopUp">
      <div className="VideoBody">
        <button
          className="CloseVideo"
          onClick={() => dispatch(setIsSelected(false))}
        >
          X
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${data.videoId}`}
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default PopUp;

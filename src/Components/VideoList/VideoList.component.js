import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedVideo,
  setIsSelected
} from "../../Actions/setSelectedVideo";
import "./VideoList.style.scss";
import Loader from "react-loader-spinner";

const VideoList = () => {
  const data = useSelector(state => ({
    videoList: state.videoList.videoList,
    loading: state.videoList.loading
    // videoId: state.selectedVideo.videoId
  }));

  const dispatch = useDispatch();

  if (data.loading) {
    return (
      <Loader
        className="u-flexCenter"
        type="Circles"
        color="#somecolor"
        height={80}
        width={80}
      />
    );
  }

  if (data.videoList === null) {
    return <h1 className="u-flexCenter default-font">Start searching</h1>;
  }

  if (data.videoList.length === 0) {
    return <h1 className="u-flexCenter default-font">No results</h1>;
  }

  return (
    <div className="VideoList">
      {data.videoList.map((item, index) => {
        return (
          <div key={index} className="VideoListBox">
            <div className="imgBox">
              <img
                src={item.snippet.thumbnails.high.url}
                onClick={() => {
                  dispatch(setSelectedVideo(item.id.videoId));
                  dispatch(setIsSelected(true));
                }}
              />
            </div>

            <p>{item.snippet.title}</p>
          </div>
        );
      })}
      {console.log(data.videoList)}
    </div>
  );
};

export default VideoList;

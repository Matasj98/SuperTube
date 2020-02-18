import React from "react";
import SearchBar from "./Components/SearchBar/SearchBar.component";
import VideoList from "./Components/VideoList/VideoList.component";
import PopUp from "./Components/PopUp/PopUp.component";
import Logo from "./Components/Logo/Logo.component";
import { useSelector } from "react-redux";
import "./app.scss";

const App = () => {
  const isVideoSelected = useSelector(state => state.selectedVideo.isSelected);

  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <VideoList />
      {isVideoSelected ? <PopUp /> : null}
    </div>
  );
};

export default App;

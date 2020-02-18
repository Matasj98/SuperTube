import { combineReducers } from "redux";
import { videoList } from "./videoList";
import { searchTerm } from "./searchTerm";
import { selectedVideo } from "./selectedVideo";

const appReducer = combineReducers({
  videoList,
  searchTerm,
  selectedVideo
});

export const allReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }

  return appReducer(state, action);
};

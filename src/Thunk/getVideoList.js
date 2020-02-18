import axios from "axios";
import { setVideoList, setLoading } from "../Actions/setVideoList";

export const getVideoList = () => {
  return async (dispatch, getState) => {
    const onSuccess = success => {
      dispatch(setLoading(false));
      dispatch(setVideoList(success.data.items));
      return success;
    };
    const onError = error => {
      dispatch(setLoading(false));
      dispatch(setVideoList('error'));
      return error;
    };
    try {
      dispatch(setLoading(true));
      const success = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            part: "snippet",
            maxResults: 10,
            key: "AIzaSyBBqnrelToJXoP31V_63d6r6n_SRtz-dBA",
            q: getState().searchTerm.term
          }
        }
      );
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
};

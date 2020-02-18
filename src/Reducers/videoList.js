const initialState = {
  videoList: null,
  loading: false
};

export const videoList = (state = initialState, action) => {
  switch (action.type) {
    case "setVideoList":
      return {
        ...state,
        videoList: action.videoList
      };
    case "setLoading":
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};

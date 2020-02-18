const initialState = {
  videoId: null,
  isSelected: false
};

export const selectedVideo = (state = initialState, action) => {
  switch (action.type) {
    case "setSelectedVideo":
      return {
        ...state,
        videoId: action.videoId
      };
    case "setIsSelected":
      return {
        ...state,
        isSelected: action.isSelected
      };

    default:
      return state;
  }
};

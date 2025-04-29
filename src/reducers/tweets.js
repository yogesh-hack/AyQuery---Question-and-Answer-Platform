const tweetsReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case "POST_TWEETS":
        return { ...state };
      case "POST_COMMENT":
        return { ...state };
      case "FETCH_ALL_TWEETS":
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  export default tweetsReducer;
  
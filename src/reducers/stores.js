const storesReducer = (state = { data: null }, action) => {
    switch (action.type) {
      case "POST_STORES":
        return { ...state };
      case "POST_COMMENT":
        return { ...state };
      case "FETCH_ALL_STORES":
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  export default storesReducer;
  
import * as api from "../api/index";
export const fetchAllStores = () => async (dispatch) => {
  try {
    const { data } = await api.getAllStores();
    console.log("api store data : ",data);
    dispatch({ type: "FETCH_ALL_STORES", payload: data });
  } catch (error) {
    console.log(error);
  }
};

import { CHANGE_LIST } from "./actionTypes";

//普通action
export const changeList = list => ({
  type: CHANGE_LIST,
  payload: list
});

//异步操作的action(采用thunk中间件)
export const getHomeList = () => (dispatch, getState, axiosInstance) => {
  return axiosInstance
    .get("/api/list")
    .then(res => {
      const list = res.data;
      // console.log("===== axios-data", list.data);
      return dispatch(changeList(Array.isArray(list.data) ? list.data : []));
    })
    .catch(error => {
      console.error(error);
    });
};

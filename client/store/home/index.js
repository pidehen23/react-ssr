import { CHANGE_LIST } from "./actionTypes";
const initState = {
  name: "chenjiajing",
  list: []
};

export default function(state = initState, action = {}) {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}

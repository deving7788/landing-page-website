import { slideItems } from "./data";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_LARGE_IMAGE":
      return { ...state, show_large_image: true };

    case "HIDE_IMAGE":
      return { ...state, show_large_image: false, active_NO: 0 };

    case "SET_ACTIVE_NO":
      return { ...state, active_NO: action.payload };

    case "NEXT_IMAGE":
      let nextNO = state.active_NO + 1;
      if (nextNO > slideItems.length) {
        nextNO = 1;
      }
      return { ...state, active_NO: nextNO };

    case "PREV_IMAGE":
      let prevNO = state.active_NO - 1;
      if (prevNO < 1) {
        prevNO = slideItems.length;
      }
      return { ...state, active_NO: prevNO };

    default:
      return state;
  }
};
export default reducer;

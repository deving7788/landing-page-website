import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";
import { slideItems } from "./data";

const mainContext = createContext();

const initialState = {
  slideItems,
  show_large_image: false,
  active_NO: 0,
};

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const showLargeImage = () => {
    dispatch({ type: "SHOW_LARGE_IMAGE" });
  };
  const hideLargeImage = () => {
    dispatch({ type: "HIDE_IMAGE" });
  };
  const setActiveNO = (id) => {
    dispatch({ type: "SET_ACTIVE_NO", payload: id });
  };
  const showNextImage = () => {
    dispatch({ type: "NEXT_IMAGE" });
  };
  const showPrevImage = () => {
    dispatch({ type: "PREV_IMAGE" });
  };

  return (
    <mainContext.Provider
      value={{
        ...state,
        showLargeImage,
        hideLargeImage,
        setActiveNO,
        showNextImage,
        showPrevImage,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

export const useMainContext = () => {
  return useContext(mainContext);
};

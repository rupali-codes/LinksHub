import { useReducer, createContext, ReactNode } from "react";
import { IContext } from "types";
import GlobalReducer from "./GlobalReducer";

const initialState: IContext = {
  sidebar: false,
  lang: 'en'
};
const GlobalContext = createContext<IContext>(initialState);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  function openNav() {
    dispatch({
      type: "OPEN_NAV",
    });
  }
  function closeNav() {
    dispatch({
      type: "CLOSE_NAV",
    });
  }
  function toggleNav() {
    dispatch({
      type: "TOGGLE_NAV",
    });
  }
  function changeLang() {
    dispatch({
      type: "CHANGE_LANG",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        sidebar: state.sidebar,
        lang: state.lang,
        openNav,
        closeNav,
        toggleNav,
        changeLang
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };

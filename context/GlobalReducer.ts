import { IContext } from "../types";

function GlobalReducer(state: IContext, action: any): IContext {
  switch (action.type) {
    case "OPEN_NAV":
      return { ...state, sidebar: true };
    case "CLOSE_NAV":
      return { ...state, sidebar: false };
    case "TOGGLE_NAV":
      return { ...state, sidebar: !state.sidebar };
    case "CHANGE_LANG":
      return { ...state, lang: state.lang === 'en' ? 'es' : 'en' };
    default:
      state;
  }
  return state;
}

export default GlobalReducer;

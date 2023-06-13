import { IContext } from '../types'

function GlobalReducer(state: IContext, action: any): IContext {
  switch (action.type) {
    case 'OPEN_NAV':
      return { ...state, sidebar: true }
    case 'CLOSE_NAV':
      return { ...state, sidebar: false }
    case 'TOGGLE_NAV':
      return { ...state, sidebar: !state.sidebar }
    default:
      state
  }
  return state
}

export default GlobalReducer

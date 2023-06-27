import { useReducer, createContext, ReactNode } from 'react'
import { IContext } from 'types'
import GlobalReducer from './GlobalReducer'

const initialState: IContext = {
  sidebar: false,
}
const GlobalContext = createContext<IContext>(initialState)

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)
  function openNav() {
    dispatch({
      type: 'OPEN_NAV',
    })
  }
  function closeNav() {
    dispatch({
      type: 'CLOSE_NAV',
    })
  }
  function toggleNav() {
    dispatch({
      type: 'TOGGLE_NAV',
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        sidebar: state.sidebar,
        openNav,
        closeNav,
        toggleNav,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider }

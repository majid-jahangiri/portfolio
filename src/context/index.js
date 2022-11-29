import { createContext, useContext } from 'react'

export const mainContext = createContext({
  pageNumber: 0,
  handlePageNumber: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
})

export const useGlobalContext = () => {
  return useContext(mainContext)
}

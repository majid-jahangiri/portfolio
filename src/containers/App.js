import { useEffect, useState } from 'react'

import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import SwipeableViews from 'react-swipeable-views'

import MainLayout from '../layouts/MainLayout'
import { Sidebar } from '../components/sidebar'
import { DrawerActionButton } from '../components/drawer'
import { Page } from '../components/pages'
import PagesContainer from './PagesContainer'
import SidebarContainer from './SidebarContainer'
import { mainContext } from '../context'
import { Home, About, Resume, Sample, Comments, Contact } from '../pages'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mode, setMode] = useState()

  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  }, [])

  const handleThemeChange = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false)
    }
  }, [isMdUp])

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue)
  }
  return (
    <mainContext.Provider value={{ pageNumber, handlePageNumber, handleThemeChange, drawerOpen, setDrawerOpen }}>
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home title={'وب سایت شخصی | صفحه اصلی'} />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About title={'وب سایت شخصی | درباره من'} />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume title={'وب سایت شخصس | رزومه من'} />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Sample title={'وب سایت شخصی | نمونه کارها'} />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments title={'وب سایت شخصی | نظرات مشتریان'} />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact title={'وب سایت شخصی | تماس با من'} />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </mainContext.Provider>
  )
}

export default App

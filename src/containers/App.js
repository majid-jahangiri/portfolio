import { useEffect, useState } from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import MainLayout from '../layouts/MainLayout'
import { Sidebar } from '../components/sidebar'
import { DrawerActionButton } from '../components/drawer'
import PagesContainer from './PagesContainer'
import Page from '../pages/components/Page'
import SidebarContainer from './SidebarContainer'
import { mainContext } from '../context'
import SwipeableViews from 'react-swipeable-views'
import { Home, About, Resume } from '../pages'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false)
    }
  }, [isMdUp])

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue)
  }
  return (
    <mainContext.Provider value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}>
      <MainLayout>
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
              <Typography variant="subtitle" sx={{ textAlign: 'center' }}>
                نمونه کارها
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Typography variant="subtitle" sx={{ textAlign: 'center' }}>
                نظرات مشتریان
              </Typography>
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Typography variant="subtitle" sx={{ textAlign: 'center' }}>
                ارتباط با من
              </Typography>
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </mainContext.Provider>
  )
}

export default App

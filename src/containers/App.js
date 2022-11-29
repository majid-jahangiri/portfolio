import { useState } from 'react'
import { Typography } from '@mui/material'

import MainLayout from '../layouts/MainLayout'
import { Sidebar } from '../components/sidebar'
import { DrawerActionButton } from '../components/drawer'
import PagesContainer from './PagesContainer'
import Page from '../pages/components/Page'
import SidebarContainer from './SidebarContainer'
import { mainContext } from '../context'
import SwipeableViews from 'react-swipeable-views'
import { Home, About } from '../pages'

function App() {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

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
              <Home />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Typography variant="subtitle" sx={{ textAlign: 'center' }}>
                رزومه من
              </Typography>
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

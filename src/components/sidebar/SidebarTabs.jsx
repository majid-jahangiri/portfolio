import { Tabs, Tab } from '@mui/material'

import { useGlobalContext } from '../../context'
import {tabsData} from '../data/tabsData.sidebar'

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } = useGlobalContext()
  
  const data = tabsData()

  const drawerHandle = () => {
    setDrawerOpen(false)
  }

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      textColor="secondary"
      indicatorColor="secondary"
      sx={{
        '& .MuiTabs-flexContainer': {
          alignItems: 'start',
          px: 4,
        },
      }}
    >
      {data.map((tab, index) => (
        <Tab key={index} label={tab.label} icon={tab.icon} iconPosition="start" {...tab} sx={{ minHeight: 45 }} onClick={drawerHandle} />
      ))}
    </Tabs>
  )
}

export default SidebarTabs

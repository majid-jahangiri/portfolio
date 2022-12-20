import { Tabs, Tab } from '@mui/material'

import { useTheme } from '@mui/material/styles'

import { useGlobalContext } from '../../context'
import { tabsData } from '../../constants/tabsData'

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } = useGlobalContext()

  const theme = useTheme()
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
      textColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
      indicatorColor={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
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

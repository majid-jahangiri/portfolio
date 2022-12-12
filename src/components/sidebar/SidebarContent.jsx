import { Box, Divider } from '@mui/material'

import { SidebarHeader, SidebarFooter, SidebarTabs } from '.'

const SidebarContent = () => {
  return (
    <Box sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column', height: '96vh', mt: 2 }}>
      <SidebarHeader />
      <Divider variant="middle" sx={{ mb: 2 }} />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  )
}

export default SidebarContent

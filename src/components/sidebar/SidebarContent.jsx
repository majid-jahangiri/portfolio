import { Box, Divider } from '@mui/material'

import { SidebarHeader, SidebarFooter, SidebarTabs } from '.'

const SidebarContent = () => {
  return (
    <Box sx={{ textAlign: 'center', justifiyContent: 'center', mt: 2 }}>
      <SidebarHeader />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <SidebarTabs />
      <Divider variant="middle" sx={{ mt: 2 }} />
      <SidebarFooter />
    </Box>
  )
}

export default SidebarContent

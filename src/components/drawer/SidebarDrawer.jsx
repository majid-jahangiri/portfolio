import { Drawer } from '@mui/material'
import { SidebarContent } from '../sidebar'

import { useGlobalContext } from '../../context'

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useGlobalContext()
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 300,
          backgroundColor: 'primary.main',
        },
        display: {
          xs: 'block',
          md: 'none',
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  )
}

export default SidebarDrawer

import { Drawer } from '@mui/material'
import { SidebarContent } from '../sidebar'

import { useGlobalContext } from '../../context'

import { useTheme } from '@mui/material/styles'

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useGlobalContext()
  const theme = useTheme()
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 300,
          backgroundColor: theme.palette.mode === 'dark' ? null : 'secondary.main',
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

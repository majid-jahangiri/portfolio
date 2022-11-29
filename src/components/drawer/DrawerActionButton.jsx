import { Fab, Box } from '@mui/material'
import { MenuRounded } from '@mui/icons-material'
import { useGlobalContext } from '../../context'

const DrawerActionButton = () => {
  const { setDrawerOpen } = useGlobalContext()
  return (
    <Box
      sx={{
        position: 'absolute',
        display: {
          xs: 'block',
          md: 'none',
        },
      }}
    >
      <Fab color="success" aria-label="sidebar" size="small" sx={{ m: 2 }} onClick={() => setDrawerOpen(true)}>
        <MenuRounded />
      </Fab>
    </Box>
  )
}

export default DrawerActionButton

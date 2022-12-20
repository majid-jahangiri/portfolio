import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'

const SidebarContainer = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid
      xs={0}
      md={3}
      lg={2}
      sx={{
        backgroundColor: `${theme.palette.mode === 'dark' ? 'primary.main' : 'secondary.main'}`,
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        zIndex: 1,
      }}
    >
      {children}
    </Grid>
  )
}

export default SidebarContainer

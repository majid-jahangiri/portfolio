import Grid from '@mui/material/Unstable_Grid2'

const SidebarContainer = ({ children }) => {
  return (
    <Grid xs={0} md={3} lg={2} sx={{ backgroundColor: 'primary.main', height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
      {children}
    </Grid>
  )
}

export default SidebarContainer

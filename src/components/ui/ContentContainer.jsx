import Grid from '@mui/material/Unstable_Grid2'

const ContentContainer = ({ children }) => {
  return (
    <Grid xs={12} md={9} lg={10} sx={{ backgroundColor: 'secondary.main' }}>
      {children}
    </Grid>
  )
}

export default ContentContainer

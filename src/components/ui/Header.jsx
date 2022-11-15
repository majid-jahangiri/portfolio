import { cloneElement } from 'react'
import { AppBar, Toolbar, Button, useScrollTrigger, Typography } from '@mui/material'

const Header = () => {
  function ElevationScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    })

    return cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
  }
  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Toolbar>
            <Typography>وب سایت شخصی مجید جهانگیری</Typography>
            <Button variant="contained" color="success">
              کلیک کن
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  )
}

export default Header

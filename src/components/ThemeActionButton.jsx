import { useTheme } from '@mui/material/styles'
import { Fab, Box } from '@mui/material'
import { WbSunnyOutlined, NightlightOutlined } from '@mui/icons-material'

import { useGlobalContext } from '../context'

const ThemeActionButton = () => {
  const { handleThemeChange } = useGlobalContext()

  const theme = useTheme()

  return (
    <Box
      sx={{
        // position: 'absolute',
        textAlign: 'start',
        mb: 1,
      }}
    >
      <Fab aria-label="ThemeChanger" variant="extended" color="success" size="small" sx={{ ml: 2, color: 'whitesmoke' }} onClick={handleThemeChange}>
        {theme.palette.mode === 'dark' ? <WbSunnyOutlined sx={{ mr: 1 }} /> : <NightlightOutlined sx={{ mr: 1 }} />}
        {theme.palette.mode === 'dark' ? 'تم روز' : 'تم شب'}
      </Fab>
    </Box>
  )
}

export default ThemeActionButton

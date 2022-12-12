import { Typography, Box } from '@mui/material'
import { FavoriteRounded, CopyrightRounded } from '@mui/icons-material'

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end',
        mb: 1.5,
      }}
    >
      {/* <Typography variant="subtitle2" color="whitesmoke">
        طراحی شده با <FavoriteRounded sx={{ verticalAlign: 'middle', color: 'tomato', height: 20 }} />
      </Typography> */}
      <Typography variant="caption" color="whitesmoke" sx={{ mt: 1 }}>
        کپی رایت 1401
        <CopyrightRounded sx={{ verticalAlign: 'middle', height: 16 }} />
      </Typography>
    </Box>
  )
}

export default SidebarFooter

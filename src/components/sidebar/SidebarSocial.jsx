import { Box, IconButton } from '@mui/material'

import { socialData } from './socialData'

const SidebarSocial = () => {
  return (
    <Box component="div" sx={{ m: '0 auto', textAlign: 'center' }}>
      {socialData.map((item, index) => (
        <IconButton aria-label={item.ariaLabel} key={index}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </IconButton>
      ))}
    </Box>
  )
}

export default SidebarSocial

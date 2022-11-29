import { Typography, Avatar } from '@mui/material'

import avatar from '../../assets/avatar.jpg'

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        src={avatar}
        variant="rounded"
        sx={{
          height: 200,
          width: 200,
          margin: '0 auto',
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        MJ
      </Avatar>
      <Typography variant="h6" color="whitesmoke" sx={{ mt: 2 }}>
        مجید جهانگیری
      </Typography>
      <Typography variant="caption" color="whitesmoke">
        برنامه نویس و توسعه دهنده
      </Typography>
    </>
  )
}

export default SidebarHeader

import { Avatar } from '@mui/material'

const MyAvatar = ({ avatar, size, fallback, other }) => {
  return (
    <Avatar
      src={avatar}
      variant="rounded"
      sx={{
        height: `${size}px`,
        width: `${size}px`,
        margin: '0 auto',
        display: {
          xs: 'none',
          md: 'block',
        },
      }}
    >
      {fallback}
    </Avatar>
  )
}

export default MyAvatar

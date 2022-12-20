import { Typography } from '@mui/material'

import ThemeActionButton from '../ThemeActionButton'

import { SidebarSocial } from './'
import {MyAvatar} from '../common'
import avatar from '../../assets/avatar.jpg'

const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <MyAvatar avatar={avatar} size={200} fallback={'MJ'} />
      <Typography variant="h6" color="text.primary" sx={{ mt: 2 }}>
        مجید جهانگیری
      </Typography>
      <Typography variant="caption" color="text.primary">
        برنامه نویس و توسعه دهنده
      </Typography>
      <SidebarSocial />
    </>
  )
}

export default SidebarHeader

import Grid from '@mui/material/Unstable_Grid2'
import { Typography, Box, Divider, Avatar, Hidden, Tabs, Tab, useScrollTrigger } from '@mui/material'
import { grey } from '@mui/material/colors'
import { HomeRounded, FaceRounded, TextSnippetRounded, TerminalRounded, MessageRounded, ConnectWithoutContactRounded, FavoriteRounded, CopyrightRounded, Drawer } from '@mui/icons-material'
import { useState } from 'react'

const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    }
  }
  return (
    <Grid xs={0} md={3} lg={2} sx={{ backgroundColor: grey[900] }}>
      <Drawer
      open={true}
      >
        <Box sx={{ textAlign: 'center', justifiyContent: 'center', mt: 2 }}>
          <Hidden mdDown>
            <Avatar src={require('../assets/avatar.jpg')} variant="rounded" sx={{ height: 200, width: 200, margin: '0 auto' }}>
              MJ
            </Avatar>
          </Hidden>
          <Typography variant="h6" color="whitesmoke">
            مجید جهانگیری
          </Typography>
          <Typography variant="caption" color="whitesmoke">
            برنامه نویس و توسعه دهنده
          </Typography>
          <Divider variant="middle" sx={{ mt: 2 }} />
          <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile value={value} onChange={handleChange}>
            <Tab label="صفحه اصلی" icon={<HomeRounded />} iconPosition="start" {...tabProps(0)} sx={{ minHeight: 56 }} />
            <Tab label="درباره من" icon={<FaceRounded />} iconPosition="start" {...tabProps(1)} sx={{ minHeight: 56 }} />
            <Tab label="رزومه من" icon={<TextSnippetRounded />} iconPosition="start" {...tabProps(2)} sx={{ minHeight: 56 }} />
            <Tab label="نمونه کارها" icon={<TerminalRounded />} iconPosition="start" {...tabProps(3)} sx={{ minHeight: 56 }} />
            <Tab label="نظرات مشتریان" icon={<MessageRounded />} iconPosition="start" {...tabProps(4)} sx={{ minHeight: 56 }} />
            <Tab label="ارتباط با من" icon={<ConnectWithoutContactRounded />} iconPosition="start" {...tabProps(5)} sx={{ minHeight: 56 }} />
          </Tabs>
          <Divider variant="middle" sx={{ mt: 2 }} />
          <Box
            sx={{
              flexGeow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              alignItems: 'center',
              height: 100,
            }}
          >
            <Typography variant="subtitle2" color="whitesmoke">
              طراحی شده با <FavoriteRounded sx={{ verticalAlign: 'middle', color: 'tomato', height: 20 }} />
            </Typography>
            <Typography variant="caption" color="whitesmoke" sx={{ mt: 1 }}>
              کپی رایت 1401
              <CopyrightRounded sx={{ verticalAlign: 'middle', height: 16 }} />
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </Grid>
  )
}

export default Sidebar

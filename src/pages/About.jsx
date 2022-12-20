import { Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CodeRounded, SelfImprovementRounded } from '@mui/icons-material'

import { Helmet } from 'react-helmet-async'

import avatar from '../assets/avatar.jpg'
import { DevInfo, Skills } from '../components/pages'
import { MyAvatar, MyDivider } from '../components/common'

const About = ({ title }) => {
  return (
    <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll' }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} md={8}>
            <MyDivider dividerTitle={'توسعه دهنده فول استک'} icon={<CodeRounded />} align="left" delay={0} color="success" />
            <DevInfo />
          </Grid>
          <Grid xs={0} md={4}>
            <MyAvatar avatar={avatar} size={230} fallback={'MJ'} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1, mb: 1 }}>
            <MyDivider dividerTitle={'مهارت های من'} icon={<SelfImprovementRounded />} align="left" delay={0} color="success" />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default About

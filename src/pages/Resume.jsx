import { useState, useEffect } from 'react'

import { Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'
import { SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded } from '@mui/icons-material'

import { MyDivider } from '../components/common'
import { DevEduTimeline, DevExpTimeline } from '../components/pages'

const Resume = ({ title }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll' }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CardContent>
        <MyDivider dividerTitle={'رزومه من'} icon={<SettingsEthernetRounded />} align={'center'} delay={200} color="success" />
        <Grid container>
          <Grid xs={12} sm={6}>
            <MyDivider dividerTitle={'تجربیات'} icon={<HomeRepairServiceRounded />} align={'center'} delay={300} color="secondary" />
            <DevExpTimeline loading={loading} />
          </Grid>
          <Grid xs={12} sm={6}>
            <MyDivider dividerTitle={'تحصیلات'} icon={<SchoolRounded />} align={'center'} delay={300} color="secondary" />
            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Resume

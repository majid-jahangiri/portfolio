import { useState, useEffect } from 'react'

import { Card, CardContent } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { TerminalRounded } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'

import { MyDivider } from '../components/common'
import { ShowSamples } from '../components/pages'

const Sample = ({ title }) => {
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
        <MyDivider dividerTitle={'نمونه کارهای من'} icon={<TerminalRounded />} align={'center'} delay={200} color="success" />
        <Grid container sx={{ mx: 3 }}>
          <ShowSamples loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Sample

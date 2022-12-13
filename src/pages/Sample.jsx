import { useState, useEffect } from 'react'

import { Card, CardContent, Divider, Chip, Typography, Slide, CardActionArea, CardMedia, CardActions, Button } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { TerminalRounded } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'

import { samples } from '../constants/samples'
import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText'

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
        <Slide direction="down" in={loading} style={{ transitionDelay: loading ? '200ms' : '0ms' }}>
          <Divider
            textAlign="center"
            sx={{
              '&::before, &::after': {
                borderColor: 'success.main',
              },
              mb: 4,
            }}
          >
            <Chip
              color="success"
              icon={<TerminalRounded />}
              label={
                <Typography variant="body1" color="black" textAlign="center">
                  نمونه کارهای من
                </Typography>
              }
              sx={{ p: 2.5 }}
            />
          </Divider>
        </Slide>
        <Grid container sx={{ mx: 3 }}>
          {samples.map((sample, index) => (
            <Grid key={index} xs={12} sm={6} lg={4} sx={{ px: 2, mb: 2 }}>
              <Slide direction="up" in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
                <Card sx={{ maxWidth: 345, backgroundColor: 'secondary.main' }}>
                  <CardActionArea>
                    <CardMedia component="img" height="200" width="200" image={sample.image} alt={sample.title} />
                    <CardContent>
                      <Typography variant="body1" textAlign="left" color="black" gutterBottom>
                        {sample.title}
                      </Typography>
                      <Typography variant="body2" textAlign="left" color="gray" sx={{ direction: 'ltr' }} gutterBottom>
                        <EllipsisText text={sample.info} length={'100'} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button href={sample.link} size="small" color="primary" target="_blank">
                      نمایش وب سایت
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Sample

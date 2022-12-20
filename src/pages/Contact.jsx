import { useState, useEffect } from 'react'

import { Card, CardContent, Typography, Slide } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { ConnectWithoutContactRounded } from '@mui/icons-material'

import { Helmet } from 'react-helmet-async'

import { MyDivider } from '../components/common'
import worldMap from '../assets/map.svg'
import { ContactForm } from '../components/pages'

const Contact = ({ title }) => {
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
        <MyDivider dividerTitle={'ارتباط با من'} icon={<ConnectWithoutContactRounded />} align={'center'} delay={200} color="success" />
        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? '200ms' : '0ms',
            }}
          >
            <Grid xs={12} md={8}>
              <Card
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? '200ms' : '0ms',
            }}
          >
            <Grid
              xs={0}
              md={4}
              sx={{
                textAlign: 'center',
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  mt: 4,
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                }}
              >
                بیا صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 2,
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                }}
              >
                <a
                  href="mailto:majidjahangiri1997@gmail.com"
                  alt="email"
                  style={{
                    color: 'tomato',
                    textDecoration: 'none',
                  }}
                >
                  ایمیل
                </a>{' '}
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Contact

import { useState, useEffect } from 'react'

import { Card, CardContent, Divider, Chip, Typography, Slide } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'
import { SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded } from '@mui/icons-material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab'

import { devEdu, devExp } from '../constants/details'

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
              icon={<SettingsEthernetRounded />}
              label={
                <Typography variant="body1" color="black" textAlign="center">
                  رزومه من
                </Typography>
              }
              sx={{ p: 2.5 }}
            />
          </Divider>
        </Slide>
        <Grid container>
          <Grid xs={12} sm={6}>
            <Slide direction="down" in={loading} style={{ transitionDelay: loading ? '300ms' : '0ms' }}>
              <Divider
                textAlign="center"
                sx={{
                  // '&::before, &::after': {
                  //   borderColor: 'success.main',
                  // },
                  mb: 4,
                }}
              >
                <Chip
                  color="success"
                  icon={<HomeRepairServiceRounded />}
                  label={
                    <Typography variant="body1" color="black" textAlign="center">
                      تجربیات
                    </Typography>
                  }
                  sx={{ p: 2.5 }}
                />
              </Divider>
            </Slide>
            <Timeline position="alternate" sx={{ direction: 'ltr' }}>
              {devExp.map((item, index) => (
                <Slide direction="down" in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="info" variant="outlined">
                        <HomeRepairServiceRounded color="info" />
                      </TimelineDot>
                      {index != 3 ? <TimelineConnector /> : null}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="caption" color="gray">
                        {item.year}
                      </Typography>
                      <Typography variant="body1" color="black">
                        {item.course}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.teacher}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.from}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Slide>
              ))}
            </Timeline>
          </Grid>
          <Grid xs={12} sm={6}>
            <Slide direction="down" in={loading} style={{ transitionDelay: loading ? '300ms' : '0ms' }}>
              <Divider
                textAlign="center"
                sx={{
                  // '&::before, &::after': {
                  //   borderColor: 'success.main',
                  // },
                  mb: 4,
                }}
              >
                <Chip
                  color="success"
                  icon={<SchoolRounded />}
                  label={
                    <Typography variant="body1" color="black" textAlign="center">
                      تحصیلات
                    </Typography>
                  }
                  sx={{ p: 2.5 }}
                />
              </Divider>
            </Slide>
            <Timeline position="alternate" sx={{ direction: 'ltr' }}>
              {devEdu.map((item, index) => (
                <Slide direction="down" in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color="info" variant="outlined">
                        <SchoolRounded color="info" />
                      </TimelineDot>
                      {index != 2 ? <TimelineConnector /> : null}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="caption" color="gray">
                        {item.year}
                      </Typography>
                      <Typography variant="body1" color="black">
                        {item.cert}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.major}
                      </Typography>
                      <Typography variant="body2" color="black">
                        {item.place}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Slide>
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Resume

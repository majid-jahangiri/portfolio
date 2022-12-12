import { Card, CardContent, Divider, Chip, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'
import { SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded } from '@mui/icons-material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab'

import { devEdu } from '../constants/details'

const Resume = ({ title }) => {
  return (
    <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll' }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CardContent>
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
        <Grid container>
          <Grid xs={6}>
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
            <Timeline position="right" sx={{ direction: 'ltr' }}>
              {devEdu.map((item, index) => (
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
              ))}
            </Timeline>
          </Grid>
          <Grid xs={6}>
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
            <Timeline position="right" sx={{ direction: 'ltr' }}>
              {devEdu.map((item, index) => (
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
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Resume

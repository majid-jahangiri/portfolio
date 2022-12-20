import { Typography, Slide } from '@mui/material'

import { SchoolRounded } from '@mui/icons-material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab'

import { devEdu } from '../../constants/details'

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate" sx={{ direction: 'ltr' }}>
      {devEdu.map((item, index) => (
        <Slide key={index} direction="down" in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
          <TimelineItem>
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
  )
}

export default DevEduTimeline

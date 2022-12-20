import { Typography, Slide } from '@mui/material'

import { HomeRepairServiceRounded } from '@mui/icons-material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from '@mui/lab'

import { devExp } from '../../constants/details'

const DevExpTimeline = ({ loading }) => {
  return (
    <Timeline position="alternate" sx={{ direction: 'ltr' }}>
      {devExp.map((item, index) => (
        <Slide key={index} direction="down" in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
          <TimelineItem>
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
  )
}

export default DevExpTimeline

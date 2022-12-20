import { Card, CardContent, Typography, Avatar, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Slider from 'react-slick'

import { comments } from '../../constants/details'

const ShowComments = () => {
  const theme = useTheme()

  const options = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
  }

  return (
    <Box component="div" sx={{ mt: 10, justifyContent: 'center', alignItems: 'center' }}>
      <Slider {...options}>
        {comments.map((comment, index) => (
          <Box key={index} component="div" sx={{ justifyContent: 'center' }}>
            <Avatar src={comment.avatar} variant="circular" sx={{ height: 100, width: 100, margin: '0 auto' }} />
            <Typography variant="body1" textAlign="center" color="black">
              {comment.fullname}
            </Typography>
            <Typography variant="body2" textAlign="center" color="black" sx={{ mb: 2 }}>
              {comment.job}
            </Typography>
            <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'primary.main' : 'secondary.main', width: 1 / 2, m: '0 auto', borderRadius: 5 }}>
              <CardContent>
                <Typography variant="body2" textAlign="center" color="text.primary">
                  {comment.comment}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default ShowComments

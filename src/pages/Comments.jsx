import { useState, useEffect } from 'react'

import { Card, CardContent, Divider, Chip, Typography, Slide, Avatar, Box } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { ForumRounded } from '@mui/icons-material'

import { comments } from '../constants/details'

import Slider from 'react-slick'

const Comments = ({ title }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

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
    <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll', display: 'flex', flexDirection: 'column' }}>
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
              icon={<ForumRounded />}
              label={
                <Typography variant="body1" color="black" textAlign="center">
                  نظرات مشتریان
                </Typography>
              }
              sx={{ p: 2.5 }}
            />
          </Divider>
        </Slide>
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
                <Card sx={{ backgroundColor: 'secondary.main', width: 1 / 2, m: '0 auto', borderRadius: 5 }}>
                  <CardContent>
                    <Typography variant="body2" textAlign="center" color="primary">
                      {comment.comment}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </CardContent>
    </Card>
  )
}
export default Comments

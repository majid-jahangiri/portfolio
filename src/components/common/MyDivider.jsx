import { useState, useEffect } from 'react'

import { Divider, Chip, Typography, Slide } from '@mui/material'

const MyDivider = ({ dividerTitle, icon, align, delay, color }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <Slide direction="down" in={loading} style={{ transitionDelay: loading ? `${delay}ms` : '0ms' }}>
      <Divider
        textAlign={align}
        sx={{
          '&::before, &::after': {
            borderColor: `${color}.main`,
          },
          mb: 4,
        }}
      >
        <Chip
          color={color}
          icon={icon}
          label={
            <Typography variant="body1" color="black" textAlign="center">
              {dividerTitle}
            </Typography>
          }
          sx={{ p: 2.5 }}
        />
      </Divider>
    </Slide>
  )
}

export default MyDivider

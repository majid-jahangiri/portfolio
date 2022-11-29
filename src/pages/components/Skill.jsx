import { Divider, Chip, Box, Typography, LinearProgress, CircularProgress } from '@mui/material'

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          '&::before, &::after': {
            borderColor: 'whitesmoke',
          },
          mt: 0.7,
        }}
      >
        <Chip icon={<Box component="img" src={icon} sx={{ height: 30 }}></Box>} color={color} label={name} sx={{ color: '#000', p: '20px', alignSelf: 'end' }} />
      </Divider>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body1" color="primary">
            {Math.round(value)}%
          </Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={value} color={color} sx={{ height: 10, borderRadius: 5 }} />
        </Box>
      </Box>

      {/* <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" size={200} {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="black">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box> */}
    </>
  )
}

export default Skill

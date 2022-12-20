import { Divider, Chip, Box, Typography, LinearProgress, Badge } from '@mui/material'

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
      <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body1" color="black">
            <Badge variant="standard" badgeContent={`${Math.round(value)}%`} color="secondary" />
          </Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={value} color={color} sx={{ height: 10, borderRadius: 5 }} />
        </Box>
      </Box>
    </>
  )
}

export default Skill

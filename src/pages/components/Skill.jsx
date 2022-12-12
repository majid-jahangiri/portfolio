import { Divider, Chip, Box, Typography, LinearProgress, CircularProgress, Badge } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      {/* <Divider
        textAlign="right"
        sx={{
          '&::before, &::after': {
            borderColor: 'whitesmoke',
          },
          mt: 0.7,
        }}
      >
        <Chip icon={<Box component="img" src={icon} sx={{ height: 30 }}></Box>} color={color} label={name} sx={{ color: '#000', p: '20px', alignSelf: 'end' }} />
      </Divider> */}
      {/* <Box sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body1" color="black">
            <Badge variant="standard" badgeContent={`${Math.round(value)}%`} color="secondary" />
          </Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={value} color={color} sx={{ height: 10, borderRadius: 5 }} />
        </Box>
      </Box> */}

      <Grid
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" size={200} value={100} sx={{ color: '#bdbdbd' }} />
          <CircularProgress
            variant="determinate"
            size={200}
            value={value}
            color={color}
            sx={{
              position: 'absolute',
            }}
          />
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
            <Typography
              variant="caption"
              component="div"
              color="black"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* {`${Math.round(value)}%`} */}
              <Badge
                variant="standard"
                badgeContent={`${Math.round(value)}%`}
                color="secondary"
                sx={{
                  '& .MuiBadge-badge': {
                    top: -5,
                    fontSize: 12,
                    color: 'black',
                    border: `1px solid black`,
                    padding: '6px',
                  },
                }}
              />
              <Chip icon={<Box component="img" src={icon} sx={{ height: 25 }}></Box>} color={color} label={name} sx={{ color: '#000', py: '20px', px: '15px', alignSelf: 'end' }} />
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default Skill

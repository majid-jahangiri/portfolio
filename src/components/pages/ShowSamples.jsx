import { Card, CardContent, Typography, Slide, CardActionArea, CardMedia, CardActions, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'

import EllipsisText from 'react-ellipsis-text/lib/components/EllipsisText'

import { samples } from '../../constants/samples'

const ShowSamples = ({ loading }) => {
  const theme = useTheme()

  return (
    <>
      {samples.map((sample, index) => (
        <Grid key={index} xs={12} sm={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide direction="up" in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
            <Card sx={{ maxWidth: 345, backgroundColor: theme.palette.mode === 'dark' ? 'primary.main' : 'secondary.main' }}>
              <CardActionArea>
                <CardMedia component="img" height="200" width="200" image={sample.image} alt={sample.title} />
                <CardContent>
                  <Typography variant="body1" textAlign="left" color="text.primary" gutterBottom>
                    {sample.title}
                  </Typography>
                  <Typography variant="body2" textAlign="left" color="text.secondary" sx={{ direction: 'ltr' }} gutterBottom>
                    <EllipsisText text={sample.info} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={sample.link} size="small" color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'} target="_blank">
                  نمایش وب سایت
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  )
}

export default ShowSamples

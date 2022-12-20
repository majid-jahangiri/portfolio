import { Card, CardContent} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { ForumRounded } from '@mui/icons-material'

import { MyDivider } from '../components/common'
import { ShowComments } from '../components/pages'

const Comments = ({ title }) => {
  return (
    <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflowY: 'scroll', display: 'flex', flexDirection: 'column' }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <CardContent>
        <MyDivider dividerTitle={'نظرات مشتریان'} icon={<ForumRounded />} align={'center'} delay={200} color="success" />
        <ShowComments />
      </CardContent>
    </Card>
  )
}
export default Comments

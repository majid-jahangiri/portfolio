import { Typography } from '@mui/material'
import { KeyboardArrowLeftRounded } from '@mui/icons-material'

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 1 }}>
      {children}
      <KeyboardArrowLeftRounded sx={{ verticalAlign: 'bottom', color: 'primary.main' }} />
    </Typography>
  )
}

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : مجید جهانگیری</Info>
      <Info>سن : 25</Info>
      <Info>شهر : اصفهان</Info>
    </>
  )
}

export default DevInfo

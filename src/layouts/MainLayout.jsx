import { ThemeProvider } from '@mui/material/styles'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import Grid from '@mui/material/Unstable_Grid2'

import { theme } from './theme'

const MainLayout = ({ children }) => {
  const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  })

  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی مجید جهانگیری</title>
          </Helmet>
          {/* Grid system */}
          <Grid container sx={{ height: '100vh' }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout

import { Box, Typography } from '@mui/material'
import Typed from 'typed.js'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

import { hexagon, links } from '../constants/particles'

import { useCallback, useEffect, useRef } from 'react'

import bg3 from '../assets/bg3.jpg'

const Home = () => {
  const nameEl = useRef(null)
  const infoEl = useRef(null)

  const strings = ['من توسعه دهنده فول استک هستم', 'من یک فریلنسر هستم', 'من عاشق برنامه نویسی ام ']

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: [' سلام، مجید جهانگیری هستم'],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    })

    const typedInfo = new Typed(infoEl.current, {
      strings: strings,
      startDelay: 2000,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 50,
      loop: true,
      showCursor: false,
    })

    return () => {
      typedName.destroy()
      typedInfo.destroy()
    }
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg3})`,
        backgroundPosition: 'center',
        backgroundReapet: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0,.3)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links} />
        <Typography variant="h4" ref={nameEl} color="#6D9886"></Typography>
        <Typography variant="h5" ref={infoEl} color="white" sx={{ textDecoration: 'underline', textDecorationColor: '#F2E7D5' }}></Typography>
      </Box>
    </Box>
  )
}

export default Home

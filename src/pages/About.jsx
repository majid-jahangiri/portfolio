import { useState, useEffect } from 'react'

import { Box, Typography, Card, CardContent, Divider, Chip, Avatar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { CodeRounded, SelfImprovementRounded } from '@mui/icons-material'

import DevInfo from './components/DevInfo'
import avatar from '../assets/avatar.jpg'
import Skill from './components/Skill'
import { devSkills } from '../constants/skills'

const About = () => {
  const { htmlSkill, cssSkill, reactSkill, nodeSkill, gitSkill, jsSkill } = devSkills

  const [javascript, setJavascript] = useState(0)
  const [html, setHtml] = useState(0)
  const [css, setCss] = useState(0)
  const [nodeJs, setNodeJs] = useState(0)
  const [reactJs, setReactJs] = useState(0)
  const [git, setGit] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((prev) => {
        const diff = Math.random() * 10
        return Math.min(prev + diff, 57)
      })
      setHtml((prev) => {
        const diff = Math.random() * 10
        return Math.min(prev + diff, 66)
      })
      setCss((prev) => {
        const diff = Math.random() * 10
        return Math.min(prev + diff, 65)
      })
      setNodeJs((prev) => {
        const diff = Math.random() * 10
        return Math.min(prev + diff, 14)
      })
      setReactJs((prev) => {
        const diff = Math.random() * 10
        return Math.min(prev + diff, 55)
      })
      setGit((prev) => {
        const diff = Math.random() * 10
        return Math.min(prev + diff, 16)
      })
    }, 150)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Card sx={{ height: '100vh', backgroundColor: 'whitesmoke', overflow: 'auto' }}>
      <CardContent>
        <Grid container sx={{ mx: 3 }}>
          <Grid xs={12} md={8}>
            <Divider
              textAlign="left"
              sx={{
                '&::before, &::after': {
                  borderColor: 'success.main',
                },
              }}
            >
              <Chip
                color="success"
                icon={<CodeRounded />}
                label={
                  <Typography variant="body1" color="black" textAlign="center">
                    توسعه دهنده فول استک
                  </Typography>
                }
                sx={{ p: 2.5 }}
              />
            </Divider>
            <DevInfo>نام و نام خانوادگی : مجید جهانگیری</DevInfo>
            <DevInfo>سن : 25</DevInfo>
            <DevInfo>شهر : اصفهان</DevInfo>
          </Grid>
          <Grid xs={0} md={4}>
            <Avatar
              src={avatar}
              variant="rounded"
              sx={{
                height: 230,
                width: 230,
                margin: '0 auto',
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            ></Avatar>
          </Grid>
        </Grid>
        <Grid container>
          <Grid sx={{ width: 1, mt: 1, mb: 1 }}>
            <Divider
              textAlign="left"
              sx={{
                '&::before, &::after': {
                  borderColor: 'success.main',
                },
              }}
            >
              <Chip
                color="success"
                icon={<SelfImprovementRounded />}
                label={
                  <Typography variant="body1" color="black" textAlign="center">
                    مهارت های من
                  </Typography>
                }
                sx={{ p: 2.5 }}
              />
            </Divider>
            <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
            <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
            <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} />
            <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} />
            <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} />
            <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default About

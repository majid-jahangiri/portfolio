import { useState, useEffect } from 'react'

import { Skill } from './'
import { devSkills } from '../../constants/skills'

const Skills = () => {
  const { htmlSkill, cssSkill, reactSkill, nodeSkill, gitSkill, jsSkill, materialUiSkill } = devSkills

  const [javascript, setJavascript] = useState(0)
  const [html, setHtml] = useState(0)
  const [css, setCss] = useState(0)
  const [nodeJs, setNodeJs] = useState(0)
  const [reactJs, setReactJs] = useState(0)
  const [git, setGit] = useState(0)
  const [material, setMaterial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((prev) => {
        const diff = 5
        return Math.min(prev + diff, 57)
      })
      setHtml((prev) => {
        const diff = 5
        return Math.min(prev + diff, 66)
      })
      setCss((prev) => {
        const diff = 5
        return Math.min(prev + diff, 65)
      })
      setNodeJs((prev) => {
        const diff = 5
        return Math.min(prev + diff, 1)
      })
      setReactJs((prev) => {
        const diff = 5
        return Math.min(prev + diff, 55)
      })
      setGit((prev) => {
        const diff = 5
        return Math.min(prev + diff, 16)
      })
      setMaterial((prev) => {
        const diff = 5
        return Math.min(prev + diff, 24)
      })
    }, 150)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html} />
      <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css} />
      <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color} value={javascript} />
      <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={reactJs} />
      <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={nodeJs} />
      <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git} />
      <Skill name={materialUiSkill.name} icon={materialUiSkill.icon} color={materialUiSkill.color} value={material} />
    </>
  )
}

export default Skills

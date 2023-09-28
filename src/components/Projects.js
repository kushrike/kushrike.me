import React from "react"
import Title from "./Title"
import Project from "./Project"
import projects from '../constants/projects'

const Projects = () => {
  return (
    <section className="section projects">
      <Title title='All Projects' />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id}{...project} />
        })}
      </div>
    </section>
  )
}

export default Projects

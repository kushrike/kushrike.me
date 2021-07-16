import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaGithubSquare } from "react-icons/fa"
import { Link } from "gatsby"
import projects from '../constants/projects'

const Projects = () => {
    const [value, setValue] = React.useState(0)
    const {title, description,techstack, date, github } = projects[value]
  return (
    <section className="section projects">
      <Title title="Projects" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {projects.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.name}
              </button>
            )
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <div className="project-stack">
            {techstack.map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </div>
          <p className="job-date">{date}</p>
          {description.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
          <div className="project-links">
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
            {/* <a href={url}>
              <FaShareSquare className="project-icon" />
            </a> */}
          </div>
        </article>
      </div>

      <Link to="/projects" className="btn center-btn">
        more info
      </Link>
    </section>
  )}

export default Projects

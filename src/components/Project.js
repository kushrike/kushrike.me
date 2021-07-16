import React from "react"
import { FaGithubSquare, FaAngleDoubleRight } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({name, title, description, meta, techstack, date, github}) => {
  return (
    <article className="project">
      {/* <GatsbyImage
        image={getImage(image)}
        className="project-img"
        alt={title}
      /> */}
      <div className="project-info">
        <Link to={`/projects/${name}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        {description.map(item => {
          return (
            <p className="project-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item}</p>
            </p>
          )
        })}
        
        <div className="project-stack">
          {techstack.map(item => {
            return <span>{item}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          {/* <a href={url}>
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a> */}
        </div>
      </div>
    </article>
  )
}

export default Project

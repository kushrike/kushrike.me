import React from "react"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Layout from '../components/Layout'

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects />
        </section>
      </main>
    </Layout>
  )
}

export default ProjectsPage

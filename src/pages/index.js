import React from "react"
import Layout from "../components/Layout"

import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import HomeProjects from "../components/HomeProjects"
import Seo from "../components/Seo"
const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="this is our home page" />
      <Hero />
      <Jobs />
      <HomeProjects />
    </Layout>
  )
}

export default IndexPage

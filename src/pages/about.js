import React from "react"
import Title from "../components/Title"
import Seo from "../components/Seo"
import dp from "../assets/images/hero.svg"
import info from "../constants/about"
import skills from "../constants/skills"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <section className="about-page about">
        <div className="section-center about-center">
          <img src={dp} alt={"display pic"} className="about-img-svg" />
          <article className="about-text">
            <Title title="About Me" />
            <p>{info}</p>
            <div className="about-stack">
              {skills.map(domain => {
                return (<p> {domain.map(item => {
                  return <span>{item}</span>
                })}
                </p>)
              })
              }
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About

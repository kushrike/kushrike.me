import React from "react"
import SocialLinks from "../constants/socialLinks"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Hi, i'm Kushal</h1>
            <h4>Software geek and a nerd programmer</h4>
            <h4>welcome to my badly designed playground!</h4>
            <button className="btn">contact me</button>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero

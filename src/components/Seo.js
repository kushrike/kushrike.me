import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        pageDesc: description
        pageTitle: title
        image
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {site} = useStaticQuery(query);
  const { author, pageDesc, pageTitle, image, siteUrl } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${pageTitle}`}>
      <meta name="description" content={description || pageDesc} />
    </Helmet>
  )
}

export default SEO

import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Title from "../components/Title"

const Resume = () => {
  return (
    <Layout>
      <Seo title="Resume" />
      <Title title="Résumé - Kushal Srivastava" />
      <div className="section-center">
        <iframe
          src="https://drive.google.com/file/d/1S_mMYX-_DWjDzpeMTxMXYJQ-aYQ98L-B/preview"
          onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'
          style={{
            height: "1200px",
            width: "100%",
            border: "none",
            overflow: "hidden",
          }}
          title="RESUME_KUSHRIKE"
          allow="autoplay"
        />
      </div>
    </Layout>
  )
}

export default Resume
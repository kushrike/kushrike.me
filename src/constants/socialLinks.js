import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaRedditAlien,
  FaInstagram,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/kushal.srivastava.916/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/kushrike/",
  },
  {
    id: 3,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/kisshhue/",
  },
  {
    id: 4,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/kushrike/",
  },
  {
    id: 5,
    icon: <FaRedditAlien className="social-icon"></FaRedditAlien>,
    url: "https://youtu.be/dQw4w9WgXcQ",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

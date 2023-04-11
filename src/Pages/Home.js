import React from 'react'
import "../Styles/Home.css"

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="welcome">Welcome</h1>
      <p className="about-me">
        As a <h4 id="career-title">full-stack developer</h4>, I have a strong background in deploying web applications using <h5>Ruby on Rails</h5>, <h5>Node</h5>, and Java <h5>JavaScript</h5>.
        Through my experience in healthcare, I have honed my collaborative teamwork skills and developed the ability to work efficiently
        under pressure to provide exceptional client service. My goal is to continually develop my skills and
        expertise as a developer to help companies achieve
        their business objectives.
      </p>
      <div classname="social-logos">
        social media links and logos
      </div>
    </div>
  )
}

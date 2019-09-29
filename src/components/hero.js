import React from "react"

const Hero = ({ heroTitle }) => (
  <section className="hero is-medium is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">{heroTitle}</h1>
      </div>
    </div>
  </section>
)

export default Hero
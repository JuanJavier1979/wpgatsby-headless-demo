import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/global.scss"

const IndexPage = ({ data }) => (
  <Layout herotitle="Home">
    <SEO title="Home" />
    {data.allWordpressPost.edges.map(({ node }) => (
      <section key={node.id} className="section">
        <div className="container content">
          <h3 className='title is-3'>{node.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <Link to={`/${node.slug}`} className="button is-primary">Read more</Link>
        </div>
      </section>
    ))}
  </Layout>
)
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          wordpress_id
          title
          excerpt
          slug
        }
      }
    }
  }
`

export default IndexPage

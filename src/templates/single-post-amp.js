import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Related from "../components/related"

import "../styles/global.scss"

const IndexPage = ({ data }) => {
  const post = data.currentpost.edges[0].node
  const categories = post.categories
  return (
    <Layout herotitle={post.title}>
      <SEO title={post.title} />
      {data.currentpost.edges.map(() => (
        <section key={post.wordpress_id} className="section" data-postid={post.wordpress_id}>
          <div className="container content">
            <h2 className='title is-1'>{post.title}</h2>
            <div className='tags'>
                {categories.map((category) => (
                  <span key={category.id} className="tag" data-categoryid={category.wordpress_id}>{category.name}</span>
                ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <hr />
            <Related relatedposts={data.relatedposts} />
          </div>
        </section>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!, $postid: Int!, $postcats: [Int]!) {
    currentpost: allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          wordpress_id
          date
          categories {
            id
            slug
            name
            wordpress_id
          }
        }
      }
    }
    relatedposts: allWordpressPost(filter: {wordpress_id: {ne: $postid}, categories: {elemMatch: {wordpress_id: {in: $postcats}}}}) {
      edges {
        node {
          id
          slug
          title
          wordpress_id
          excerpt
          categories {
            id
            slug
            taxonomy
            wordpress_id
            name
          }
        }
      }
    }
  }
`

export default IndexPage

import React from "react"
import { Link } from "gatsby"

const Related = ({ relatedposts }) => {

  return (
    <div className='related-content'>
      <h3 className='title is-3'>Related Content</h3>
      <div className="columns is-multiline">
        {relatedposts.edges.map(({ node }) => (
          <div key={node.id} className="column is-6" data-cat-id={node.wordpress_id}>
            <h4 className='title is-4'>{node.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            <Link to={`/${node.slug}`} className="button is-primary">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Related

const path = require(`path`)

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
            wordpress_id
            categories {
              wordpress_id
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allWordpressPost.edges.forEach(({ node }) => {
      let categoriesIds = node.categories.map(({ wordpress_id }) => wordpress_id)
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/single-post.js`),
        context: {
          // This is the $slug variable
          // passed to single-post.js
          slug: node.slug,
          postid: node.wordpress_id,
          postcats: categoriesIds,
        },
	  }),
	  createPage({
        path: `${node.slug}/amp`,
        component: path.resolve(`./src/templates/single-post-amp.js`),
        context: {
          slug: node.slug,
          postid: node.wordpress_id,
          postcats: categoriesIds,
        },
      })
    })
  })
}

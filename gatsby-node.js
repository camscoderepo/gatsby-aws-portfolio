const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// gatsby-node.js source: https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
      query loadPagesQuery ($limit: Int!) {
        allMarkdownRemark(limit: $limit) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }`)
  }
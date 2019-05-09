const path = require('path')

module.exports = {
  __experimentalThemes: ['gatsby-theme-blocks'],
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['@blocks/editor', 'theme-ui']
      }
    },
    {
      resolve: 'gatsby-mdx',
      options: {}
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'blog'
      }
    }
  ]
}

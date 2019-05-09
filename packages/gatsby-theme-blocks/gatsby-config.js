module.exports = {
  plugins: [
    'gatsby-plugin-blocks',
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-plugin-blocks',
          'gatsby-theme-blocks',
          '@blocks/editor',
          '@blocks/serializer'
        ]
      }
    }
  ]
}

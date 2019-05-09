exports.createPages = async ({ graphql, actions }) => {
  const {
    data: { files }
  } = await graphql(`
    {
      files: allMdx {
        nodes {
          id
        }
      }
    }
  `)

  files.nodes.forEach(file => {
    actions.createPage({
      path: `/___blocks/${file.id}`,
      component: require.resolve('./src/templates/block.js'),
      context: {
        id: file.id
      }
    })
  })

  actions.createPage({
    path: '/___blocks',
    component: require.resolve('./src/templates/blocks.js'),
    context: {}
  })
}

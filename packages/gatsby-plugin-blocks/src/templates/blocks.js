import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

export default () => {
  const {
    files: { nodes }
  } = useStaticQuery(graphql`
    {
      files: allMdx {
        nodes {
          id
          fileAbsolutePath
        }
      }
    }
  `)

  return (
    <>
      <h1>Blocks</h1>
      {nodes.map(node => (
        <Link to={`/___blocks/${node.id}`}>{node.fileAbsolutePath}</Link>
      ))}
    </>
  )
}

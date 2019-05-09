import React from 'react'
import { graphql, Link } from 'gatsby'
import { Editor, serializer, stringifyMDX } from '@blocks/editor/src'

export const pageQuery = graphql`
  query($id: String!) {
    file: mdx(id: { eq: $id }) {
      rawBody
      fileAbsolutePath
    }
  }
`

export default ({ data: { file } }) => {
  return (
    <>
      <h1>
        <Link to="/___blocks">Blocks</Link> - {file.fileAbsolutePath}
      </h1>
      <Editor
        initialValue={file.rawBody}
        onChange={({ value }) => {
          const mdx = stringifyMDX(serializer.serialize(value))
          window.___socket.emit('writeFile', file.fileAbsolutePath, mdx)
        }}
        components={{}}
      />
    </>
  )
}

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          author
          data {
            name
            age
          }
        }
      }
    }
  `)

  return (
    <div>
      <h1>author: {siteMetadata.author}</h1>
      <h1>Title:{siteMetadata.title}</h1>
    </div>
  )
}

export default Header

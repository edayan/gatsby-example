import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
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

  console.log(data)
  return (
    <div>
      <h1>author: {data.site.siteMetadata.author}</h1>
      <h1>Title:{data.site.siteMetadata.title}</h1>

    </div>
  )
}

export default Header

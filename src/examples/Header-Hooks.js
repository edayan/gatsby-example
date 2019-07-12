import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const getData = graphql`
  query SecondQuery {
    site {
      siteMetadata {
        description
        siteTitle: title
        author
        data {
          name
          age
        }
      }
    }
  }
`
const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData)

  const title = info.siteTitle
  return (
    <div>
      <h1>author: {info.author}</h1>
      <h1>Title:{title}</h1>
    </div>
  )
}

export default Header

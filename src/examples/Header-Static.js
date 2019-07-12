import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const getData = graphql`
  query FirstQuery {
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

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => {
        return (
          <div>
            I am using static query
            <p>{data.site.siteMetadata.description}</p>
          </div>
        )
      }}
    ></StaticQuery>
  )
}

export default HeaderStatic

import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'

const Examples = props => {
  const { name, age } = props.data.site.siteMetadata.person

  return (
    <div>
      examples page
      <HeaderHook />
      <HeaderStatic />
      <div>
        This is our person
        <h4>name:{name}</h4>
        <h4>age:{age}</h4>
      </div>
    </div>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        description
        siteTitle: title
        author
        person: data {
          name
          age
        }
      }
    }
  }
`
export default Examples

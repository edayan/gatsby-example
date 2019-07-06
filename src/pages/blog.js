import React from 'react'
import {Link} from 'gatsby'

export default () => {
  return (
    <div>
      This is our blog page
      {/* <div> <a href="/">Home page</a></div> */}
      <Link to="/">Home page</Link>
    </div>
  )
}

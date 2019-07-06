import React from "react"
import { Link } from "gatsby"


export default () => (
  <div>
    <h1>This is our home page</h1>
    Hello world!
    <div>
      {/* {<a href="/blog">blog page</a>} */}
      <Link to="/blog">blogs</Link>
    </div>
    <div>
      {/* {<a href="https://www.gatsbyjs.org">Gatsby js</a>} */}
      
    </div>
  </div>
)

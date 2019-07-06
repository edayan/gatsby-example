import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog/">Blog</Link></li>
        <li><Link to="/products/">Products</Link></li>
      </ul>
    </div>
  )
}

export default Navbar

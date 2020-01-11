import React from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'
export default () => {
  return (
    <Layout>
      <div className={styles.blog}>
        <h1 className={styles.title}>This is our blog page</h1>
        <h2>This is second heading</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">hello</div>
          <div className="col-4">hello</div>
          <div className="col-4">hello</div>
        </div>
      </div>
    </Layout>
  )
}

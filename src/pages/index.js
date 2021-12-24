import * as React from 'react'
import Layout from './layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this following the Gatsby tutorial</p>
      <StaticImage
        alt="VERY CUTE CAT"
        src="../images/a0fc73919d_50166390_chaton.webp"
      />
    </Layout>
  )
}

export default IndexPage
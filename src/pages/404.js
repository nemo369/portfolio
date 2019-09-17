import React from "react"
import { graphql, Link } from "gatsby"
import sabaka from "../assets/sabaka.png"
import mao from "../assets/mao.png"

import Layout from "../components/layout"
import Seo from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="404: Not Found" />
        <article className="page-404">
          <h1>404 - Not Found</h1>
          <div className="content">
            You just hit a route that doesn&#39;t exist... the sadness.{" "}
            <Link to="/">Take Me back home</Link>
            <br />
            <br />
            <em>
            In the meantime here are my pets:
            </em>
            <div className="flex">
              <img src={sabaka} alt="sabaka frenkel" />
              <img src={mao} alt="mao frenkel" />
            </div>
          </div>
        </article>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

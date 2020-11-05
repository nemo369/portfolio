import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import ProjectBox from "../components/projectBox"
import Seo from "../components/seo"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              subtitle
              project
              client
              tags
              code_url
              url
              image {
                id
                childImageSharp {
                  fixed(width: 480) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              image_phone {
                id
                childImageSharp {
                  fixed(width: 120, height:240) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Seo title="My projects" />
      <article className="projects">
        <h1>Things That I Built</h1>
        <ol className="projects__list">
          {projects && projects.map((edge, key) => {
            return <ProjectBox props={edge} key={key} />
          })}
        </ol>
      </article>
    </Layout>
  )
}
export default BlogPage

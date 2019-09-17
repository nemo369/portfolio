import React from "react"
import Layout from "../components/layout"
import { graphql ,Link} from "gatsby"
import Seo from "../components/seo"
import Github from "../assets/Github"
import Img from "gatsby-image"

const Project = ({ data,context }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <article className="project">
        <h1 className="project__title">{post.frontmatter.title}</h1>
        <h2 className="project__subtitle">{post.frontmatter.subtitle}</h2>
        <h3 className="project__client">
          <span>Client:</span> {post.frontmatter.client}
        </h3>
        <Img
          className="project__image "
          style={{ display: "block" }}
          fixed={post.frontmatter.image.childImageSharp.fixed}
          alt={post.frontmatter.title}
          key={post.frontmatter.image.id}
        />
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="project__content content"
        />
        <div className="projects__links flex">
          <a
            className="projects__link"
            href={post.frontmatter.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
          {post.frontmatter.code_url !== "private" && (
            <a
              className="projects__link projects__link--code"
              href={post.frontmatter.code_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Code</span> <Github />
            </a>
          )}
        </div>
        <ul className="project__tags flex">
          {post.frontmatter.tags.map((tag, key) => {
            return (
              <li className="project__tag tag" key={key}>
                {tag}
              </li>
            )
          })}
          <li className="tag"style={{marginLeft:'auto'}}><Link to='/projects'>Back</Link></li>
        </ul>
      </article>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
      }
    }
  }
`

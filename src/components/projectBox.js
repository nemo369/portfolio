import Img from "gatsby-image"
import React from "react"
import computer from "../../static/computer.png"
import phone from "../../static/phone.png"
import Github from "../assets/Github"

const ProjectBox = ({ props }) => {
  const { node } = props
  const { frontmatter } = node
 
  return (
    <li className="projects__li">
      {/* <Link to={`/projects/${node.fields.slug}`}> */}
        <div className="devices">
          <div className="computer">
            <img src={computer} alt="computer" className="computer__asset" />
            {frontmatter.image &&
            <Img
              className="computer__image absolute"
              style={{position:'absolute'}}
              fixed={frontmatter.image.childImageSharp.fixed}
              alt={frontmatter.title}
              key={frontmatter.image.id}
            />}
          </div>
          <div className="phone">
            <img src={phone} alt="phone" className="phone__asset" />
            {frontmatter.image_phone &&
            <Img
              className="phone__image absolute"
              style={{position:'absolute'}}
              fixed={frontmatter.image_phone.childImageSharp.fixed}
              alt={frontmatter.title}
              key={frontmatter.image_phone.id}
            />}
          </div>
        </div>
      {/* </Link> */}
      <h2>{frontmatter.title}</h2>
      <p>{frontmatter.subtitle}</p>
      <ul className="project__tags flex">
        {frontmatter.tags && frontmatter.tags.map((tag, key) => {
          return (
            <li className="project__tag tag" key={key}>
              {tag}
            </li>
          )
        })}
      </ul>
      <div className="projects__links flex">
        <a
          className="projects__link"
          href={frontmatter.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Website
        </a>
        {frontmatter.code_url !== "private" && (
          <a
            className="projects__link projects__link--code"
            href={frontmatter.code_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Code</span> <Github />
          </a>
        )}
      </div>
    </li>
  )
}

export default ProjectBox

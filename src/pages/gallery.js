import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Seo from "../components/seo"

const GalleryPage = () => {
  const data = useStaticQuery(graphql`
    query AssetsPhotos {
      images: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 720,quality:100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.images.edges
  return (
    <Layout>
      <Seo title="Photography" />
      <article className="gallery">
        <div className="gallery__title">
          <h1>
            I love{" "}
            <span role="img" aria-label="heart">
              ❤
            </span>
            to take photos in my spare time
          </h1>
          <p className="content">
            You can find more of my photos
            <span role="img" aria-label="camera">
             📷 on{" "}
             </span>
            <a href="https://www.instagram.com/naaman_f/"  target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{" "}
            or{" "}
            <a href="https://unsplash.com/@nemo369" target="_blank" rel="noopener noreferrer">
              Unspalsh
            </a>{" "}
            . <br/>All photos published by me can be used for free 
            <span role="img" aria-label="heart">
            🌵
            </span>
            .<br/> You can use them
            for commercial and noncommercial purposes, although a credit to my
            website is appreciated when possible 
            <span role="img" aria-label="heart">            
            🎁
            </span>
            .
          </p>
        </div>
        <section className="gallery__grid">
          {images &&
            images.map(image => {
              return (
                <Img
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.name}
                  key={image.node.id}
                />
              )
            })}
          <div className="flc"></div>
        </section>
      </article>
    </Layout>
  )
}
export default GalleryPage

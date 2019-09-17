import React from "react"
import Layout from "../components/layout"
import HomePageNav from "../components/HomePageNav"
import Seo from "../components/seo"
import Typer from '../components/Typer'
const dataText = [
  "Front-End Developer",
  "Full-Stack Developer",
  "WordPress expert",
  "React Professional",
  "CSS ninja",
]
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" />
        <article className="home">
          <h1 className="home__title">
            Shalom, <br />
            I'm Naaman
            <small className="home__title--small">
              {" "}
              (my friends call me nemo)
            </small>
            <br />
            <span className="home__title--bold home-title-aniamtion">
              <Typer dataText={dataText}/>
            </span>
          </h1>
          <HomePageNav />
        </article>
      </Layout>
    )
  }
}

export default IndexPage

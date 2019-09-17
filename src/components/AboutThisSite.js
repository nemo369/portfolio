import React from "react"
import Info from "../assets/Info"
class AboutThisSite extends React.Component {
  state = {
    isOpen: false,
  }

  toglleOpen() {
    console.log("x")

    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <div
        className={`about-this  ${this.state.isOpen ? "open" : "close"}`}
        onClick={() => this.toglleOpen()}
      >
        <div className="content about-this__p">
          <h3>About this website</h3>
          This website Develop & Design By me. You can find the source code in{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          . All the code, photos and design are open source so you are more
          then wellcome to use. I used React on top of{" "}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Gatsby JS
          </a>{" "}
          for the development and Figma for the desigen.
        </div>
        <Info />
      </div>
    )
  }
}

export default AboutThisSite

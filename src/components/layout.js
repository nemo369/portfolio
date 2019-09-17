import React from "react"
import { Helmet } from "react-helmet"
import Sidebar from "./Sidebar"
import AboutThisSite from "./AboutThisSite"

import Nav from "./openNav"
import "../css/index.scss"
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "close",
    }
  }
  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "close",
            })
      }
    )
  }

  render() {
    const { children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div className="sticky-footer">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,700,900|Raleway:400,400i,900i,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <aside>
          <Sidebar
            toggleHamburger={this.toggleHamburger}
            navBarActiveClass={this.state.navBarActiveClass}
          />
        </aside>
        <main className="main">{children}</main>
        <AboutThisSite />
        {this.state.active ? <Nav /> : ""}
      </div>
    )
  }
}

export default Layout

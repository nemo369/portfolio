import React from "react"
import Logo from "./logo"
import Hamburger from "./hamburger"
import useSiteMetadata from './SiteMetadata'
import { Link } from "gatsby"

const SideBar = (props) => {
  const { author } = useSiteMetadata()
    return (
      <section  className={`sidebar ${props.navBarActiveClass}`}>
        <Link to="/" className="logo nemo-logo">
          <Logo />
        </Link>
        <Hamburger toggleHamburger={props.toggleHamburger} />
        <h4 className="sidebar__name tac">
          {author}
        </h4>
      </section>
    )
}

export default SideBar


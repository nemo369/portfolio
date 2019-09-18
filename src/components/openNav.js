import React from "react"
import { Link } from "gatsby"
import Seo from "./seo"
import Socials from './socials'
const navs = [
  { to: "/projects/", name: "Projects" },
  { to: "/about/", name: "About" },
  { to: "/contact/", name: "Contact" },
  { to: "/gallery/", name: "Gallery" },
]
const ListLink = props => (
  <li className="flex main-nav__li">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const MainNav = () => {
  return (
    <nav className="main-nav">
    <Seo title="navigation is open" />
        <ol className="flex main-nav__ol">
          {navs.map((nav) => {
            return (
              <ListLink to={nav.to} key={nav.name}>
                {nav.name}
              </ListLink>
            )
          })}
        </ol>
      <Socials class="nav-scoials"/>
      </nav>
  )
}

export default MainNav

import React from "react"
import { Link } from "gatsby"
import resume from "../assets/NaamanFrenkelCV.pdf"

const navs = [
  { to: "/projects/", name: "Work" },
  { to: "/about/", name: "About" },
  { to: "/contact/", name: "Contact" },
  { to: "/gallery/", name: "Gallery" },
]

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const HomePageNav = () => {
  return (
    <nav className="home__nav">
      <ol className="flex home__nav--ol">
        {navs.map((nav, key) => {
          return (
            <ListLink to={nav.to} key={key}>
              {nav.name}
            </ListLink>
          )
        })}
        <li>
          <a href={resume} download="Naaman Frenkel">
            CV
          </a>
        </li>
      </ol>
    </nav>
  )
}

export default HomePageNav

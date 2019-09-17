import React from "react"
import { Link } from "gatsby"
import resume from "../assets/NaamanFrenkelCV.pdf"

const navs = [
  { to: "/projects/", name: "Works" },
  { to: "/about/", name: "About" },
  { to: "/contact/", name: "Contact" },
  { to: "/gallery/", name: "Gallery" },
  { to: {resume}, name: "CV" },
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
          return <ListLink  to={nav.to} key={key}>{nav.name}</ListLink>
        })}
      </ol>
    </nav>
  )
}

export default HomePageNav
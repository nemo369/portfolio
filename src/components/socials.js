import React from "react"
import { getSvg } from "../helpers"
import useSiteMetadata from './SiteMetadata'

const Social = props => (
  <li
    className={`contact__social contact__social--${props.name}`}
  >
    <a target="_blank" rel="noopener noreferrer" href={props.link}>
      <span dangerouslySetInnerHTML={{ __html: getSvg(props.name) }}  className="contact__icon"></span>
      <span className="contact__name">&nbsp;@{props.user}</span>
    </a>
  </li>
)

const Socials = (props) => {
  const { socials } = useSiteMetadata()


  return (
    <ul className={`contact__socials flex ${props.class}`}>
      {socials.map((social,key) => (
        <Social key={key} {...social}/>
      ))}
    </ul>
  )
}

export default Socials

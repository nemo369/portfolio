import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Socials from '../components/socials'

import { getSvg } from "../helpers"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <article className="contact">
        <h1 className="contact__title">Contact Me</h1>

        <div className="contact__text">
          You can find me in social media:
              <Socials class="contact-page-scoials"/>

          <div className="contact__email">
            By mail:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:nafrenkel@gmail.com"
            >
              <span
                dangerouslySetInnerHTML={{ __html: getSvg("email") }}
              ></span>
              @nafrenkel
            </a>
          </div>
        </div>
      </article>
    </Layout>
  )
}
export default ContactPage

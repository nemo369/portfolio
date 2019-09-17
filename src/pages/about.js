import React from "react"
import { Link } from "gatsby"
import resume from "../assets/NaamanFrenkelCV.pdf"
import Layout from "../components/layout"
import me from "../assets/me.png"
import Seo from "../components/seo"
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <article className="about">
        <h1>About</h1>
        <div className="content about__contnet">
          <p>
            I am a Frontend Web Developer with experience in the latest web
            technologies As a self learner who is always on top of the latest
            technologies and innovations I do Fullstack Web Developer.
          </p>
          <p>
            <strong>Always On Top Of The Latest Technology</strong>
            I'm programing in modern JavaScript (ES6). My server side knowledge
            includes nodeJS, PHP, SQL and non-SQL database work
          </p>
          <p>
            <strong>Responsive Design</strong>
            HTML5, CSS3 and SASSMy Apps are built from Photoshop to a live page
            to create responsive design in the “mobile first” methods.Bootstrap,
            Bulma and jQuery.
          </p>
          <p>
            <strong>Building a Full Scale Web App</strong>
            My scripts have increased performance and conversion rates. MVC,
            frameworks, Single page apps (PWA) and Flux state management with 💻
            <i>Vue.js, Angular or React</i>♨. I always use Git and Webpack
          </p>
          <p>
            More then 2 years coding experience. Graduate of&nbsp;
            <a
              className="a"
              href="https://www.coding-academy.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding Academy
            </a>
            - an intensive first class coding bootcamp (540 hours) that
            qualifies leading front-end developers
          </p>
          <p>
            I
            <span role="img" aria-label="heart">
              ❤
            </span>
            ️to
            <span role="img" aria-label="heart">
              📷
            </span>
            in my spare time, see it
            <Link to="/gallery">
              <span role="img" aria-label="heart">
                🌅
              </span>
              Here
            </Link>
          </p>
          <p>
            Currently Looking For My Next Challenge <br />
            <span role="img" aria-label="heart">
              📝
            </span>
            <a href={resume} className="a" download="Naaman Frenkel">
              my resume
            </a>
          </p>
        </div>
        <div className="about__img">
          <div className="toltip speech-bubble">Coding Is Life</div>

          <img src={me} alt="naaman frenkel" />
        </div>
      </article>
    </Layout>
  )
}
export default AboutPage

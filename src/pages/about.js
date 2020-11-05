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
            I am a Frontend Web Developer with more than 3 years experience in
            the latest web technologies. My expertise ranges from JavaScript(ES6)
            frontend libraries such as <em>Angular, Vue and React</em>, all the way to
            pixel perfect development based on <em>CSS 3&HTML 5</em>. As a self
            learner who is always on top of the latest technologies and
            innovations, I also do backend applications based on NodeJS and PHP, which results in beautiful full scale web
            apps.
          </p>
          <p>
            I have more than 2 years coding experience. I am a graduate of&nbsp;
            <a
              className="a"
              href="https://www.coding-academy.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding Academy
            </a>
            - an intensive first class coding bootcamp (540 hours) that
            qualifies leading frontend developers.
          </p>
          <p>
            <strong>-Always On Top Of The Latest Technology:</strong>
            I program in modern JavaScript (ES6). My server side knowledge
            includes nodeJS, PHP, SQL and non-SQL database work.
          </p>
          <p>
            <strong>-Responsive Design:</strong>
            Leaning on HTML5, CSS3 and SASS my apps are built from Photoshop, Figma or Sketch to a live page,
            which creates a responsive website in the “mobile first” method. I have experience developing along side
            with UX and UI masters.
          </p>
          <p>
            <strong>-Building a Full Scale Web App:</strong>
            My scripts have increased performance and conversion rates.
            💻 I always use state management, Git and Webpack whether it's for MVC
            frameworks, single page apps or progressive web apps (PWA).
            To see it in action check out my <Link to="/projects/"> works </Link>.
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

import ScrollAnimation from "react-animate-on-scroll";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import ProfilePic from "../../assets/profile-pic.png";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import phpIcon from "../../assets/php-icon.svg";
import nextIcon from "../../assets/nextjs-icon.svg";
import sassIcon from "../../assets/sass-less-icon.svg";
import reduxIcon from "../../assets/redux-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import expressIcon from "../../assets/expressjs-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import jqueryIcon from "../../assets/jquery-icon.svg";
import nestjsIcon from "../../assets/nestjs-icon.svg";
import postgresIcon from "../../assets/postgres-icon.svg";
import wordpressIcon from "../../assets/wordpress-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import jestIcon from "../../assets/jest-icon.svg";
import redisIcon from "../../assets/redis-icon.svg";
import playwrightIcon from "../../assets/playwright-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";

import { Container } from "./styles";

export function About() {
  return (
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            {" "}
            My name is Talha Akhter, I am a Software Engineer with a great passion for programming.
            I am passionate about delivering solutions that add to people&lsquo;s lives and at the
            same time challenge me. I improved my skills as a Front-End and Back-End developer
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with
            developing layouts that provide me. I&lsquo;m always improving myself with each project
            they put in my hands.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated person who strives to make my dreams come true, hardworking and
            results-oriented, I always seek to achieve the best version of myself.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
              <img src={phpIcon} alt="PHP" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
              <img src={nextIcon} alt="NextJs" style={{ width: "60px", height: "40px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
              <img src={sassIcon} alt="SASS" style={{ width: "90px", height: "40px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.0 * 1000}>
              <img src={reduxIcon} alt="Redux" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.1 * 1000}>
              <img src={bootstrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.3 * 1000}>
              <img src={expressIcon} alt="ExpressJs" style={{ width: "60px", height: "40px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.4 * 1000}>
              <img src={nestjsIcon} alt="NestJs" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.5 * 1000}>
              <img src={jqueryIcon} alt="JQuery" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.6 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.6 * 1000}>
              <img src={postgresIcon} alt="Postgres" style={{ width: "80px", height: "50px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.7 * 1000}>
              <img src={mongodbIcon} alt="MongoDB" style={{ width: "100px", height: "40px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.8 * 1000}>
              <img src={firebaseIcon} alt="Firebase" style={{ width: "100px", height: "60px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={1.9 * 1000}>
              <img src={redisIcon} alt="Redis" style={{ width: "60px", height: "60px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={2.0 * 1000}>
              <img src={jestIcon} alt="Jest" style={{ width: "60px", height: "60px" }} />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={2.1 * 1000}>
              <img src={playwrightIcon} alt="Playwright" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={2.2 * 1000}>
              <img src={wordpressIcon} alt="Wordpress" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={ProfilePic} alt="Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

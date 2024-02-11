import { BrowserRouter } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import Illustration from "../../assets/illustration.svg";
import { Container } from "./styles";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hi! 👋, I am</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Talha Akhter</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Sr. Full Stack Software Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">
            Software Engineer with a strong background in NodeJS, ReactJS, Angular, PHP, Typescript
            and JavaScript. With over 5 years of experience in the computer software industry,
            I&apos;m passionate about creating efficient and user-friendly solutions.
            <br />
            <br />
            I hold a Master&apos;s degree in Computer Science and Information Technology from NED
            University of Engineering & Technology. Currently, I am a Sr. Full Stack Software
            Engineer at Stella Technology, where I lead key architectural decisions and spearhead
            web app development.
            <br />
            <br />I thrive on challenges and collaboration and always strive for excellence in every
            project I undertake. Let&apos;s connect and explore how I can contribute to your team or
            organization.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

import Particles from "react-tsparticles";

import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import expressIcon from "../../assets/expressjs-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jestIcon from "../../assets/jest-icon.svg";
import jqueryIcon from "../../assets/jquery-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import nestjsIcon from "../../assets/nestjs-icon.svg";
import nextIcon from "../../assets/nextjs-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import phpIcon from "../../assets/php-icon.svg";
import playwrightIcon from "../../assets/playwright-icon.svg";
import postgresIcon from "../../assets/postgres-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import redisIcon from "../../assets/redis-icon.svg";
import reduxIcon from "../../assets/redux-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vscodeIcon from "../../assets/vscode-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import wordpressIcon from "../../assets/wordpress-icon.svg";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Hero } from "../Hero/Hero";
import { Portfolio } from "../Portfolio/Portfolio";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

import { Container } from "./styles";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: bootstrapIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: cssIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: htmlIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: jsIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: mysqlIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: nodeIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: reactIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: sassIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: typescriptIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: vscodeIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: vueIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: phpIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: nextIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: nextIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: redisIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: playwrightIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: firebaseIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: jestIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: wordpressIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: postgresIcon,
                  width: 60,
                  height: 40,
                },
                {
                  src: jqueryIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: nestjsIcon,
                  width: 60,
                  height: 40,
                },
                {
                  src: expressIcon,
                  width: 60,
                  height: 40,
                },
                {
                  src: mongodbIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: reduxIcon,
                  width: 20,
                  height: 20,
                },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <ScrollToTop />
    </Container>
  );
}

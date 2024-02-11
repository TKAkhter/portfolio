import { Container } from './styles'

import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>T</span>
        <span>Akhter</span>
      </a>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/talha-akhter-525230133/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/TKAkhter/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://www.instagram.com/talha.akhter.146/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}

import '../styles/Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer () {
  const portfolioLink = 'https://javihidalgodev.github.io/portfolio/'
  const linkedinLink = 'https://linkedin.com/in/javihidalgodev'
  const githubLink = 'https://github.com/javihidalgodev'

  return (
    <footer className="footer">
        <span>Powered by <strong><a href={portfolioLink} target='_blank' rel='noreferrer'>javihidalgodev</a></strong></span>
        <a href={githubLink} target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href={linkedinLink} target='_blank' rel='noreferrer'><FaLinkedin /></a>
    </footer>
  )
}
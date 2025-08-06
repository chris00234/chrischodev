import Hero from '../../components/sections/Hero'
import Skills from '../../components/sections/Skills'
import Projects from '../../components/sections/Projects'
import Contact from '../../components/sections/Contact'

const Portfolio = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  )
}

export default Portfolio
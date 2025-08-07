import { useState } from 'react'
import { ExternalLink, Github, Play, Zap, Shield, Gauge } from 'lucide-react'
import { PROJECTS } from '../../constants/data'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const statusColors = {
    'Production': 'text-green-400 bg-green-400/10',
    'Active': 'text-blue-400 bg-blue-400/10',
    'Completed': 'text-purple-400 bg-purple-400/10'
  }

  const featureIcons = {
    'Microservices Architecture': Shield,
    'Real-time Monitoring': Gauge,
    'Auto-scaling': Zap,
    'Real-time Updates': Zap,
    'Custom Charts': Gauge,
    'Data Export': ExternalLink,
    'Load Balancing': Shield,
    'Fault Tolerance': Shield,
    'Performance Monitoring': Gauge
  }

  return (
    <div
      className={`glass-effect rounded-xl p-6 group hover:glow-effect transition-all duration-300 animate-fade-in-up cursor-pointer card-hover-effect`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
      
      <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">Key Features</h4>
        <div className="space-y-2">
          {project.features.map((feature, idx) => {
            const Icon = featureIcons[feature] || Play
            return (
              <div key={idx} className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                <Icon size={14} className="text-primary-400" />
                <span className="text-sm">{feature}</span>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-3">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-mono group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* <div className="flex space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-200 transform hover:scale-105">
          <ExternalLink size={14} />
          <span>Live Demo</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 glass-effect text-slate-600 dark:text-slate-300 text-sm rounded-lg hover:glow-effect hover:text-slate-900 dark:hover:text-white transition-all duration-200">
          <Github size={14} />
          <span>Code</span>
        </button>
      </div> */}
    </div>
  )
}

const Projects = () => {
  const handleGetInTouch = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact')
    const nameInput = document.getElementById('name')
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    
    // Focus on full name input after scroll completes
    setTimeout(() => {
      if (nameInput) {
        nameInput.focus()
      }
    }, 500)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            A showcase of my most impactful work, demonstrating expertise in 
            full-stack development, system architecture, and modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center">
          <button className="px-8 py-3 glass-effect text-primary-500 dark:text-primary-400 font-semibold rounded-lg hover:glow-effect transform hover:scale-105 transition-all duration-200">
            View All Projects
          </button>
        </div>
        
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto card-hover-effect animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              I'm always interested in discussing new opportunities and exciting projects. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetInTouch}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </button>
              <button 
                onClick={handleScheduleCall}
                className="px-6 py-3 glass-effect text-primary-500 dark:text-primary-400 font-semibold rounded-lg hover:glow-effect transform hover:scale-105 transition-all duration-200"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
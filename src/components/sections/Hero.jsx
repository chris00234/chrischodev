import { useState, useEffect } from 'react'
import { ChevronDown, Code, Database, Server } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isChevronVisible, setIsChevronVisible] = useState(true)
  const roles = ['Full-Stack Developer', '.NET Developer', 'Database Engineer', 'System Designer']

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Chris_Cho_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Hide the chevron if user has scrolled down more than 50px
      setIsChevronVisible(scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const techIcons = [
    { icon: Code, label: 'Frontend' },
    { icon: Server, label: 'Backend' },
    { icon: Database, label: 'Database' },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-500/20 dark:bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-slate-900 dark:text-white">Hi, I'm</span>
            <span className="gradient-text">Chris Cho</span>
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-medium">
              <span className="gradient-text font-mono">
                {roles[currentRole]}
              </span>
            </h2>
          </div>
          
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate about building scalable, high-performance applications with{' '}
            <span className="text-primary-400 font-semibold">C#</span>,{' '}
            <span className="text-primary-400 font-semibold">.NET 8.0</span>, and modern technologies. 
            From databases to user interfaces, I craft complete solutions that make a difference.
          </p>
          
          <div className="flex justify-center space-x-8 mb-16">
            {techIcons.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center group cursor-pointer">
                <div className="p-4 glass-effect rounded-lg group-hover:glow-effect transition-all duration-300 group-hover:scale-110">
                  <Icon size={32} className="text-primary-400" />
                </div>
                <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-primary-500/25">
              View My Work
            </button>
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-3 glass-effect text-primary-400 font-semibold rounded-lg hover:glow-effect transform hover:scale-105 transition-all duration-200"
            >
              Download Resume
            </button>
          </div>
        </div>
        
        <div 
          className={`fixed bottom-4 left-[48.5%] transition-opacity duration-300 z-50 ${
            isChevronVisible ? 'opacity-100 animate-bounce' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ChevronDown size={24} className="text-slate-500 dark:text-slate-400" />
        </div>
      </div>
    </section>
  )
}

export default Hero
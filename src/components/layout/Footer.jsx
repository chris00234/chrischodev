import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { CONTACT_INFO } from '../../constants/data'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
  ]

  return (
    <footer className="glass-effect mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <MapPin size={16} className="text-primary-400" />
            <span className="text-slate-500 dark:text-slate-400">{CONTACT_INFO.location}</span>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700 mt-6 pt-6 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © { new Date().getFullYear() } Chris. Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
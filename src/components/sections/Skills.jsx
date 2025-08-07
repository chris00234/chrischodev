import { useState } from 'react'
import { SKILLS } from '../../constants/data'

const SkillBar = ({ skill, delay = 0 }) => {
  return (
    <div className="mb-6 animate-fade-in-left" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-slate-900 dark:text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-primary-400 font-mono text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${skill.level}%`,
            animationDelay: `${delay + 500}ms`
          }}
        />
      </div>
    </div>
  )
}

const SkillCategory = ({ title, skills, delay = 0 }) => {
  return (
    <div className="glass-effect p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <h3 className="text-xl font-bold gradient-text mb-6 text-center">
        {title}
      </h3>
      {skills.map((skill, index) => (
        <SkillBar 
          key={skill.name} 
          skill={skill} 
          delay={delay + (index * 100)}
        />
      ))}
    </div>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  const categories = [
    { key: 'backend', title: 'Backend', skills: SKILLS.backend },
    { key: 'database', title: 'Database', skills: SKILLS.database },
    { key: 'frontend', title: 'Frontend', skills: SKILLS.frontend },
    { key: 'tools', title: 'Tools & DevOps', skills: SKILLS.tools },
  ]

  const tabs = [
    { key: 'all', label: 'All Skills' },
    ...categories.map(cat => ({ key: cat.key, label: cat.title }))
  ]

  const getVisibleCategories = () => {
    if (activeTab === 'all') return categories
    return categories.filter(cat => cat.key === activeTab)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Proficient in multiple programming languages and technologies, 
            with deep expertise in full-stack development and system architecture.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                  : 'glass-effect text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:glow-effect'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {getVisibleCategories().map((category, index) => (
            <SkillCategory
              key={category.key}
              title={category.title}
              skills={category.skills}
              delay={index * 200}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 glass-effect px-6 py-4 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">1+</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">30+</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-slate-300 dark:bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">10+</div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
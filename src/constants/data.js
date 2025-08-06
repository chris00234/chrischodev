export const SKILLS = {
  backend: [
    { name: 'C#', level: 95, icon: '🔷' },
    { name: '.NET 8.0', level: 95, icon: '⚡' },
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'C++', level: 80, icon: '⚙️' },
    { name: 'C', level: 75, icon: '🔧' },
  ],
  database: [
    { name: 'SQL Server', level: 90, icon: '🗄️' },
    { name: 'PostgreSQL', level: 85, icon: '🐘' },
    { name: 'MongoDB', level: 80, icon: '🍃' },
    { name: 'Redis', level: 75, icon: '📦' },
  ],
  frontend: [
    { name: 'React', level: 85, icon: '⚛️' },
    { name: 'TypeScript', level: 80, icon: '📘' },
    { name: 'JavaScript', level: 90, icon: '🟨' },
    { name: 'Tailwind CSS', level: 85, icon: '🎨' },
  ],
  tools: [
    { name: 'Docker', level: 85, icon: '🐳' },
    { name: 'AWS', level: 80, icon: '☁️' },
    { name: 'Git', level: 95, icon: '📋' },
    { name: 'Jenkins', level: 75, icon: '🔄' },
  ]
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Enterprise API Gateway',
    description: 'High-performance API gateway built with .NET 8.0, handling 10k+ requests/second with advanced caching and rate limiting.',
    tech: ['C#', '.NET 8.0', 'Redis', 'Docker'],
    features: ['Microservices Architecture', 'Real-time Monitoring', 'Auto-scaling'],
    status: 'Production'
  },
  {
    id: 2,
    title: 'Real-time Analytics Dashboard',
    description: 'Full-stack analytics platform with real-time data processing and interactive visualizations.',
    tech: ['Python', 'React', 'PostgreSQL', 'WebSockets'],
    features: ['Real-time Updates', 'Custom Charts', 'Data Export'],
    status: 'Active'
  },
  {
    id: 3,
    title: 'Distributed Task Scheduler',
    description: 'Scalable task scheduling system built with C++ for high-performance computing environments.',
    tech: ['C++', 'Redis', 'Docker', 'Linux'],
    features: ['Load Balancing', 'Fault Tolerance', 'Performance Monitoring'],
    status: 'Completed'
  }
]

export const CONTACT_INFO = {
  email: 'wheogus98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daehyuncho980113/',
  github: 'https://github.com/chris00234',
  location: 'Irvine, CA, United States',
}
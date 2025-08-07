// Terminal file system structure
export const terminalData = {
  '/': {
    type: 'directory',
    items: {
      'projects': { type: 'directory', items: {} },
      'skills': { type: 'directory', items: {} },
      'about.txt': { 
        type: 'file', 
        content: `Chris Cho - Full-Stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Passionate about building scalable applications
💻 Expertise in .NET, React, and modern technologies
🏗️  Full-stack development from database to UI
📍 Available for remote work and collaboration

"From databases to user interfaces, I craft complete solutions that make a difference."

Contact: 
📧 Email: your@email.com
🔗 LinkedIn: linkedin.com/in/your-profile
🐙 GitHub: github.com/your-username` 
      },
      'resume.pdf': { 
        type: 'file', 
        content: '📄 Resume file - Use "download resume.pdf" to get the PDF file'
      },
      'contact.txt': {
        type: 'file',
        content: `Contact Information
━━━━━━━━━━━━━━━━━━━━

📧 Email: your@email.com
📱 Phone: +1 (555) 123-4567
🌍 Location: Available for remote work
🔗 LinkedIn: linkedin.com/in/your-profile
🐙 GitHub: github.com/your-username

💡 Always open to new opportunities and interesting projects!`
      }
    }
  }
}

// Initialize projects data
terminalData['/'].items.projects.items = {
  'enterprise-api-gateway': {
    type: 'file',
    content: `Enterprise API Gateway
━━━━━━━━━━━━━━━━━━━━━

🚀 High-performance API gateway handling 10k+ requests/second
🛠️  Tech Stack: C#, .NET 8.0, Redis, Docker
⭐ Features:
   • Microservices Architecture
   • Real-time Monitoring
   • Auto-scaling
   • Advanced caching
   • Rate limiting

📈 Performance: 10,000+ req/sec
🔧 Status: Production ✅`
  },
  'analytics-dashboard': {
    type: 'file',
    content: `Real-time Analytics Dashboard
━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Full-stack analytics platform with real-time data processing
🛠️  Tech Stack: Python, React, PostgreSQL, WebSockets
⭐ Features:
   • Real-time Updates
   • Custom Charts
   • Data Export
   • Interactive visualizations
   • WebSocket connections

📈 Status: Active Development 🚧`
  },
  'task-scheduler': {
    type: 'file',
    content: `Distributed Task Scheduler
━━━━━━━━━━━━━━━━━━━━━━━━━

⚡ Scalable task scheduling system for high-performance computing
🛠️  Tech Stack: C++, Docker, Kubernetes
⭐ Features:
   • Load Balancing
   • Fault Tolerance
   • Performance Monitoring
   • Distributed architecture
   • High throughput

🔧 Status: Completed ✅`
  },
  'portfolio-website': {
    type: 'file',
    content: `Portfolio Website
━━━━━━━━━━━━━━━━

🌐 Modern portfolio website with interactive terminal
🛠️  Tech Stack: React, Vite, Tailwind CSS
⭐ Features:
   • Dark/Light theme toggle
   • Interactive terminal (you're using it!)
   • Responsive design
   • Smooth animations
   • Performance optimized

🔗 Live: You're looking at it! 🎉
📂 GitHub: Check the source code

Status: Active Development 🚧`
  }
}

// Initialize skills data
terminalData['/'].items.skills.items = {
  'backend.txt': {
    type: 'file',
    content: `Backend Technologies
━━━━━━━━━━━━━━━━━━━

🔧 Languages & Frameworks:
   • C# / .NET 8.0        ████████████ 95%
   • ASP.NET Core         ███████████  90%
   • Node.js              ████████     80%
   • Python               ███████      70%

🏗️  Architecture & Patterns:
   • Microservices
   • Clean Architecture
   • CQRS & Event Sourcing
   • Domain-Driven Design`
  },
  'frontend.txt': {
    type: 'file',
    content: `Frontend Technologies
━━━━━━━━━━━━━━━━━━━━

⚛️  JavaScript & Frameworks:
   • React               ███████████  90%
   • TypeScript          ██████████   85%
   • Next.js             ████████     80%
   • Vue.js              ███████      70%

🎨 Styling & UI:
   • Tailwind CSS
   • CSS-in-JS
   • Material-UI
   • Responsive Design`
  },
  'database.txt': {
    type: 'file',
    content: `Database Technologies
━━━━━━━━━━━━━━━━━━━━

🗃️  Databases:
   • SQL Server          ███████████  90%
   • PostgreSQL          ██████████   85%
   • MongoDB             ████████     80%
   • Redis               ███████      75%

📊 Data Management:
   • Entity Framework Core
   • Dapper
   • Database Design
   • Performance Optimization`
  }
}

let currentDirectory = '/'
let fileSystem = terminalData

// Helper functions
const getCurrentDir = () => {
  const parts = currentDirectory.split('/').filter(p => p)
  let current = fileSystem['/']
  
  for (const part of parts) {
    if (current.items && current.items[part]) {
      current = current.items[part]
    }
  }
  
  return current
}

const resolvePath = (path) => {
  if (path === '/') return '/'
  if (path === '~') return '/'
  if (path === '..') {
    const parts = currentDirectory.split('/').filter(p => p)
    parts.pop()
    return parts.length === 0 ? '/' : '/' + parts.join('/')
  }
  if (path.startsWith('/')) return path
  
  const parts = currentDirectory.split('/').filter(p => p)
  parts.push(path)
  return '/' + parts.join('/')
}

const getPromptPath = () => {
  return currentDirectory === '/' ? '~' : '~' + currentDirectory
}

// Command implementations
const commands = {
  help: () => ({
    output: `Available Commands:
━━━━━━━━━━━━━━━━━━━

📁 File System:
   ls                  List directory contents
   cd <directory>      Change directory
   cat <file>          Display file contents
   pwd                 Show current directory

ℹ️  Information:
   whoami             Display user information  
   about              About Chris Cho
   skills             Show technical skills
   projects           List all projects

🔧 System:
   clear              Clear terminal screen
   help               Show this help message

💡 Tips:
   • Use Tab for autocomplete
   • Use ↑/↓ arrows for command history
   • Type "ls" to see available files and directories`
  }),

  ls: (args) => {
    const dir = getCurrentDir()
    if (!dir.items) {
      return { error: 'Not a directory' }
    }

    const items = Object.entries(dir.items).map(([name, item]) => {
      const icon = item.type === 'directory' ? '📁' : '📄'
      const color = item.type === 'directory' ? '\x1b[34m' : '\x1b[37m'
      return `${icon} ${name}`
    })

    return {
      output: items.length > 0 ? items.join('\n') : 'Directory is empty'
    }
  },

  cd: (args) => {
    if (!args[0]) {
      currentDirectory = '/'
      return { 
        output: '',
        path: getPromptPath()
      }
    }

    const targetPath = resolvePath(args[0])
    const parts = targetPath.split('/').filter(p => p)
    
    let current = fileSystem['/']
    for (const part of parts) {
      if (!current.items || !current.items[part]) {
        return { error: `cd: ${args[0]}: No such directory` }
      }
      current = current.items[part]
      if (current.type !== 'directory') {
        return { error: `cd: ${args[0]}: Not a directory` }
      }
    }

    currentDirectory = targetPath
    return { 
      output: '',
      path: getPromptPath()
    }
  },

  cat: (args) => {
    if (!args[0]) {
      return { error: 'cat: missing file name' }
    }

    const dir = getCurrentDir()
    const fileName = args[0]
    
    if (!dir.items || !dir.items[fileName]) {
      return { error: `cat: ${fileName}: No such file or directory` }
    }

    const file = dir.items[fileName]
    if (file.type === 'directory') {
      return { error: `cat: ${fileName}: Is a directory` }
    }

    return { output: file.content }
  },

  pwd: () => ({
    output: currentDirectory
  }),

  whoami: () => ({
    output: `chris
     
👨‍💻 Full-Stack Developer
🎯 Specializing in .NET and React
🏗️  Building scalable applications
🌍 Available for remote work`
  }),

  about: () => ({
    output: commands.cat(['about.txt']).output
  }),

  skills: () => ({
    output: `Technical Skills Overview:
━━━━━━━━━━━━━━━━━━━━━━━━━

Use these commands to explore:
   cat skills/backend.txt    - Backend technologies
   cat skills/frontend.txt   - Frontend technologies  
   cat skills/database.txt   - Database technologies

Or navigate: cd skills && ls`
  }),

  projects: () => ({
    output: `Featured Projects:
━━━━━━━━━━━━━━━━━━

Use these commands to explore:
   cat projects/enterprise-api-gateway
   cat projects/analytics-dashboard
   cat projects/task-scheduler
   cat projects/portfolio-website

Or navigate: cd projects && ls`
  }),

  download: (args) => {
    if (args[0] === 'resume.pdf') {
      // Trigger resume download
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Chris_Cho_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      return { output: '📥 Downloading resume.pdf...' }
    }
    return { error: `download: ${args[0]}: File not found or not downloadable` }
  },

  clear: () => ({
    output: '' // Special case handled in Terminal component
  })
}

export const executeCommand = (input) => {
  const parts = input.trim().split(' ')
  const command = parts[0].toLowerCase()
  const args = parts.slice(1)

  if (commands[command]) {
    return commands[command](args)
  }

  return { 
    error: `Command not found: ${command}\nType "help" for available commands.` 
  }
}
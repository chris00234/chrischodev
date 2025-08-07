// Terminal file system structure
export const terminalData = {
  '/': {
    type: 'directory',
    items: {
      'projects': { type: 'directory', items: {} },
      'skills': { type: 'directory', items: {} },
      'about.txt': { 
        type: 'file', 
        content: `Daehyun (Chris) Cho - Backend/Full-stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎓 Computer Science Graduate from UC Irvine (GPA: 3.78)
💼 Software Engineer at GIT America Inc (Hyundai/KIA projects)
🚀 Specializing in Python, C# (.NET), and cloud infrastructure
🏗️  Building scalable enterprise applications and optimizing complex systems
📍 Irvine, CA - Available for remote work

"Backend/Full-stack developer who delivers high-performance solutions from database to deployment."

Contact: 
📧 Email: wheogus98@gmail.com
🔗 LinkedIn: linkedin.com/in/daehyuncho980113
🐙 GitHub: github.com/chris00234` 
      },
      'resume.pdf': { 
        type: 'file', 
        content: '📄 Resume file - Use "download resume.pdf" to get the PDF file'
      },
      'contact.txt': {
        type: 'file',
        content: `Contact Information
━━━━━━━━━━━━━━━━━━━━

📧 Email: wheogus98@gmail.com
📱 Phone: 213-274-2672
🌍 Location: Irvine, CA - Available for remote work
🔗 LinkedIn: linkedin.com/in/daehyuncho980113
🐙 GitHub: github.com/chris00234

💡 Always open to new opportunities and interesting projects!
🎯 Specializing in enterprise applications and cloud infrastructure`
      }
    }
  }
}

// Initialize projects data
terminalData['/'].items.projects.items = {
  'hyundai-kia-diagnostic': {
    type: 'file',
    content: `Hyundai/KIA Diagnostic Application
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚗 Enhanced server-side components for automotive diagnostic applications
🛠️  Tech Stack: C#, .NET Framework, MS SQL, AWS S3
⭐ Features:
   • API Integration
   • High-throughput Batch Processing
   • Cloud Migration to AWS
   • Database Optimization
   • Cross-functional Collaboration

🏢 Company: GIT America Inc
🔧 Status: Production ✅`
  },
  'ct-image-processing': {
    type: 'file',
    content: `CT Image Processing Pipeline
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧠 Medical imaging optimization with bilateral filter parameter tuning
🛠️  Tech Stack: Python, OpenCV, SciPy, HPC
⭐ Features:
   • Grid Search & Particle Swarm Optimization
   • Global Minima Achievement
   • Multi-GPU Computing
   • SSH-accessible Clusters
   • Distributed Memory Allocation

🏫 Institution: UC Irvine Medical Imaging Lab
🔧 Status: Completed ✅`
  },
  'unet-heart-segmentation': {
    type: 'file',
    content: `U-Net Heart Chamber Segmentation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❤️ Deep learning model for precise heart chamber segmentation
🛠️  Tech Stack: PyTorch, Python, SSH, Multi-GPU
⭐ Features:
   • 20% Overfitting Reduction
   • Hyperparameter Tuning
   • Distributed Training
   • U-Net Architecture
   • Medical Image Analysis

🏫 Institution: UC Irvine Medical Imaging Lab
🔧 Status: Completed ✅`
  },
  'image-blender': {
    type: 'file',
    content: `Image Blender with Pyramids
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎨 High-fidelity image reconstruction using advanced algorithms
🛠️  Tech Stack: Python, OpenCV, SciPy, NumPy
⭐ Features:
   • SciPy Least-squares Solver
   • Gaussian & Laplacian Pyramids
   • Sparse Matrix Optimization
   • Memory Footprint Reduction
   • Seamless Image Blending

🎯 Academic Project
🔧 Status: Completed ✅`
  },
  'ai-engagement-scoring': {
    type: 'file',
    content: `AI-Powered Engagement Scoring System
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 Real-time engagement scoring replacing traditional survey methods
🛠️  Tech Stack: Python, Machine Learning, Computer Vision
⭐ Features:
   • Custom Dataset Creation
   • Live Model Deployment
   • Real-time Scoring Function
   • Entrepreneur Showcases
   • Team Leadership

🏆 Achievement: AI Innovation Challenge Finalist
🔧 Status: Award Winner ✨`
  },
  'cloud-removal-diffusion': {
    type: 'file',
    content: `Cloud Removal with Diffusion Models
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☁️ Cloud-removal pipeline for living-space detection analysis
🛠️  Tech Stack: PyTorch, Diffusion Models, SAM, Computer Vision
⭐ Features:
   • Segment Anything Model Integration
   • Diffusion-based Inpainting
   • IoU Threshold Tuning
   • Binary Cloud Masks
   • Enhanced Image Clarity

🎯 Research Project
🔧 Status: Completed ✅`
  }
}

// Initialize skills data
terminalData['/'].items.skills.items = {
  'languages.txt': {
    type: 'file',
    content: `Programming Languages
━━━━━━━━━━━━━━━━━━━━━

💻 Core Languages:
   • C#                   █████████    90%
   • Python               █████████    90%
   • C/C++                ████████     85%
   • Java                 ████████     80%
   • JavaScript           ███████       75%
   • TypeScript           ███████       70%
   • SQL                  ████████     80%
   • Bash/Shell           ███████       75%
   • Julia                ██████         60%`
  },
  'frameworks.txt': {
    type: 'file',
    content: `Frameworks & Libraries
━━━━━━━━━━━━━━━━━━━━━━

⚡ Backend Frameworks:
   • .NET Framework       █████████    90%
   • .NET 8.0             ████████     85%
   • Spring Boot          ███████       75%

🧠 AI/ML Frameworks:
   • TensorFlow           ████████     80%
   • PyTorch              ███████       75%

⚛️ Frontend Frameworks:
   • React                ███████       70%
   • Node.js              ██████        65%`
  },
  'databases.txt': {
    type: 'file',
    content: `Database Technologies
━━━━━━━━━━━━━━━━━━━━━

🗄️ Databases:
   • MS SQL               ████████     85%
   • MySQL                ████████     80%
   • SQLite               ███████       75%
   • PostgreSQL           ███████       70%
   • Redis                ████████     80%
   • MongoDB              ███████       70%

📊 Database Skills:
   • Query Optimization
   • Database Design
   • Performance Tuning
   • Data Migration`
  },
  'cloud-devops.txt': {
    type: 'file',
    content: `Cloud & DevOps
━━━━━━━━━━━━━━━

☁️ Cloud Platforms:
   • AWS                  ████████     80%
   • GCP                  ███████       70%

🚪️ DevOps Tools:
   • Docker               ███████       75%
   • Jenkins              ███████       70%
   • HPC                  ███████       75%

📋 Version Control:
   • Git                  █████████    90%
   • SVN                  █████          50%`
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
     
👨‍💻 Backend/Full-stack Developer
🎯 Specializing in Python, C# (.NET), and cloud infrastructure
🏗️  Building scalable enterprise applications
🌍 Irvine, CA - Available for remote work
🎓 UC Irvine Computer Science Graduate`
  }),

  about: () => ({
    output: commands.cat(['about.txt']).output
  }),

  skills: () => ({
    output: `Technical Skills Overview:
━━━━━━━━━━━━━━━━━━━━━━━━━

Use these commands to explore:
   cat skills/languages.txt     - Programming languages
   cat skills/frameworks.txt    - Frameworks & libraries
   cat skills/databases.txt     - Database technologies
   cat skills/cloud-devops.txt  - Cloud & DevOps tools

Or navigate: cd skills && ls`
  }),

  projects: () => ({
    output: `Featured Projects:
━━━━━━━━━━━━━━━━━━

Use these commands to explore:
   cat projects/hyundai-kia-diagnostic
   cat projects/ct-image-processing
   cat projects/unet-heart-segmentation
   cat projects/image-blender
   cat projects/ai-engagement-scoring
   cat projects/cloud-removal-diffusion

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
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { terminalData, executeCommand } from './terminalCommands'

const Terminal = () => {
  const navigate = useNavigate()
  
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Chris\'s Terminal! 🚀' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ])
  const [currentInput, setCurrentInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentPath, setCurrentPath] = useState('~')
  
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const handleClose = () => {
    navigate('/')
  }

  useEffect(() => {
    // Focus on terminal input when component mounts
    inputRef.current?.focus()
    
    // Scroll to bottom when history updates
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (command) => {
    const trimmedCommand = command.trim()
    
    // Add to history
    setHistory(prev => [...prev, { 
      type: 'input', 
      content: `${currentPath} $ ${trimmedCommand}` 
    }])

    if (trimmedCommand) {
      // Add to command history
      setCommandHistory(prev => [...prev, trimmedCommand])
      setHistoryIndex(-1)

      // Execute command
      const result = executeCommand(trimmedCommand)
      
      if (result.output) {
        setHistory(prev => [...prev, { 
          type: 'output', 
          content: result.output 
        }])
      }

      if (result.error) {
        setHistory(prev => [...prev, { 
          type: 'error', 
          content: result.error 
        }])
      }

      if (result.path) {
        setCurrentPath(result.path)
      }

      // Handle special commands
      if (trimmedCommand === 'clear') {
        setHistory([])
      }
    } else {
      // Empty command
      setHistory(prev => [...prev, { type: 'output', content: '' }])
    }

    setCurrentInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(currentInput)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCurrentInput('')
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple autocomplete for common commands
      const commands = ['help', 'ls', 'cat', 'cd', 'clear', 'whoami', 'about']
      const matches = commands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()))
      if (matches.length === 1) {
        setCurrentInput(matches[0])
      }
    }
  }

  const handleTerminalClick = () => {
    inputRef.current?.focus()
  }

  const renderContent = (content) => {
    if (typeof content === 'string') {
      return content.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))
    }
    return content
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Terminal Window */}
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-700 px-4 py-3 flex items-center space-x-2">
          <div className="flex space-x-2">
            <button 
              onClick={handleClose}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
              title="Close Terminal"
            ></button>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-300 text-sm font-medium">chris@portfolio: {currentPath}</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="h-96 overflow-y-auto p-4 font-mono text-sm bg-black text-green-400 cursor-text"
          onClick={handleTerminalClick}
        >
          {history.map((entry, index) => (
            <div key={index} className={`mb-1 ${
              entry.type === 'error' ? 'text-red-400' : 
              entry.type === 'input' ? 'text-blue-400' : 
              'text-green-400'
            }`}>
              {renderContent(entry.content)}
            </div>
          ))}
          
          {/* Current Input Line */}
          <div className="flex items-center">
            <span className="text-blue-400 mr-2">{currentPath} $</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
              autoComplete="off"
              spellCheck="false"
            />
            <span className="animate-pulse text-green-400">█</span>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-gray-700 px-4 py-2 text-xs text-gray-400">
          Press Tab for autocomplete • Use ↑/↓ for command history • Type "help" for commands
        </div>
      </div>
    </div>
  )
}

export default Terminal
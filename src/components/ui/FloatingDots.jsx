import { useEffect, useState } from 'react'

const FloatingDots = () => {
  const [dots, setDots] = useState([])

  useEffect(() => {
    const generateDots = () => {
      const newDots = []
      for (let i = 0; i < 15; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 20 + 20,
          delay: Math.random() * 10
        })
      }
      setDots(newDots)
    }

    generateDots()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-primary-400/20 dark:bg-primary-400/10 animate-float"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`
          }}
        />
      ))}
      
      {/* Additional gradient dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`gradient-${i}`}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 animate-float opacity-20 dark:opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 15 + 15}s`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}
    </div>
  )
}

export default FloatingDots
import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user has scrolled down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full shadow-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-110 transition-all duration-300 glass-effect hover:glow-effect"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  )
}

export default ScrollToTop
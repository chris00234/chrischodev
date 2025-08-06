import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Portfolio from './pages/portfolio/Portfolio'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Future routes for expansion */}
        <Route path="/blog" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Blog Coming Soon</h1></div>} />
        <Route path="/projects" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Projects Coming Soon</h1></div>} />
      </Routes>
    </Layout>
  )
}

export default App
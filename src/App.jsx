import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Portfolio from './pages/portfolio/Portfolio'
import Blog from './pages/blog/Blog'
import BlogPost from './pages/blog/BlogPost'
import BlogArchive from './pages/blog/BlogArchive'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Future routes for expansion */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/archive" element={<BlogArchive />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/projects" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl gradient-text">Projects Coming Soon</h1></div>} />
      </Routes>
    </Layout>
  )
}

export default App
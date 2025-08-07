import Header from './Header'
import Footer from './Footer'
import FloatingDots from '../ui/FloatingDots'
import ScrollToTop from '../ui/ScrollToTop'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <FloatingDots />
      <Header />
      <main className="pt-16 relative z-10">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
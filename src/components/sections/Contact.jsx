import { useState } from 'react'
import { Mail, MessageSquare, Send, MapPin, Phone, Calendar } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { CONTACT_INFO } from '../../constants/data'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration - using your actual credentials
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_u9da8wn'
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uxhd2k4'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'FmldDTCNuI0il36l6'
      
      // Check if credentials are available
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration is missing')
      }
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'wheogus98@gmail.com',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        to_name: 'Chris'
      }

      console.log('Sending email with params:', templateParams)

      // Send email using EmailJS
      const response = await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      console.log('Email sent successfully:', response)
      alert('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      alert(`Sorry, there was an error sending your message: ${error.message || error.text || 'Unknown error'}. Please try again or email me directly at wheogus98@gmail.com.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
      description: 'Drop me a line anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: CONTACT_INFO.location,
      href: '#',
      description: 'Available for remote work'
    },
    {
      icon: Calendar,
      title: 'Schedule',
      value: 'Available Mon-Fri',
      href: '#',
      description: 'Let\'s set up a meeting'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you and explore how we can collaborate.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8">
                I'm always excited to work on challenging projects and collaborate with talented teams. 
                Whether you need a full-stack developer, system architect, or technical consultant, 
                let's discuss how I can help bring your ideas to life.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 glass-effect rounded-lg hover:glow-effect transition-all duration-300 group cursor-pointer"
                  >
                    <div className="p-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold mb-1">{method.title}</h4>
                      <p className="text-primary-400 font-medium mb-1">{method.value}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{method.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-slate-900 dark:text-white font-semibold mb-4 flex items-center">
                <MessageSquare size={20} className="text-primary-400 mr-2" />
                Quick Response Guaranteed
              </h4>
              <p className="text-slate-500 dark:text-slate-400">
                I typically respond to all inquiries within 24 hours. 
                For urgent matters, don't hesitate to reach out directly via email or phone.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-600 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
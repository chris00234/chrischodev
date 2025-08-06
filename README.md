# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing full-stack development expertise.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive**: Fully responsive design that works perfectly on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Scalable Architecture**: Clean folder structure designed for easy expansion
- **Interactive Elements**: Engaging hover effects, animations, and user interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Framer Motion, Custom CSS animations

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Layout components
│   ├── sections/        # Hero, Skills, Projects, Contact sections
│   └── ui/             # Reusable UI components
├── pages/
│   ├── portfolio/      # Portfolio page
│   ├── blog/           # Blog pages (future expansion)
│   └── projects/       # Projects pages (future expansion)
├── constants/          # Data and configuration
├── hooks/             # Custom React hooks
├── utils/             # Utility functions
├── assets/            # Images, icons, and other static assets
└── styles/            # Global styles and CSS
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

### Contact Information
Update your personal information in `src/constants/data.js`:

```javascript
export const CONTACT_INFO = {
  email: 'your.email@domain.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  location: 'Your Location'
}
```

### Skills and Projects
Customize your skills and projects in the same file to reflect your experience.

## 🔮 Future Expansion

The architecture supports easy expansion:

- **Blog**: Add blog posts under `/blog` route
- **Detailed Projects**: Individual project pages under `/projects/:id`
- **Resume**: Interactive resume page
- **Admin Panel**: Content management system

## 📱 Responsive Design

The website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
  },
  accent: {
    // Accent colors
  }
}
```

### Animations
Custom animations are defined in:
- `tailwind.config.js` (Tailwind animations)
- `src/styles/index.css` (CSS animations)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!
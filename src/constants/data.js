export const SKILLS = {
  languages: [
    { name: 'C#', level: 90, icon: '🔷' },
    { name: 'Python', level: 90, icon: '🐍' },
    { name: 'C/C++', level: 85, icon: '🔧' },
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'JavaScript', level: 75, icon: '🟨' },
    { name: 'TypeScript', level: 70, icon: '🟦' },
    { name: 'SQL', level: 80, icon: '🗄️' },
    { name: 'Bash/Shell', level: 75, icon: '💻' },
  ],
  frameworks: [
    { name: '.NET Framework', level: 90, icon: '⚡' },
    { name: '.NET 8.0', level: 85, icon: '🚀' },
    { name: 'Spring Boot', level: 75, icon: '🍃' },
    { name: 'TensorFlow', level: 80, icon: '🧠' },
    { name: 'PyTorch', level: 75, icon: '🔥' },
    { name: 'React', level: 70, icon: '⚛️' },
    { name: 'Node.js', level: 65, icon: '🟢' },
  ],
  database: [
    { name: 'MS SQL', level: 85, icon: '🗄️' },
    { name: 'MySQL', level: 80, icon: '🐬' },
    { name: 'SQLite', level: 75, icon: '📊' },
    { name: 'PostgreSQL', level: 70, icon: '🐘' },
    { name: 'Redis', level: 80, icon: '🟥' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
  ],
  cloud: [
    { name: 'AWS', level: 80, icon: '☁️' },
    { name: 'GCP', level: 70, icon: '🌩️' },
    { name: 'Docker', level: 75, icon: '🐳' },
    { name: 'Jenkins', level: 70, icon: '🔄' },
    { name: 'HPC', level: 75, icon: '⚡' },
  ]
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Hyundai/KIA Diagnostic Application',
    description: 'Enhanced server-side components for automotive diagnostic applications using C# and .NET Framework, with AWS infrastructure migration.',
    tech: ['C#', '.NET Framework', 'MS SQL', 'AWS S3'],
    features: ['API Integration', 'High-throughput Batch Processing', 'Cloud Migration'],
    status: 'Production'
  },
  {
    id: 2,
    title: 'CT Image Processing Pipeline',
    description: 'Optimized medical imaging pipeline with bilateral filter parameter tuning using grid search and particle swarm optimization.',
    tech: ['Python', 'OpenCV', 'Scipy', 'HPC'],
    features: ['Parameter Optimization', 'Global Minima Achievement', 'Multi-GPU Computing'],
    status: 'Completed'
  },
  {
    id: 3,
    title: 'U-Net Heart Chamber Segmentation',
    description: 'Deep learning model for precise heart chamber segmentation with 20% reduction in overfitting through hyperparameter tuning.',
    tech: ['PyTorch', 'Python', 'SSH', 'Multi-GPU'],
    features: ['Deep Learning', 'Overfitting Reduction', 'Distributed Training'],
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Image Blender with Pyramids',
    description: 'High-fidelity image reconstruction using SciPy least-squares solver with Gaussian and Laplacian pyramids for seamless blending.',
    tech: ['Python', 'OpenCV', 'SciPy', 'NumPy'],
    features: ['Sparse Matrix Optimization', 'Memory Footprint Reduction', 'Seamless Blending'],
    status: 'Completed'
  },
  {
    id: 5,
    title: 'AI-Powered Engagement Scoring',
    description: 'Real-time engagement scoring system using AI to replace traditional survey methods, earning finalist recognition in AI Innovation Challenge.',
    tech: ['Python', 'Machine Learning', 'Computer Vision', 'Real-time Processing'],
    features: ['Custom Dataset', 'Live Model Deployment', 'Real-time Scoring'],
    status: 'Award Winner'
  },
  {
    id: 6,
    title: 'Cloud Removal with Diffusion Models',
    description: 'Cloud-removal pipeline integrating Segment Anything Model with diffusion-based inpainting for living-space detection.',
    tech: ['PyTorch', 'Diffusion Models', 'Segment Anything Model', 'Computer Vision'],
    features: ['IoU Threshold Tuning', 'Binary Cloud Masks', 'Image Inpainting'],
    status: 'Completed'
  }
]

export const CONTACT_INFO = {
  email: 'wheogus98@gmail.com',
  linkedin: 'https://www.linkedin.com/in/daehyuncho980113/',
  github: 'https://github.com/chris00234',
  location: 'Irvine, CA, United States',
}
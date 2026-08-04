import { Project, Skill, Education, Achievement, WorkExperience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexen: A platform for Startup Founders & Tech Enthusiasts',
    description:
      'Nexen is a dynamic platform connecting startup founders and tech enthusiasts, fostering innovation, collaboration, and growth.',
    techStack: ['React', 'Node.js (Express)', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/DVBharath2005/nexen.git',
    liveUrl: 'https://nexen-t3cu.onrender.com/',
    image: 'https://i.ibb.co/gZw8X5Y9/nexen-connecting-founders.png'
  },

  {
    id: '2',
    title: 'E-Commerce Platform with AI Recommendations',
    description:
      'A scalable e-commerce platform featuring AI-powered product recommendations, secure payments, inventory management, and advanced search capabilities.',
    techStack: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Stripe API',
      'TensorFlow',
      'Elasticsearch',
      'Docker',
      'AWS'
    ],
    githubUrl: 'https://github.com/bharath-ecommerce-ai',
    image: 'https://res.cloudinary.com/dtz0urit6/image/upload/q_auto:best,f_jpg/cloudinary-tools-uploads/h7lq60hr2ngfb8qhw3nq',
    details: [
      'Developed a full-featured e-commerce platform supporting thousands of users with high availability',
      'Integrated secure payment processing using Stripe and automated billing workflows',
      'Built an AI recommendation engine using collaborative filtering to improve product discovery'
    ]
  }
];


export const SKILLS: Skill[] = [
  { name: 'React', level: 70, category: 'Technical' },
  { name: 'PowerBI', level: 85, category: 'Technical' },
  { name: 'SQL', level: 80, category: 'Technical' },
  { name: 'Java', level: 75, category: 'Technical' },
  { name: 'Python', level: 70, category: 'Technical' },
  { name: 'Node.js', level: 75, category: 'Technical' },

  { name: 'Communication', level: 90, category: 'Soft' },
  { name: 'Problem Solving', level: 95, category: 'Soft' },
  { name: 'Public Speaking', level: 65, category: 'Soft' },
  { name: 'Teamwork', level: 85, category: 'Soft' },

  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Tools' }
];


export const EDUCATION: Education[] = [
  {
    institution: 'Parul University',
    degree: 'B-Tech CSE (BDA)',
    period: '2023-2027',
    gpa: '7.96/10',
    details: ['Current SGPA: 7.96']
  },

  {
    institution: "Rao's Junior College, Nandyal",
    degree: 'Intermediate (MPC), Board of Intermediate Education',
    period: '2021-2023',
    gpa: '83.5%',
    details: []
  },

  {
    institution: 'Sri Guru Raja English Medium High School, Nandyal',
    degree: 'SSC, Board of Secondary Education',
    period: '2020-2021',
    gpa: '10/10',
    details: []
  }
];


export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Mastering Power BI Report Design - Beginner to Advanced',
    issuer: 'Udemy',
    date: 'Mar 2026',
    description:
      'Comprehensive guide to Power BI report design, covering fundamentals to advanced techniques for impactful dashboards'
  },

  {
    title: 'Python Programming',
    issuer: 'HackerRank',
    date: 'Jan 2025',
    description:
      'Demonstrated proficiency in Python programming through solving coding challenges and exercises on HackerRank.'
  },

  {
    title: 'Tata Group - Cybersecurity Analyst Job Simulation',
    issuer: 'Forage',
    date: 'Feb 2025',
    description:
      'Completed a cybersecurity analyst simulation program focused on identifying and mitigating cyber threats.'
  }
];


export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Web Development Intern',
    company: 'MotionCut',
    period: 'March 2024 – April 2024',
    details: [
      'Developed responsive, mobile-first web pages using HTML5, CSS3, and JavaScript following modern ES6+ standards',
      'Optimized UI performance and implemented best practices for faster loading times and cross-browser compatibility',
      'Used Git for version control and collaborated with team members using agile workflows',
      'Resolved cross-browser compatibility issues to ensure consistent user experience across devices'
    ]
  },

  {
    title: 'Data Science Intern',
    company: 'Zhagaram Technologies',
    period: 'July 2025 – August 2025',
    details: [
      'Performed data cleaning, preprocessing, and feature engineering using Python (Pandas, NumPy) and SQL',
      'Conducted exploratory data analysis (EDA) to identify trends, correlations, and business insights',
      'Built and evaluated machine learning models using Scikit-learn for predictive analytics',
      'Created visualizations and dashboards using Matplotlib, Seaborn, and Power BI',
      'Optimized SQL queries to improve data retrieval efficiency',
      'Automated data processing workflows using Python scripts to reduce manual effort'
    ]
  }
];

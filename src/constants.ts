import { Project, Skill, Education, Achievement, WorkExperience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexen : A platform for startup Founders & Tech Enthusiasts ',
    description: 'Nexen is a dynamic platform connecting startup founders and tech enthusiasts, fostering innovation, collaboration, and growth.',
    techStack: ['React','NodeJs(Express)', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/DVBharath2005/nexen.git',
    liveUrl: 'https://nexen-t3cu.onrender.com/',
    image: 'https://i.ibb.co/gZw8X5Y9/nexen-connecting-founders.png'
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
  { name: 'Public speaking', level: 65, category: 'Soft' },
  { name: 'Teamwork', level: 85, category: 'Soft' },
  { name: 'Git/GitHub', level: 90, category: 'Tools' },
  { name: 'VS Code', level: 95, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Tools' }
];

export const EDUCATION: Education[] = [
  {
    institution: 'Parul University',
    degree: 'B-Tech CSE(BDA)',
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
    title: 'Mastering Power BI Report Design- Beginner to Advanced',
    issuer: 'Udemy',
    date: 'Mar 2026',
    description: 'Comprehensive guide to Power BI report design, covering fundamentals to advanced techniques for impactful dashboards'
  },
  {
    title: 'Python Programming',
    issuer: 'HackerRank',
    date: 'Jan 2025',
    description: 'Demonstrated proficiency in Python programming through solving various coding challenges and exercises on HackerRank.'
  },
  {
    title: 'Tata Group- Cybersecurity Analyst Job Simulation',
    issuer: 'Forage',
    date: 'Feb 2025',
    description: 'Completed a job simulation program focused on cybersecurity analysis, gaining practical experience in identifying and mitigating cyber threats.'
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Data Science Intern',
    company: 'Zhagaram Technologies',
    period: 'July 2025 – August 2025',
    details: [
      'Performed data cleaning, preprocessing, and feature engineering on large datasets using Python (Pandas, NumPy) and SQL',
      'Conducted exploratory data analysis (EDA) to identify trends, correlations, and actionable insights'
    ]
  }
];


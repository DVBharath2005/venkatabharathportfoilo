export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Technical' | 'Soft' | 'Tools';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


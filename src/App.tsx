import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Moon, 
  Sun, 
  Code, 
  Cpu, 
  Award, 
  BookOpen, 
  Send,
  ChevronRight,
  Terminal,
  User, 
  Briefcase,
  GraduationCap,
  Trophy,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { PROJECTS, SKILLS, EDUCATION, ACHIEVEMENTS } from './constants';
import { ContactFormData } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Portfolio.
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm <span className="text-primary">Venkata Bharath</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              A passionate Computer Science student and Full-Stack Developer building modern web experiences and intelligent systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View Projects <ChevronRight size={18} />
              </a>
              <a 
                href="/Resume.pdf" 
                download="Venkata-Bharath-Resume.pdf"
                className="btn-secondary flex items-center gap-2"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <a href="https://github.com/DVBharath2005" className="text-slate-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/diyyala-venkata-bharath-147460273/" className="text-slate-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="mailto:bharathdvenkata@gmail.com" className="text-slate-400 hover:text-primary transition-colors"><Mail size={24} /></a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-secondary p-1 overflow-hidden">
              <img 
                src="/Photo (1).png" 
                alt="Venkata Bharath Profile" 
                className="w-full h-full object-cover rounded-[1.4rem]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Education */}
      <section id="about" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary font-semibold mb-4">
            <User size={18} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Academic Journey</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I am currently pursuing my B.S. in Computer Science, where I've developed a strong foundation in algorithms, data structures, and software architecture. My passion lies at the intersection of design and technology.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Beyond the classroom, I actively participate in hackathons and contribute to open-source projects. I believe in continuous learning and am always exploring new frameworks and tools to improve my craft.
              </p>
            </div>
            
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    {idx !== EDUCATION.length - 1 && <div className="w-px h-full bg-slate-200 dark:bg-slate-800 my-2" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      <span>{edu.period}</span>
                      {edu.gpa && <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded">GPA: {edu.gpa}</span>}
                    </div>
                    <ul className="mt-3 space-y-1">
                      {edu.details?.map((detail, i) => (
                        <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary font-semibold mb-4">
            <Cpu size={18} />
            <span>My Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {(['Technical', 'Soft', 'Tools'] as const).map((category) => (
              <div key={category} className="card p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  {category === 'Technical' && <Terminal size={20} className="text-primary" />}
                  {category === 'Soft' && <MessageSquare size={20} className="text-primary" />}
                  {category === 'Tools' && <Briefcase size={20} className="text-primary" />}
                  {category}
                </h3>
                <div className="space-y-6">
                  {SKILLS.filter(s => s.category === category).map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary font-semibold mb-4">
            <Code size={18} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="card group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-900 dark:text-white hover:scale-110 transition-transform shadow-lg" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-900 dark:text-white hover:scale-110 transition-transform shadow-lg" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary font-semibold mb-4">
            <Trophy size={18} />
            <span>Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Achievements &amp; Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-6 flex items-start gap-6"
              >
                <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-2xl shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg">{ach.title}</h3>
                    <span className="text-xs text-slate-500 font-medium">{ach.date}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{ach.issuer}</p>
                  {ach.description && <p className="text-sm text-slate-600 dark:text-slate-400">{ach.description}</p>}
                  {ach.link && (
                    <a href={ach.link} className="inline-flex items-center gap-1 text-xs font-bold text-primary mt-3 hover:underline" target="_blank" rel="noopener noreferrer">
                      VIEW CREDENTIAL <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                <Mail size={18} />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something amazing together</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:bharathdvenkata@gmail.com" className="font-medium hover:text-primary transition-colors">bharathdvenkata@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary shadow-sm">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/diyyala-venkata-bharath-147460273/" className="font-medium hover:text-primary transition-colors">diyyala-venkata-bharath-147460273</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="text-center p-8 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                  >
                    <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 dark:text-green-300 mb-6">Thank you for your message. I'll get back to you soon!</p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {submitStatus !== 'success' && (
                <>
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3"
                    >
                      <AlertCircle size={20} className="text-red-500" />
                      <span className="text-sm text-red-800 dark:text-red-200">Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <input 
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-primary outline-none ${
                            errors.name 
                              ? 'border-red-300 bg-red-50 dark:bg-red-950/30 focus:ring-red-500' 
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <input 
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-primary outline-none ${
                            errors.email 
                              ? 'border-red-300 bg-red-50 dark:bg-red-950/30 focus:ring-red-500' 
                              : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <input 
                        name="subject"
                        type="text" 
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-primary outline-none ${
                          errors.subject 
                            ? 'border-red-300 bg-red-50 dark:bg-red-950/30 focus:ring-red-500' 
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <textarea 
                        name="message"
                        rows={4} 
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-primary outline-none resize-none ${
                          errors.message 
                            ? 'border-red-300 bg-red-50 dark:bg-red-950/30 focus:ring-red-500' 
                            : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                    </div>
                    <button 
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2026 Venkata Bharath. Built with React &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/DVBharath2005" className="text-slate-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/diyyala-venkata-bharath-147460273/" className="text-slate-400 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="mailto:bharathdvenkata@gmail.com" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}


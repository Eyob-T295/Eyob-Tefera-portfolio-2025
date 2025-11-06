import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projectsData: Project[] = [
  // Category: AI, Signal Processing & R&D
  {
    id: 1,
    category: 'AI, Signal Processing & R&D',
    title: 'Anti-Drone Detection and Identification System',
    role: 'R&D and System Integration Engineer',
    description: 'Developed and tested a real-time anti-drone platform capable of detecting, identifying, and alerting on unauthorized UAV activity. Integrated hardware RF sensors and backend modules for signal capture and analysis.',
    techStack: ['Python', 'Flask', 'RF Modules', 'GIS (Leaflet.js)', 'REST API', 'PostgreSQL'],
    contributions: [
      'Integrated RF detection devices with backend APIs.',
      'Performed hardware and software synchronization testing.',
      'Enhanced signal processing reliability.',
      'Researched live-stream video capture via drone frequency channels.',
    ],
    githubUrl: '#',
  },
  {
    id: 3,
    category: 'AI, Signal Processing & R&D',
    title: 'Signal Analysis and Research Database',
    role: 'System Designer & Developer',
    description: 'Created a centralized signal research platform for storing, analyzing, and classifying unknown signals based on modulation type, parameters, and spectrum visualization.',
    techStack: ['Django', 'PostgreSQL', 'Bootstrap', 'Chart.js'],
    contributions: [
      'Developed database structure for signal attributes.',
      'Implemented search and visualization features.',
      'Enabled collaboration for multiple researchers.',
    ],
  },
  {
    id: 4,
    category: 'AI, Signal Processing & R&D',
    title: 'Drone Frequency Stream Capture Research',
    role: 'Research Assistant / Frequency Analysis Engineer',
    description: 'Conducted exploratory research on methods of capturing and analyzing live video streams transmitted over drone communication frequencies. Focused on signal decoding, frequency spectrum capture, and protocol study.',
    techStack: ['Python', 'SDR', 'GNURadio'],
    contributions: [
      'Collected and decoded frequency data using SDR hardware.',
      'Analyzed video transmission formats from drone modules.',
      'Produced internal documentation for system integration.',
    ],
  },
  {
    id: 8,
    category: 'AI, Signal Processing & R&D',
    title: 'AI Signal Classifier',
    role: 'AI Researcher / ML Engineer',
    description: 'Developed a machine learning model to classify different types of radio signals (AM, FM, PSK, QAM) using spectrum data.',
    techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib'],
    contributions: [
      'Trained CNN on signal spectrogram datasets.',
      'Achieved 92% accuracy in modulation classification.',
      'Visualized results in real-time dashboard.',
    ],
    githubUrl: '#',
  },
  {
    id: 11,
    category: 'AI, Signal Processing & R&D',
    title: 'Live Audio Packet Streaming with Kafka',
    role: 'Backend Engineer',
    description: 'Developed a C++ Kafka producer/consumer system to broadcast live audio signals from remote locations using VHF radios, ensuring real-time data transmission and processing.',
    techStack: ['C++', 'Apache Kafka', 'VHF Radio', 'Networking', 'Real-time Systems'],
    contributions: [
      'Engineered a low-latency audio packet transmission pipeline.',
      'Integrated C++ application with radio hardware interfaces.',
      'Ensured robust data streaming and error handling.',
    ],
  },
  // Category: Web & System Development
  {
    id: 13,
    category: 'Web & System Development',
    title: 'YOYO Driving License Exam App',
    role: 'Desktop Application Developer',
    description: 'A desktop application built with Python & PyQt5 for training and assessing driving license exams. Users select license type, enter student info, take a timed 50-question exam, and get results.',
    techStack: ['Python', 'PyQt5', 'CSV'],
    contributions: [
        'Home menu with Amharic & English UI',
        'License category selection with validation',
        'Student info collection',
        'Timed exam (50 questions, 50 minutes)',
        'Result calculation & display'
    ],
    githubUrl: '#',
  },
  {
    id: 14,
    category: 'Web & System Development',
    title: 'Driving School Management System',
    role: 'Full Stack Developer',
    description: 'A full-featured web application designed to automate driving school operations — from student registration to car management, class scheduling, and fee tracking.',
    techStack: ['PHP', 'JavaScript', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
    contributions: [
        'Student Management: Register, update, and monitor student progress.',
        'Car & Driver Management: Assign cars and instructors for practical sessions.',
        'Scheduling: Manage both theory and practical training sessions.',
        'Fee Management: Track payments and generate financial summaries.',
        'Reporting: View performance and attendance reports.',
        'Responsive Web UI for cross-device accessibility.'
    ],
    liveUrl: '#',
  },
  {
    id: 12,
    category: 'Web & System Development',
    title: 'Personal Portfolio Website',
    role: 'Frontend Developer & Designer',
    description: 'Designed and developed this personal portfolio website to showcase my projects, skills, and professional experience. Built with modern web technologies, focusing on a clean, responsive design and a great user experience.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    contributions: [
      'Implemented an interactive and animated UI.',
      'Ensured a fully responsive design for all screen sizes.',
      'Integrated smooth scrolling and scroll-triggered animations.',
      'Structured a clear and categorized project showcase.',
    ],
    githubUrl: '#',
  },
  {
    id: 2,
    category: 'Web & System Development',
    title: 'Project Management System (PMS)',
    role: 'Backend Developer & System Analyst',
    description: 'Designed and enhanced a multi-role project and performance management system for institutional use. Implemented modules for plan tracking, task management, and data visualization for directors and staff.',
    techStack: ['PHP', 'MySQL', 'Simcify Framework', 'JavaScript'],
    contributions: [
      'Fixed text encoding issues and improved data handling.',
      'Developed user visibility controls for managerial dashboards.',
      'Enhanced project reporting and monitoring modules.',
      'Integrated secure login and performance analytics.',
    ],
    liveUrl: '#',
  },
  {
    id: 5,
    category: 'Web & System Development',
    title: 'User Analytics and Performance Dashboard',
    role: 'Backend Developer',
    description: 'Built a performance tracking and analytics dashboard that monitors user engagement, project contribution, and task efficiency. Designed for multi-role access (Admin, Coordinator, Team Leader).',
    techStack: ['PHP', 'MySQL', 'Chart.js', 'Bootstrap'],
    contributions: [
      'Real-time project progress visualization.',
      'Role-based data access and reporting.',
      'Activity tracking and KPI evaluation.',
    ],
  },
  {
    id: 6,
    category: 'Web & System Development',
    title: 'AI-Powered Overtime Management System',
    role: 'Full Stack Developer',
    description: 'Developed a smart overtime tracking platform with AI-driven insights to monitor employee work hours, generate automated reports, and detect irregularities.',
    techStack: ['PHP', 'MySQL', 'AI-based Data Insights'],
    contributions: [
      'AI-based anomaly detection for overtime patterns.',
      'SMS and email notifications for approvals.',
      'Admin dashboard with summary analytics.',
    ],
  },
    {
    id: 9,
    category: 'Web & System Development',
    title: 'Production PMS Deployment on Linux Server',
    role: 'DevOps & System Administrator',
    description: 'Led the end-to-end deployment of a PHP-based Project Management System onto a production Ubuntu server. This involved configuring the full LEMP stack from scratch, with a strong focus on performance, security, and scalability.',
    techStack: ['Nginx', 'PHP-FPM', 'MariaDB', 'Ubuntu Server', 'Systemd', 'UFW', 'Fail2Ban'],
    contributions: [
      'Configured Nginx as a high-performance reverse proxy for the PHP application.',
      'Hardened the Ubuntu server with UFW firewall rules, SSH security enhancements, and Fail2Ban for brute-force protection.',
      'Set up and secured the MariaDB database, ensuring it was only accessible locally.',
      'Troubleshot and resolved numerous deployment challenges to achieve a stable, production-ready environment.',
      'Documented the entire deployment process, including backup and update procedures.'
    ],
  },
  // Category: Mobile & Client Projects
  {
    id: 7,
    category: 'Mobile & Client Projects',
    title: 'BlueNight Injera Ordering App',
    role: 'Mobile App Designer & System Analyst',
    description: 'Developed a mobile application for a local Injera business to digitize customer orders and manage production scheduling. The app supports customer ordering, admin management, and sales tracking.',
    techStack: ['React Native', 'Firebase', 'Node.js'],
    contributions: [
      'Order management and tracking.',
      'Firebase real-time updates.',
      'Simple, user-friendly UI for customers and admins.',
    ],
    githubUrl: '#',
  },
  {
    id: 10,
    category: 'Mobile & Client Projects',
    title: 'Asthma Health Tracker',
    role: 'App Developer (Personal Project)',
    description: 'Created a simple mobile health tracker to monitor asthma symptoms, medicine intake, and environmental triggers, with personalized reminders.',
    techStack: ['React', 'Firebase', 'Chart.js'],
    contributions: [
        'Symptom and medicine intake logging.',
        'Environmental trigger tracking.',
        'Personalized reminders and notifications.'
    ],
  },
];

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const groupedProjects = projectsData.reduce((acc, project) => {
    (acc[project.category] = acc[project.category] || []).push(project);
    return acc;
  }, {} as Record<string, Project[]>);


  return (
    <section id="projects" ref={ref} className="py-20 md:py-32">
        <h2 className={`section-heading text-3xl font-bold text-slate-100 mb-12 flex items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Featured Projects
        </h2>
        
        <div className="space-y-16">
          {Object.entries(groupedProjects).map(([category, projectsInCategory]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-slate-300 mb-8 pl-4 border-l-4 border-[#64ffda]">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsInCategory.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Projects;
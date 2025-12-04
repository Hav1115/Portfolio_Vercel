export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // Path to your project image
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  demoLabel?: string; // Optional text for the demo link
}



export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'MasterMind Game',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'A concurrent Java-based multiplayer Mastermind engine supporting 16 players with synchronized state, deadlock-free threading, and reliable client to server communication.',
    image: '/images/MasterMind.png', // Replace with your image
    tags: ['Java', 'Swing', 'MultiThreading'],
    githubUrl: 'https://github.com/Hav1115/mastermindgui',
    liveUrl: 'https://youtu.be/LBt1MC9nXUo',
    demoLabel: 'Demo Vid',
  },
  {
    id: 'project-2',
    title: 'Tag-Along iOS App',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'A real-time location-sharing app built with SwiftUI and a FastAPI backend, featuring secure JWT/Firebase auth, caching, and scalable API performance.',
    image: '/images/Tag.png', // Replace with your image
    tags: ['Swift', 'FastAPI', 'MongoDB', 'Firebase'],
    githubUrl: 'https://github.com/Hav1115/tag-along-Swift-UI-',
    liveUrl: 'https://youtube.com/shorts/itST8F-ImMA?feature=share',
    demoLabel: 'Demo Vid',
  },
  {
    id: 'project-3',
    title: 'QuickComms',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'A workflow automation platform that transforms unstructured chat logs into structured task flows using React, validated REST APIs, and real-time parsing.',
    image: '/images/QuickComms.png', // Replace with your image
    tags: ['JavaScript', 'React', 'Mermaid.js', 'Figma'],
    githubUrl: 'https://github.com/Hav1115/QuickComms-Group-',
    liveUrl: 'https://youtu.be/8HvKged1Qtg',
    demoLabel: 'Demo Vid',
  },
  {
    id: 'project-7',
    title: 'PawBuddy',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'Designed a smart pet-adoption app that helps users find the perfect pet match using dynamic filters, a modern full-stack architecture, and an AI-supported recommendation workflow.',
    image: '/images/petb.png', // Replace with your image
    tags: ['Node.js', 'React', 'Express'],
    githubUrl: 'https://github.com/Hav1115/Pawbuddybackend',
    liveUrl: 'https://youtu.be/OB-IyFoC3BE',
    demoLabel: 'Demo Vid',
  },
  {
    id: 'project-8',
    title: 'LongHorn Network',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'A multithreaded Java simulation that uses Gale–Shapley and Dijkstra’s algorithms to match students and compute optimal referral paths on a dynamically built weighted social graph.',
    image: '/images/petb.png', // Replace with your image
    tags: ['Java', 'Graphs', 'Multithreading'],
    githubUrl: 'https://github.com/Hav1115/LonghornNetwork',
  },
  {
    id: 'project-4',
    title: 'Space Invaders Game',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'A custom Space Invaders game built on an MSPM0 ARM microcontroller using C, ADC/DAC interrupts, and real-time input handling.',
    image: '/images/SpaceInvaders.png', // Replace with your image
    tags: ['C/C++', 'Assembly', 'ARM Cortex-M', 'KiCAD'],
    githubUrl: 'https://github.com/Hav1115/Space-Invaders',
  },
  {
    id: 'project-5',
    title: 'Electronic Piano',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'An electronic piano built on an MSPM0 microcontroller using C, DAC-based audio generation, and interrupt-driven key input.',
    image: '/images/Piano.png', // Replace with your image
    tags: ['C/C++', 'Assembly', 'ARM Cortex-M'],
    githubUrl: 'https://github.com/Hav1115/Electronic-Piano-',
  },
  {
    id: 'project-6',
    title: 'Traffic Signal',
    subtitle: 'CLICK HERE TO VISIT',
    description: 'Created a fully functional traffic light controller on an ARM Cortex board, using interrupts and state logic to manage accurate and reliable signal patterns in real time.',
    image: '/images/Traffic.png', // Replace with your image
    tags: ['C/C++', 'Assembly', 'ARM Cortex-M'],
    githubUrl: 'https://github.com/Hav1115/Code-for-Traffic-Signal',
  },
  

];

export const experiences = [
  {
    id: 'exp-1',
    company: 'University of Texas at Austin',
    logo: '/images/UT.png', // Replace with your logo
    role: 'Teaching Assistant (Honors)',
    period: 'May 2025 -- Present',
    description: 'Teaching Assistant for 100+ students, supporting Java, algorithms, and debugging through hands-on guidance and technical resources.',
  },
  {
    id: 'exp-2',
    company: 'Convergent Innovation Team',
    logo: '/images/Convergent.png', // Replace with your logo
    role: 'Software and Technical Developer',
    period: 'Sep 2024 -- Present',
    description: 'Developing innovative ideas and building a JavaScript Chrome extension that automatically adds contextual facts to keywords in Google Docs notes.',
  },
  {
    id: 'exp-3',
    company: 'Garver',
    logo: '/images/Garver.png', // Replace with your logo
    role: 'Engineering Research Intern',
    period: 'Sep 2024 -- May 2025',
    description: 'Built a Raspberry Pi–powered Smart Desk Pad with a Node.js backend and React dashboard to stream and visualize real-time classroom telemetry.',
  },
  {
    id: 'exp-4',
    company: 'iCode',
    logo: '/images/iCode.png', // Replace with your logo
    role: 'Embedded and Coding Intern',
    period: 'May 2024 -- Aug 2024',
    description: 'Developed coding and robotics curriculum supported by SQL-based data management systems for tracking student progress.',
  },
];

export const techStack = [
  { name: 'JavaScript', icon: '/images/tech/javascript.svg' },
  { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
  { name: 'HTML5', icon: '/images/tech/html5.svg' },
  { name: 'CSS3', icon: '/images/tech/css3.svg' },
  { name: 'React', icon: '/images/tech/react.svg' },
];

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/havish-komatreddy',
  github: 'https://github.com/Hav1115',
  email: 'hk27356@utexas.edu',
};


import React from 'react';

export interface Project {
  id: number;
  category: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  contributions: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface Award {
  title: string;
  issuer: string;
  year: number;
}

export interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}
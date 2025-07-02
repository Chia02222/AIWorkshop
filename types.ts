import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  image: string;
  url?: string;
}

export interface AgendaItem {
  time: string;
  activity: string;
  details: string[];
  icon: ReactNode;
}
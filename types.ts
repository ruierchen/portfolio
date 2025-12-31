
export enum Category {
  WORK = 'Work Experience',
  PROJECT = 'Project',
  LIFE = 'Life Updates',
  SKILLS = 'Tech Stack'
}

export interface Post {
  id: string;
  title: string;
  category: Category;
  date: string;
  content: string;
  tags: string[];
  image?: string;
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface BlogPost {
  id: string;
  date: string;
  title: string;
  summary: string;
  tag: string;
  githubLink?: string;
}

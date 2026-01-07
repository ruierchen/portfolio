
import { Category, Post, Experience, BlogPost } from './types';
import profileImg from './assets/profile.jpg';
import readImg from './assets/read.jpg';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b0",
    date: "2026-01-06",
    title: "Full-Stack Developing",
    summary: "Trying out full-stack development with a focus on Kotlin. Building several projects to solidify my understanding of both frontend and backend technologies.",
    tag: "Project"
  },
  {
    id: "b1",
    date: "2025-05-20",
    title: "Onboarding at RBC T&O",
    summary: "Started my journey at RBC! Diving deep into the Global Security data lake and learning the nuances of medallion architecture.",
    tag: "Work Log",
    githubLink: "https://github.com/ruierchen"
  },
  {
    id: "b2",
    date: "2025-04-10",
    title: "BERT Pipeline Optimization",
    summary: "Successfully reduced training latency for the personality prediction model by 40% using custom CUDA kernels and batching strategies.",
    tag: "Dev Log"
  },
  {
    id: "b3",
    date: "2025-02-15",
    title: "ViT Implementation Complete",
    summary: "The Vision Transformer is finally hitting 98% on MNIST. No CNNs involved, pure attention mechanisms. Documentation pushed to repo.",
    tag: "Research"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Royal Bank of Canada (RBC)",
    role: "Data Engineering Intern - T&O Global Security",
    period: "05/2025 - 08/2025",
    description: [
      "Engineered ingestion pipelines (Python) for 15TB+/day data migration.",
      "Built end-to-end ETL workflows in AWS/Azure Databricks using PySpark and medallion architecture.",
      "Delivered unified analytical views and dashboards for data-driven decisions.",
      "Automated CI/CD lineage tracking and schema validation for platform reliability."
    ]
  },
  {
    company: "Histone Intelligent Commercial System (Hisense)",
    role: "Software Engineer Intern",
    period: "06/2024 - 08/2024",
    description: [
      "Developed REST APIs using Node.js and Java, integrating authentication controls.",
      "Optimized SQL queries, improving large-scale retrieval speed by 30%.",
      "Designed UI/UX and implemented responsive frontend features using Bootstrap.",
      "Contributed to secure coding and automated testing in production environments."
    ]
  },
  {
    company: "Innocuous AI",
    role: "Website Development Intern",
    period: "01/2024 - 05/2024",
    description: [
      "Developed and maintained company website in an Agile environment.",
      "Implemented interactive features like scrolling video and word cloud visualizations.",
      "Optimized UI components for large-screen presentations and built AI glossary templates."
    ]
  }
];

export interface DetailedProject extends Post {
  contributions: string[];
  techStack: string[];
}

export const PROJECTS: DetailedProject[] = [
  {
    id: "proj-1",
    title: "Distributed Data Platform",
    category: Category.PROJECT,
    date: "2025-09",
    content: "Large-Scale Distributed Data Processing Platform built with Apache Spark. Optimizes shuffle and memory usage for massive datasets.",
    contributions: [
      "Built Spark pipelines using RDD/DataFrame APIs.",
      "Implemented fault-tolerant batch processing and distributed graph algorithms.",
      "Debugged execution plans to resolve data skew and performance bottlenecks."
    ],
    techStack: ["Java", "Scala", "Apache Spark", "Distributed Systems"],
    tags: ["Data", "Big Data", "Spark"],
    image: profileImg
  },
  {
    id: "proj-2",
    title: "LLM Personality Prediction",
    category: Category.PROJECT,
    date: "2025-04",
    content: "Predicting Big Five personality traits from social media posts using fine-tuned BERT transformers.",
    contributions: [
      "Developed an LLM-based pipeline using the myPersonality dataset.",
      "Compared Ridge Regression, SVM, and BERT models for predictability.",
      "Performed GPU-accelerated preprocessing and tokenization using PyTorch."
    ],
    techStack: ["Python", "NLP", "BERT", "PyTorch", "GPU Computing"],
    tags: ["AI", "NLP", "PyTorch"],
    image: readImg
  },
  {
    id: "proj-3",
    title: "Vision Transformer (ViT)",
    category: Category.PROJECT,
    date: "2025-02",
    content: "Implementation of a Vision Transformer from scratch for MNIST classification, achieving >98% accuracy.",
    contributions: [
      "Implemented multi-head self-attention and patch embedding from scratch.",
      "Trained model using PyTorch Lightning with layer normalization.",
      "Visualized attention maps and patch embeddings for model interpretability."
    ],
    techStack: ["PyTorch Lightning", "Computer Vision", "Deep Learning"],
    tags: ["CV", "Transformers", "DL"],
    image: profileImg
  }
];

export const SKILLS = [
  { name: "Python / PySpark", level: 95 },
  { name: "C++ / C#", level: 90 },
  { name: "Java / Scala", level: 88 },
  { name: "TypeScript / React", level: 92 },
  { name: "PyTorch / ML", level: 85 },
  { name: "SQL / NoSQL", level: 90 },
  { name: "AWS / Azure", level: 82 },
  { name: "Unity3D / VR", level: 75 }
];

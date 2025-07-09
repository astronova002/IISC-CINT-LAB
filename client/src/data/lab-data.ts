export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  category: 'faculty' | 'phd' | 'masters' | 'alumni';
  image: string;
  email?: string;
  linkedin?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  citations: number;
  impactFactor?: number;
  doi?: string;
  pdfUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  type: 'award' | 'news' | 'collaboration' | 'achievement';
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export const chiefScientist = {
  name: "Dr. Rajesh Kumar",
  title: "Director & Chief Scientist",
  qualification: "Ph.D. in Computer Science, IIT Delhi | M.Tech in Nanotechnology, IISc",
  bio: "Dr. Kumar leads CINT Lab with over 15 years of experience in computational intelligence and nanotechnology research. His work focuses on developing novel algorithms for nanoscale simulations and AI-driven materials discovery.",
  extendedBio: "He has published over 120 peer-reviewed papers and holds 8 patents in the field. His research has been recognized with multiple national and international awards.",
  email: "chief@cintlab.iisc.ac.in",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
  researchInterests: [
    "Machine Learning for Materials Science",
    "Quantum Computing Applications",
    "Nanoscale Device Simulation",
    "Bio-inspired Computing"
  ]
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    title: "Associate Professor",
    specialization: "Quantum Computing & AI",
    category: "faculty",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "priya@cintlab.iisc.ac.in"
  },
  {
    id: "2",
    name: "Dr. Arjun Patel",
    title: "Assistant Professor",
    specialization: "Nanomaterials & Devices",
    category: "faculty",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "arjun@cintlab.iisc.ac.in"
  },
  {
    id: "3",
    name: "Sneha Gupta",
    title: "PhD Student (3rd Year)",
    specialization: "Machine Learning for Materials",
    category: "phd",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "sneha@cintlab.iisc.ac.in"
  },
  {
    id: "4",
    name: "Vikram Singh",
    title: "PhD Student (2nd Year)",
    specialization: "Quantum Algorithms",
    category: "phd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "vikram@cintlab.iisc.ac.in"
  },
  {
    id: "5",
    name: "Ananya Reddy",
    title: "M.Tech Student (1st Year)",
    specialization: "Computational Biology",
    category: "masters",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "ananya@cintlab.iisc.ac.in"
  },
  {
    id: "6",
    name: "Rahul Kumar",
    title: "M.Tech Student (2nd Year)",
    specialization: "Nanoelectronics",
    category: "masters",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "rahul@cintlab.iisc.ac.in"
  },
  {
    id: "7",
    name: "Dr. Sanjay Mehta",
    title: "Senior Researcher, Google AI",
    specialization: "PhD 2019 - Quantum ML",
    category: "alumni",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "sanjay@google.com"
  },
  {
    id: "8",
    name: "Dr. Kavitha Nair",
    title: "Principal Scientist, Intel Labs",
    specialization: "PhD 2020 - Nanodevices",
    category: "alumni",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    email: "kavitha@intel.com"
  }
];

export const publications: Publication[] = [
  {
    id: "1",
    title: "Quantum-Enhanced Machine Learning for Nanomaterial Property Prediction",
    authors: "R. Kumar, P. Sharma, S. Gupta, V. Singh",
    journal: "Nature Nanotechnology, Vol. 19, Issue 3, pp. 245-258 (2024)",
    year: "2024",
    citations: 45,
    impactFactor: 38.1
  },
  {
    id: "2",
    title: "Bio-inspired Neural Networks for Nanodevice Simulation",
    authors: "A. Patel, R. Kumar, S. Mehta, K. Nair",
    journal: "IEEE Transactions on Nanotechnology, Vol. 23, Issue 2, pp. 112-125 (2024)",
    year: "2024",
    citations: 28,
    impactFactor: 2.8
  },
  {
    id: "3",
    title: "Computational Framework for Sustainable Energy Materials Design",
    authors: "P. Sharma, R. Kumar, V. Singh, A. Reddy",
    journal: "Advanced Energy Materials, Vol. 13, Issue 8, pp. 2201456 (2023)",
    year: "2023",
    citations: 67,
    impactFactor: 29.4
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Driven Materials Discovery",
    description: "Developing machine learning models to predict properties of novel nanomaterials for energy storage applications.",
    tags: ["Machine Learning", "Materials Science"],
    icon: "project-diagram"
  },
  {
    id: "2",
    title: "Quantum Computing Algorithms",
    description: "Research on quantum algorithms for optimization problems in nanotechnology and drug discovery.",
    tags: ["Quantum Computing", "Optimization"],
    icon: "microchip"
  },
  {
    id: "3",
    title: "Bio-inspired Nanodevices",
    description: "Creating nanoscale devices inspired by biological systems for medical and environmental applications.",
    tags: ["Bio-engineering", "Nanodevices"],
    icon: "dna"
  },
  {
    id: "4",
    title: "Sustainable Energy Solutions",
    description: "Computational design of nanomaterials for next-generation solar cells and energy storage systems.",
    tags: ["Energy", "Sustainability"],
    icon: "leaf"
  }
];

export const news: NewsItem[] = [
  {
    id: "1",
    title: "CINT Lab Receives NSF Grant for Quantum Computing Research",
    summary: "Our lab has been awarded a $2.5M grant to develop novel quantum algorithms for materials discovery over the next three years.",
    date: "March 15, 2024",
    type: "award"
  },
  {
    id: "2",
    title: "PhD Student Wins Best Paper Award at NanoTech Conference",
    summary: "Sneha Gupta's research on AI-driven materials discovery was recognized with the Outstanding Paper Award at the International NanoTech Conference.",
    date: "March 8, 2024",
    type: "achievement"
  },
  {
    id: "3",
    title: "New Collaboration with MIT and Stanford",
    summary: "CINT Lab announces strategic partnerships with leading international institutions for joint research initiatives in quantum nanotechnology.",
    date: "February 28, 2024",
    type: "collaboration"
  }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Quantum AI Symposium 2024",
    description: "Join us for a symposium featuring keynote speakers from industry and academia discussing the future of quantum artificial intelligence.",
    date: "APR 22",
    time: "2:00 PM - 4:00 PM",
    location: "IISc Main Auditorium"
  },
  {
    id: "2",
    title: "Lab Open House for Prospective Students",
    description: "Explore our research facilities and meet current students and faculty. Learn about our admission process and research opportunities.",
    date: "MAY 05",
    time: "10:00 AM - 12:00 PM",
    location: "CINT Lab Building"
  },
  {
    id: "3",
    title: "International Conference on Computational Nanotechnology",
    description: "Three-day conference featuring the latest research in computational approaches to nanotechnology and materials science.",
    date: "MAY 18",
    time: "All Day",
    location: "IISc Convention Center"
  }
];

export const stats = {
  totalPapers: "125+",
  totalCitations: "2,400+",
  hIndex: "28",
  patents: "8"
};

export const contact = {
  email: "contact@cintlab.iisc.ac.in",
  phone: "+91-80-2293-XXXX",
  address: "CINT Lab, IISc Campus\nBangalore, Karnataka 560012"
};

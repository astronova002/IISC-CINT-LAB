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
  image?: string; // Optional image URL
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
  image: string; // Added image field
  icon?: string;
  status: 'ongoing' | 'completed'; // Added status field
}

export const chiefScientist = {
  name: "Dr. S. N. Omkar",
  title: "Chief Research Scientist",
  qualification: "Ph.D. in Aerospace Engineering, IISc | M.Sc in Aerospace Engineering, IISc | B.E. in Mechanical Engineering, Bangalore University",
  bio: "Dr. S.N. Omkar is a Chief Research Scientist in the Guidance & Control area of the Department of Aerospace Engineering at Indian Institute of Science, Bangalore. He leads three specialized research laboratories: Computational Intelligence Lab, Unmanned Aerial Vehicles Lab, and Biomechanics Lab.",
  extendedBio: "With over 164+ research publications and 4,193+ citations, Dr. Omkar has mentored 200+ interns and introduced 3 courses at IISc. He serves as Research Advisor to Tata Consultancy Services and holds memberships in the Indian Society for Remote Sensing, American Helicopter Society, and is a Founder Member of the Automatic Control and Dynamic Optimization Society (ACDOS). His pioneering work includes violence detection using drone surveillance, satellite image processing for urban growth analysis, and biomechanics applications in aerospace. He was featured by BBC for his work on recognizing violence in crowds using drone-computing.",
  email: "omkar@iisc.ac.in",
  image: "/sn omkar.jpg",
  researchInterests: [
    "Helicopter Dynamics",
    "Satellite Image Processing", 
    "Biomechanics",
    "Uninhabited Air Vehicles (UAV)",
    "Autonomous Navigation of UAVs",
    "Composite Design Optimization",
    "Structural Health Monitoring"
  ]
};

// Real team members data - currently only Dr. Omkar
export const teamMembers: TeamMember[] = [
  {
    id: "omkar",
    name: "Dr. S. N. Omkar",
    title: "Chief Research Scientist",
    specialization: "Computational Intelligence, UAV Systems, Biomechanics",
    category: "faculty",
    image: "/sn omkar.jpg",
    email: "omkar@iisc.ac.in"
  }
];

export const publications: Publication[] = [
  {
    id: "1",
    title: "Violence Detection in Crowded Areas Using Convolutional Neural Networks and Drone Surveillance",
    authors: "S.N. Omkar, J. Senthilnath, V. Mani, P.G. Diwakar",
    journal: "IEEE Transactions on Aerospace and Electronic Systems, Vol. 58, Issue 4, pp. 2847-2860 (2022)",
    year: "2022",
    citations: 89,
    impactFactor: 4.4
  },
  {
    id: "2",
    title: "Multi-temporal Analysis of Urban Growth Using Satellite Imagery and Machine Learning",
    authors: "S.N. Omkar, J. Senthilnath, V. Mani",
    journal: "Remote Sensing of Environment, Vol. 264, pp. 112-125 (2021)",
    year: "2021",
    citations: 156,
    impactFactor: 13.85
  },
  {
    id: "3",
    title: "Autonomous Navigation of UAVs in Forest Environments Using Nature-Inspired Algorithms",
    authors: "S.N. Omkar, P.G. Diwakar, J. Senthilnath",
    journal: "Journal of Aerospace Engineering, Vol. 34, Issue 2, pp. 04020104 (2021)",
    year: "2021",
    citations: 124,
    impactFactor: 2.4
  },
  {
    id: "4",
    title: "Road Extraction from High-Resolution Satellite Images Using Deep Learning Networks",
    authors: "S.N. Omkar, V. Mani, J. Senthilnath",
    journal: "IEEE Geoscience and Remote Sensing Letters, Vol. 17, Issue 8, pp. 1456-1460 (2020)",
    year: "2020",
    citations: 203,
    impactFactor: 4.8
  },
  {
    id: "5",
    title: "Biomechanical Analysis of Cricket Bowling Techniques Using Computer Vision",
    authors: "S.N. Omkar, P.G. Diwakar, V. Mani",
    journal: "Sports Engineering, Vol. 23, Issue 1, pp. 1-15 (2020)",
    year: "2020",
    citations: 67,
    impactFactor: 1.8
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Violence Detection Using Drone Surveillance",
    description: "Real-time drone surveillance systems for identifying violent individuals in public areas using deep learning networks. Featured by BBC for crowd violence recognition.",
    tags: ["UAV", "Deep Learning", "Surveillance"],
    image: "/building-placeholder.jpg",
    icon: "project-diagram",
    status: 'ongoing'
  },
  {
    id: "2",
    title: "Satellite Image Processing for Urban Growth",
    description: "Satellite image analysis for urban growth and planning.",
    tags: ["Remote Sensing", "Machine Learning", "Urban Planning"],
    image: "/building-placeholder.jpg",
    icon: "microchip",
    status: 'ongoing'
  },
  {
    id: "3",
    title: "Autonomous UAV Navigation Systems",
    description: "High-speed autonomous UAV navigation including Road Identification, Following & Tracking (RIFT) systems, obstacle avoidance in forest environments using nature-inspired optimization.",
    tags: ["UAV", "Autonomous Navigation", "Optimization"],
    image: "/building-placeholder.jpg",
    icon: "dna",
    status: 'completed'
  },
  {
    id: "4",
    title: "Biomechanics for Aerospace Applications",
    description: "Time-frequency analysis of biomechanical signals during rhythmic exercises, sports analytics through keypoint detection, and yoga research applications in aerospace human factors.",
    tags: ["Biomechanics", "Aerospace", "Sports Analytics"],
    image: "/building-placeholder.jpg",
    icon: "leaf",
    status: 'ongoing'
  }
];

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Dr. S.N. Omkar Featured by BBC for Violence Detection Research",
    summary: "Dr. Omkar's groundbreaking work on recognizing violence in crowds using drone-computing was featured in a BBC interview, highlighting the real-world applications of UAV surveillance systems.",
    date: "November 15, 2024",
    type: "news",
    image: "/drone-surveillance.jpg"
  },
  {
    id: "2",
    title: "International Day of Yoga Celebrations Led by Dr. Omkar",
    summary: "Dr. Omkar, with 4+ decades of yoga expertise, led the International Day of Yoga celebrations at IISc, conducting Yoga Kshema sessions for the campus community.",
    date: "June 21, 2024",
    type: "achievement",
    image: "/yoga-celebration.jpg"
  },
  {
    id: "3",
    title: "New Research on Urban Growth Analysis Published",
    summary: "Our lab's latest research on multi-temporal satellite image analysis for Bangalore region using Landsat data over 39-year periods has been published in leading remote sensing journals.",
    date: "April 10, 2024",
    type: "news",
    image: "/satellite-analysis.jpg"
  },
  {
    id: "4",
    title: "Collaborative Research with TCS and Industry Partners",
    summary: "Strategic partnerships with Tata Consultancy Services and other industry leaders for advanced UAV technology development and applications.",
    date: "March 15, 2024",
    type: "collaboration",
    image: "/collaboration.jpg"
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
  totalPapers: "164+",
  totalCitations: "4,193+",
  hIndex: "35",
  trainedInterns: "200+"
};

export const contact = {
  email: "omkar@iisc.ac.in",
  phone: "+91-80-2293-2735",
  address: "Department of Aerospace Engineering\nRoom AE123, IISc Campus\nBangalore, Karnataka 560012",
  website: "https://sites.google.com/site/compintellab/",
  irinsProfile: "https://iiscprofiles.irins.org/profile/3996"
};

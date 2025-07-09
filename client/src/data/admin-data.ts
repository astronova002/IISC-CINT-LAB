// Admin-editable data for team members and news
// This file can be easily modified by administrators to update content

export interface AdminTeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  category: 'faculty' | 'phd' | 'masters' | 'alumni' | 'postdoc' | 'research_staff';
  image: string;
  email?: string;
  linkedin?: string;
  researchgate?: string;
  isActive: boolean;
  joinDate: string;
  bio?: string;
}

export interface AdminNewsItem {
  id: string;
  title: string;
  summary: string;
  content?: string;
  date: string;
  type: 'award' | 'news' | 'collaboration' | 'achievement' | 'publication';
  isPublished: boolean;
  author?: string;
  imageUrl?: string;
  externalLink?: string;
}

// Team Members Data - Easily editable by admin
export const adminTeamMembers: AdminTeamMember[] = [
  {
    id: "omkar",
    name: "Dr. S. N. Omkar",
    title: "Chief Research Scientist",
    specialization: "Computational Intelligence, UAV Systems, Biomechanics",
    category: "faculty",
    image: "https://aero.iisc.ac.in/wp-content/uploads/elementor/thumbs/SN-Omkar-qtlqf0ienj915ldm6bcsijyq3rkucv7pmu385w70rk.jpg",
    email: "omkar@iisc.ac.in",
    linkedin: "https://in.linkedin.com/in/dr-s-n-omkar-803550270",
    researchgate: "https://www.researchgate.net/profile/Omkar-S-N",
    isActive: true,
    joinDate: "2000-01-01",
    bio: "Leading researcher in computational intelligence and aerospace applications."
  },
  {
    id: "faculty_1",
    name: "Dr. Research Collaborator",
    title: "Associate Professor",
    specialization: "Machine Learning Applications",
    category: "faculty",
    image: "https://via.placeholder.com/150",
    email: "collaborator@iisc.ac.in",
    isActive: true,
    joinDate: "2015-08-01"
  },
  {
    id: "phd_1",
    name: "PhD Student 1",
    title: "Doctoral Researcher",
    specialization: "Computer Vision and UAV Systems",
    category: "phd",
    image: "https://via.placeholder.com/150",
    email: "phd1@iisc.ac.in",
    isActive: true,
    joinDate: "2022-08-01"
  },
  {
    id: "phd_2",
    name: "PhD Student 2",
    title: "Doctoral Researcher",
    specialization: "Satellite Image Processing",
    category: "phd",
    image: "https://via.placeholder.com/150",
    email: "phd2@iisc.ac.in",
    isActive: true,
    joinDate: "2021-08-01"
  },
  {
    id: "mtech_1",
    name: "M.Tech Student 1",
    title: "Master's Researcher",
    specialization: "Biomechanics Analysis",
    category: "masters",
    image: "https://via.placeholder.com/150",
    email: "mtech1@iisc.ac.in",
    isActive: true,
    joinDate: "2024-08-01"
  },
  {
    id: "alumni_1",
    name: "Dr. Alumni Researcher",
    title: "Former PhD Student",
    specialization: "Now at Google Research",
    category: "alumni",
    image: "https://via.placeholder.com/150",
    email: "alumni1@gmail.com",
    isActive: true,
    joinDate: "2018-08-01"
  }
];

// News Items Data - Easily editable by admin
export const adminNewsItems: AdminNewsItem[] = [
  {
    id: "news_1",
    title: "BBC Features Violence Detection Research",
    summary: "Dr. Omkar's groundbreaking research on crowd violence detection using drone surveillance featured by BBC",
    content: "The research on violence detection using convolutional neural networks and drone surveillance has gained international attention with BBC featuring the innovative approach to public safety.",
    date: "2024-12-15",
    type: "achievement",
    isPublished: true,
    author: "Dr. S.N. Omkar",
    externalLink: "https://sites.google.com/site/compintellab/"
  },
  {
    id: "news_2",
    title: "New Industry Collaboration Announced",
    summary: "Partnership with leading aerospace company for advanced UAV technology development",
    content: "The Computational Intelligence Laboratory has entered into a strategic partnership for developing next-generation UAV systems.",
    date: "2024-11-28",
    type: "collaboration",
    isPublished: true
  },
  {
    id: "news_3",
    title: "Research Paper Accepted at IEEE Conference",
    summary: "Latest work on satellite image processing accepted for presentation at international conference",
    date: "2024-11-15",
    type: "publication",
    isPublished: true
  },
  {
    id: "news_4",
    title: "Lab Receives Equipment Grant",
    summary: "New funding secured for advanced computational infrastructure upgrade",
    date: "2024-10-20",
    type: "award",
    isPublished: true
  },
  {
    id: "news_5",
    title: "TCS Research Advisory Role",
    summary: "Dr. Omkar continues strategic advisory role with Tata Consultancy Services",
    date: "2024-09-30",
    type: "collaboration",
    isPublished: true
  },
  {
    id: "news_6",
    title: "Citation Milestone Achieved",
    summary: "Laboratory's research publications cross 4,200 citations mark",
    date: "2024-09-10",
    type: "achievement",
    isPublished: true
  }
];

// Helper functions for admin operations
export const getActiveTeamMembers = (category?: AdminTeamMember['category']) => {
  const active = adminTeamMembers.filter(member => member.isActive);
  return category ? active.filter(member => member.category === category) : active;
};

export const getPublishedNews = (limit?: number) => {
  const published = adminNewsItems
    .filter(item => item.isPublished)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return limit ? published.slice(0, limit) : published;
};

export const getNewsByType = (type: AdminNewsItem['type']) => {
  return adminNewsItems.filter(item => item.type === type && item.isPublished);
};

// Admin configuration
export const adminConfig = {
  maxTeamMembers: 50,
  maxNewsItems: 100,
  allowedImageFormats: ['jpg', 'jpeg', 'png', 'webp'],
  teamCategories: ['faculty', 'phd', 'masters', 'alumni', 'postdoc', 'research_staff'],
  newsTypes: ['award', 'news', 'collaboration', 'achievement', 'publication']
};
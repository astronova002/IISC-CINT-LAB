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

// Team Members Data - Real data for CINT Lab
export const adminTeamMembers: AdminTeamMember[] = [
  {
    id: "omkar",
    name: "Dr. S. N. Omkar",
    title: "Chief Research Scientist",
    specialization: "Computational Intelligence, UAV Systems, Biomechanics",
    category: "faculty",
    image: "/sn omkar.jpg",
    email: "omkar@iisc.ac.in",
    linkedin: "https://in.linkedin.com/in/dr-s-n-omkar-803550270",
    researchgate: "https://www.researchgate.net/profile/Omkar-S-N",
    isActive: true,
    joinDate: "2000-01-01",
    bio: "Leading researcher in computational intelligence and aerospace applications. Dr. S.N. Omkar is a Chief Research Scientist in the Guidance & Control area of the Department of Aerospace Engineering at Indian Institute of Science, Bangalore. He leads three specialized research laboratories: Computational Intelligence Lab, Unmanned Aerial Vehicles Lab, and Biomechanics Lab."
  }
];

// News Items Data - Real data for CINT Lab
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
    title: "TCS Research Advisory Role",
    summary: "Dr. Omkar continues strategic advisory role with Tata Consultancy Services",
    date: "2024-09-30",
    type: "collaboration",
    isPublished: true,
    author: "Dr. S.N. Omkar"
  },
  {
    id: "news_3",
    title: "Citation Milestone Achieved",
    summary: "Laboratory's research publications cross 4,200 citations mark",
    date: "2024-09-10",
    type: "achievement",
    isPublished: true,
    author: "Dr. S.N. Omkar"
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
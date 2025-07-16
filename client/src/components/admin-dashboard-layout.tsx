import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Briefcase, 
  BookOpen, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Plus,
  Eye,
  TrendingUp,
  Calendar,
  Activity,
  BarChart3,
  Globe,
  Shield,
  Database,
  Palette,
  Bell
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

const navigationItems = [
  { 
    id: 'dashboard', 
    label: 'Dashboard', 
    icon: LayoutDashboard, 
    color: 'text-blue-600',
    description: 'Overview and quick actions'
  },
  { 
    id: 'analytics', 
    label: 'Analytics', 
    icon: BarChart3, 
    color: 'text-purple-600',
    description: 'Website performance insights'
  },
  { 
    id: 'news', 
    label: 'News Management', 
    icon: FileText, 
    color: 'text-green-600',
    description: 'Manage news and announcements'
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: Briefcase, 
    color: 'text-orange-600',
    description: 'Research projects and initiatives'
  },
  { 
    id: 'team', 
    label: 'Team Members', 
    icon: Users, 
    color: 'text-indigo-600',
    description: 'Manage team profiles'
  },
  { 
    id: 'publications', 
    label: 'Publications', 
    icon: BookOpen, 
    color: 'text-red-600',
    description: 'Research publications and citations'
  },
  { 
    id: 'settings', 
    label: 'Settings', 
    icon: Settings, 
    color: 'text-gray-600',
    description: 'Website configuration'
  },
];

export function AdminDashboardLayout({ 
  children, 
  currentSection, 
  onSectionChange, 
  onLogout 
}: AdminDashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [stats, setStats] = useState({
    news: 0,
    projects: 0,
    team: 0,
    publications: 0
  });
  const { toast } = useToast();

  // Fetch dashboard stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const authHeader = token ? { Authorization: `Bearer ${token}` } : undefined;
        const [newsRes, projectsRes, teamRes, publicationsRes] = await Promise.all([
          fetch('/api/news', authHeader ? { headers: authHeader } : undefined),
          fetch('/api/research', authHeader ? { headers: authHeader } : undefined),
          fetch('/api/team', authHeader ? { headers: authHeader } : undefined),
          fetch('/api/publications', authHeader ? { headers: authHeader } : undefined)
        ]);

        const stats = {
          news: newsRes.ok ? (await newsRes.json()).length : 0,
          projects: projectsRes.ok ? (await projectsRes.json()).length : 0,
          team: teamRes.ok ? (await teamRes.json()).length : 0,
          publications: publicationsRes.ok ? (await publicationsRes.json()).length : 0
        };

        setStats(stats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const getCurrentSectionData = () => {
    return navigationItems.find(item => item.id === currentSection) || navigationItems[0];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CINT Admin</h1>
                <p className="text-xs text-gray-500">Management Portal</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-start space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-r-2 border-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
                  }`}
                >
                  <Icon className={`h-5 w-5 mt-0.5 ${item.color}`} />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium">{item.label}</span>
                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t bg-gray-50">
            <div className="mb-3 p-3 bg-white rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">System Status</span>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <div className="flex justify-between">
                  <span>Database</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>API Server</span>
                  <span className="text-green-600">Online</span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={onLogout}
              className="w-full flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72 min-h-screen flex flex-col">
        {/* Topbar */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {getCurrentSectionData().label}
                </h2>
                <p className="text-sm text-gray-500">
                  {getCurrentSectionData().description}
                </p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/', '_blank')}
              >
                <Eye className="h-4 w-4 mr-2" />
                View Site
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/news', '_blank')}
              >
                <FileText className="h-4 w-4 mr-2" />
                View News
              </Button>
              {/* Team Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    View Team
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => window.open('/people/interns', '_blank')}>Interns</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open('/people/researchers', '_blank')}>Researchers</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open('/people/alumni', '_blank')}>Alumni</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('/publications', '_blank')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                View Publications
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Briefcase className="h-4 w-4 mr-2" />
                    View Research
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => window.open('/research/projects', '_blank')}>Projects</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open('/research/facilities', '_blank')}>Facilities</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open('/research/reports', '_blank')}>Reports</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSectionChange('analytics')}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Overview */}
        {currentSection === 'dashboard' && (
          <div className="p-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin!</h1>
              <p className="text-gray-600">Here's what's happening with your website today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total News</CardTitle>
                  <FileText className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.news}</div>
                  <p className="text-xs text-muted-foreground">
                    Published news articles
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  <Briefcase className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.projects}</div>
                  <p className="text-xs text-muted-foreground">
                    Ongoing research projects
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                  <Users className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.team}</div>
                  <p className="text-xs text-muted-foreground">
                    Active team members
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Publications</CardTitle>
                  <BookOpen className="h-4 w-4 text-red-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.publications}</div>
                  <p className="text-xs text-muted-foreground">
                    Research publications
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions and Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5 text-blue-600" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onSectionChange('news')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Add News Article
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onSectionChange('projects')}
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Add New Project
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onSectionChange('team')}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onSectionChange('publications')}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Add Publication
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-green-600" />
                    <span>Recent Activity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New news article added</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Project status updated</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Team member profile updated</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    <span>System Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API Server</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">File Storage</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SSL Certificate</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Valid
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span>Website Navigation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => window.open('/', '_blank')}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Home Page
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => window.open('/news', '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    News Page
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Users className="h-4 w-4 mr-2" />
                        Team Page
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => window.open('/people/interns', '_blank')}>Interns</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => window.open('/people/researchers', '_blank')}>Researchers</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => window.open('/people/alumni', '_blank')}>Alumni</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Research Page
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => window.open('/research/projects', '_blank')}>Projects</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => window.open('/research/facilities', '_blank')}>Facilities</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => window.open('/research/reports', '_blank')}>Reports</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Contact Page
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Section Content */}
        {currentSection !== 'dashboard' && (
          <div className="p-6 flex flex-col min-h-[calc(100vh-4rem)]">
            {children}
          </div>
        )}
      </div>
    </div>
  );
} 
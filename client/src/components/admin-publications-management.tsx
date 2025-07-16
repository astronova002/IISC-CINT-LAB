import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  BookOpen, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Calendar,
  ExternalLink,
  Users,
  FileText,
  Award,
  Globe,
  Download,
  Eye,
  X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  doi?: string;
  abstract?: string;
  keywords?: string[];
  type: string;
  impactFactor?: number;
  citations?: number;
  pdfUrl?: string;
  isPublished: boolean;
}

export function AdminPublicationsManagement() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterYear, setFilterYear] = useState('all');
  const [formData, setFormData] = useState({
    title: '',
    authors: [] as string[],
    journal: '',
    conference: '',
    year: new Date().getFullYear(),
    doi: '',
    abstract: '',
    keywords: [] as string[],
    type: 'journal',
    impactFactor: 0,
    citations: 0,
    pdfUrl: '',
    isPublished: true
  });
  const [newAuthor, setNewAuthor] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const { toast } = useToast();

  // Generate year options for filter
  const yearOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= currentYear - 20; year--) {
      years.push(year);
    }
    return years;
  }, []);

  // Fetch publications from API
  const fetchPublications = async () => {
    try {
      const response = await fetch('/api/publications');
      if (response.ok) {
        const data = await response.json();
        setPublications(data);
      } else {
        throw new Error('Failed to fetch publications');
      }
    } catch (error) {
      console.error('Error fetching publications:', error);
      toast({
        title: "Error",
        description: "Failed to fetch publications",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const url = editingPublication ? `/api/publications/${editingPublication.id}` : '/api/publications';
      const method = editingPublication ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: editingPublication ? "Publication updated successfully" : "Publication added successfully",
        });
        setIsDialogOpen(false);
        resetForm();
        fetchPublications();
      } else {
        throw new Error('Failed to save publication');
      }
    } catch (error) {
      console.error('Error saving publication:', error);
      toast({
        title: "Error",
        description: "Failed to save publication",
        variant: "destructive",
      });
    }
  };

  // Handle publication deletion
  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this publication?')) return;
    
    try {
      const response = await fetch(`/api/publications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Publication deleted successfully",
        });
        fetchPublications();
      } else {
        throw new Error('Failed to delete publication');
      }
    } catch (error) {
      console.error('Error deleting publication:', error);
      toast({
        title: "Error",
        description: "Failed to delete publication",
        variant: "destructive",
      });
    }
  };

  // Handle edit
  const handleEdit = (publication: Publication) => {
    setEditingPublication(publication);
    setFormData({
      title: publication.title,
      authors: publication.authors,
      journal: publication.journal || '',
      conference: publication.conference || '',
      year: publication.year,
      doi: publication.doi || '',
      abstract: publication.abstract || '',
      keywords: publication.keywords || [],
      type: publication.type,
      impactFactor: publication.impactFactor || 0,
      citations: publication.citations || 0,
      pdfUrl: publication.pdfUrl || '',
      isPublished: publication.isPublished
    });
    setIsDialogOpen(true);
  };

  // Reset form
  const resetForm = () => {
    setEditingPublication(null);
    setFormData({
      title: '',
      authors: [],
      journal: '',
      conference: '',
      year: new Date().getFullYear(),
      doi: '',
      abstract: '',
      keywords: [],
      type: 'journal',
      impactFactor: 0,
      citations: 0,
      pdfUrl: '',
      isPublished: true
    });
    setNewAuthor('');
    setNewKeyword('');
  };

  // Handle dialog close
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  // Add author
  const addAuthor = () => {
    if (newAuthor.trim() && !formData.authors.includes(newAuthor.trim())) {
      setFormData({
        ...formData,
        authors: [...formData.authors, newAuthor.trim()]
      });
      setNewAuthor('');
    }
  };

  // Remove author
  const removeAuthor = (index: number) => {
    setFormData({
      ...formData,
      authors: formData.authors.filter((_, i) => i !== index)
    });
  };

  // Add keyword
  const addKeyword = () => {
    if (newKeyword.trim() && !formData.keywords.includes(newKeyword.trim())) {
      setFormData({
        ...formData,
        keywords: [...formData.keywords, newKeyword.trim()]
      });
      setNewKeyword('');
    }
  };

  // Remove keyword
  const removeKeyword = (index: number) => {
    setFormData({
      ...formData,
      keywords: formData.keywords.filter((_, i) => i !== index)
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal': return 'bg-blue-100 text-blue-800';
      case 'conference': return 'bg-green-100 text-green-800';
      case 'book': return 'bg-purple-100 text-purple-800';
      case 'patent': return 'bg-orange-100 text-orange-800';
      case 'report': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal': return <FileText className="h-4 w-4" />;
      case 'conference': return <Users className="h-4 w-4" />;
      case 'book': return <BookOpen className="h-4 w-4" />;
      case 'patent': return <Award className="h-4 w-4" />;
      case 'report': return <FileText className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  // Filter publications based on search and filters
  const filteredPublications = publications.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         (item.journal && item.journal.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesYear = filterYear === 'all' || item.year.toString() === filterYear;
    return matchesSearch && matchesType && matchesYear;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Publications Management</h2>
          <p className="text-gray-600">Manage research publications and citations</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => window.open('/research', '_blank')}
          >
            <Eye className="h-4 w-4 mr-2" />
            View Research Page
          </Button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="h-4 w-4 mr-2" />
                Add Publication
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingPublication ? 'Edit Publication' : 'Add Publication'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Form content */}
                <div className="space-y-2">
                  <Label htmlFor="title">Publication Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter publication title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="authors">Authors</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.authors.map((author, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                        <span>{author}</span>
                        <button
                          type="button"
                          onClick={() => removeAuthor(index)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="Add an author"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addAuthor();
                        }
                      }}
                    />
                    <Button type="button" variant="outline" onClick={addAuthor}>
                      Add
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="journal">Journal/Conference</Label>
                    <Input
                      id="journal"
                      value={formData.journal}
                      onChange={(e) => setFormData({ ...formData, journal: e.target.value })}
                      placeholder="Journal of..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="conference">Conference Name</Label>
                    <Input
                      id="conference"
                      value={formData.conference}
                      onChange={(e) => setFormData({ ...formData, conference: e.target.value })}
                      placeholder="Conference name..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="doi">DOI</Label>
                    <Input
                      id="doi"
                      value={formData.doi}
                      onChange={(e) => setFormData({ ...formData, doi: e.target.value })}
                      placeholder="10.1000/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pdfUrl">PDF URL</Label>
                    <Input
                      id="pdfUrl"
                      value={formData.pdfUrl}
                      onChange={(e) => setFormData({ ...formData, pdfUrl: e.target.value })}
                      placeholder="https://example.com/paper.pdf"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="2024"
                      min="1900"
                      max="2030"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="impactFactor">Impact Factor</Label>
                    <Input
                      id="impactFactor"
                      type="number"
                      step="0.01"
                      value={formData.impactFactor}
                      onChange={(e) => setFormData({ ...formData, impactFactor: e.target.value })}
                      placeholder="0.00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="citations">Citations</Label>
                    <Input
                      id="citations"
                      type="number"
                      value={formData.citations}
                      onChange={(e) => setFormData({ ...formData, citations: e.target.value })}
                      placeholder="0"
                      min="0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="abstract">Abstract</Label>
                  <Textarea
                    id="abstract"
                    value={formData.abstract}
                    onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    placeholder="Enter publication abstract"
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                        <span>{keyword}</span>
                        <button
                          type="button"
                          onClick={() => removeKeyword(index)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                      placeholder="Add a keyword"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addKeyword();
                        }
                      }}
                    />
                    <Button type="button" variant="outline" onClick={addKeyword}>
                      Add
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingPublication ? 'Update' : 'Create'} Publication
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search publications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterYear} onValueChange={setFilterYear}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Publications List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading publications...</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredPublications.map((publication) => (
            <Card key={publication.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        {publication.year}
                      </Badge>
                      {publication.impactFactor && (
                        <Badge variant="outline">
                          IF: {publication.impactFactor}
                        </Badge>
                      )}
                      {publication.citations > 0 && (
                        <Badge variant="outline">
                          {publication.citations} citations
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
                    {publication.authors && publication.authors.length > 0 && (
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                      </p>
                    )}
                    {publication.journal && (
                      <p className="text-gray-600 mb-2">
                        <span className="font-medium">Journal:</span> {publication.journal}
                      </p>
                    )}
                    {publication.abstract && (
                      <p className="text-gray-600 mb-3 line-clamp-2">{publication.abstract}</p>
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {publication.doi && (
                        <a 
                          href={`https://doi.org/${publication.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>DOI</span>
                        </a>
                      )}
                      {publication.pdfUrl && (
                        <a 
                          href={publication.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
                        >
                          <FileText className="h-4 w-4" />
                          <span>PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(publication)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(publication.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!isLoading && filteredPublications.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No publications found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || filterYear !== 'all' 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Get started by adding your first publication.'
              }
            </p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Publication
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 
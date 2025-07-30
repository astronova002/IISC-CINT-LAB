from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import News, Project, TeamMember, Publication, Feedback, Setting, Photo
from .serializers import (
    NewsSerializer, ProjectSerializer, TeamMemberSerializer,
    PublicationSerializer, FeedbackSerializer, SettingSerializer, PhotoSerializer
)

# Create your views here.

def home_view(request):
    """
    Simple home view that returns basic API information
    """
    if request.method == 'GET':
        return JsonResponse({
            'message': 'CINT Lab Admin API',
            'admin_url': '/admin/',
            'api_endpoints': {
                'news': '/api/news/',
                'projects': '/api/projects/',
                'team_members': '/api/team-members/',
                'publications': '/api/publications/',
                'feedback': '/api/feedback/',
                'settings': '/api/settings/',
                'photos': '/api/photos/',
            },
            'documentation': 'Visit /admin/ for the admin interface'
        })

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all().order_by('-published_at')
    serializer_class = NewsSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['type', 'is_published']
    search_fields = ['title', 'summary', 'content']
    ordering_fields = ['published_at', 'title']

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-start_date')
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['is_active']
    search_fields = ['title', 'description']
    ordering_fields = ['start_date', 'end_date', 'title']

class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all().order_by('name')
    serializer_class = TeamMemberSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['name', 'title', 'specialization']
    ordering_fields = ['name', 'category']

class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all().order_by('-year')
    serializer_class = PublicationSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['year', 'journal']
    search_fields = ['title', 'authors', 'journal']
    ordering_fields = ['year', 'title']

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all().order_by('-created_at')
    serializer_class = FeedbackSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'email', 'message']
    ordering_fields = ['created_at', 'name']

class SettingViewSet(viewsets.ModelViewSet):
    queryset = Setting.objects.all().order_by('key')
    serializer_class = SettingSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['key', 'value']
    ordering_fields = ['key']

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

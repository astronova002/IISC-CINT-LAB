from django.contrib import admin
from .models import News, Project, TeamMember, Publication, Feedback, Setting, Photo

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title', 'type', 'is_published', 'published_at']
    list_filter = ['type', 'is_published', 'published_at']
    search_fields = ['title', 'summary', 'content']
    list_editable = ['is_published']
    ordering = ['-published_at']
    
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'start_date', 'end_date', 'is_active']
    list_filter = ['is_active', 'start_date', 'end_date']
    search_fields = ['title', 'description']
    list_editable = ['is_active']
    ordering = ['-start_date']

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'category', 'email']
    list_filter = ['category']
    search_fields = ['name', 'title', 'specialization', 'email']
    ordering = ['name']

@admin.register(Publication)
class PublicationAdmin(admin.ModelAdmin):
    list_display = ['title', 'authors', 'journal', 'year']
    list_filter = ['year', 'journal']
    search_fields = ['title', 'authors', 'journal']
    ordering = ['-year']

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
    list_filter = ['created_at']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at']
    ordering = ['-created_at']

@admin.register(Setting)
class SettingAdmin(admin.ModelAdmin):
    list_display = ['key', 'value']
    search_fields = ['key', 'value']
    ordering = ['key']

@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ['title', 'description']
    search_fields = ['title', 'description']
    ordering = ['title']

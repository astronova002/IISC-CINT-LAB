"""
Sample data script for CINT Lab Django Admin Portal
Run this to populate the database with sample content
"""

import os
import sys
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cint_admin.settings')
django.setup()

from core.models import News, Project, TeamMember, Publication, Setting
from datetime import date, datetime

def create_sample_data():
    print("🌱 Creating sample data for CINT Lab...")
    
    # Sample News
    news_items = [
        {
            'title': 'New Research Paper Published in Nature',
            'summary': 'Our team has published groundbreaking research on computational intelligence.',
            'content': 'Detailed content about the research findings and methodology...',
            'type': 'publication',
            'is_published': True
        },
        {
            'title': 'CINT Lab Wins Best Innovation Award',
            'summary': 'Recognition for outstanding contribution to AI research.',
            'content': 'Details about the award ceremony and recognition...',
            'type': 'award',
            'is_published': True
        },
        {
            'title': 'International Collaboration with MIT',
            'summary': 'New partnership established for joint research initiatives.',
            'content': 'Information about the collaboration scope and objectives...',
            'type': 'collaboration',
            'is_published': True
        }
    ]
    
    for item in news_items:
        news, created = News.objects.get_or_create(
            title=item['title'],
            defaults=item
        )
        if created:
            print(f"✅ Created news: {news.title}")
    
    # Sample Projects
    projects = [
        {
            'title': 'AI-Powered Medical Diagnosis',
            'description': 'Developing AI models for early disease detection and diagnosis.',
            'start_date': date(2024, 1, 15),
            'end_date': date(2025, 12, 31),
            'is_active': True
        },
        {
            'title': 'Natural Language Processing Framework',
            'description': 'Building advanced NLP tools for Indian languages.',
            'start_date': date(2023, 6, 1),
            'end_date': date(2024, 12, 31),
            'is_active': True
        },
        {
            'title': 'Computer Vision for Agriculture',
            'description': 'Applying computer vision techniques to improve crop monitoring.',
            'start_date': date(2024, 3, 1),
            'is_active': True
        }
    ]
    
    for item in projects:
        project, created = Project.objects.get_or_create(
            title=item['title'],
            defaults=item
        )
        if created:
            print(f"✅ Created project: {project.title}")
    
    # Sample Team Members
    team_members = [
        {
            'name': 'Dr. Rajesh Kumar',
            'title': 'Principal Investigator',
            'email': 'rajesh.kumar@iisc.ac.in',
            'specialization': 'Machine Learning, Deep Learning',
            'category': 'faculty'
        },
        {
            'name': 'Dr. Priya Sharma',
            'title': 'Assistant Professor',
            'email': 'priya.sharma@iisc.ac.in',
            'specialization': 'Computer Vision, Pattern Recognition',
            'category': 'faculty'
        },
        {
            'name': 'Arjun Patel',
            'title': 'PhD Scholar',
            'email': 'arjun.patel@iisc.ac.in',
            'specialization': 'Natural Language Processing',
            'category': 'phd'
        },
        {
            'name': 'Sneha Reddy',
            'title': 'Research Associate',
            'email': 'sneha.reddy@iisc.ac.in',
            'specialization': 'AI Ethics, Explainable AI',
            'category': 'staff'
        }
    ]
    
    for item in team_members:
        member, created = TeamMember.objects.get_or_create(
            name=item['name'],
            defaults=item
        )
        if created:
            print(f"✅ Created team member: {member.name}")
    
    # Sample Publications
    publications = [
        {
            'title': 'Deep Learning Approaches for Medical Image Analysis',
            'authors': 'R. Kumar, P. Sharma, A. Patel',
            'journal': 'IEEE Transactions on Medical Imaging',
            'year': 2024,
            'link': 'https://ieeexplore.ieee.org/document/example'
        },
        {
            'title': 'Multilingual NLP Framework for Indian Languages',
            'authors': 'A. Patel, S. Reddy, R. Kumar',
            'journal': 'ACM Transactions on Asian Language Processing',
            'year': 2023,
            'link': 'https://dl.acm.org/doi/example'
        },
        {
            'title': 'Computer Vision Applications in Precision Agriculture',
            'authors': 'P. Sharma, R. Kumar',
            'journal': 'Computers and Electronics in Agriculture',
            'year': 2024,
            'link': 'https://www.sciencedirect.com/science/article/example'
        }
    ]
    
    for item in publications:
        pub, created = Publication.objects.get_or_create(
            title=item['title'],
            defaults=item
        )
        if created:
            print(f"✅ Created publication: {pub.title}")
    
    # Sample Settings
    settings = [
        {'key': 'lab_name', 'value': 'Computational Intelligence and Networks Lab (CINT)'},
        {'key': 'lab_address', 'value': 'Indian Institute of Science, Bangalore'},
        {'key': 'contact_email', 'value': 'cint@iisc.ac.in'},
        {'key': 'phone', 'value': '+91-80-2293-2456'},
        {'key': 'established_year', 'value': '2018'},
        {'key': 'lab_description', 'value': 'A premier research lab focusing on computational intelligence, machine learning, and network analysis.'}
    ]
    
    for item in settings:
        setting, created = Setting.objects.get_or_create(
            key=item['key'],
            defaults={'value': item['value']}
        )
        if created:
            print(f"✅ Created setting: {setting.key}")
    
    print("\n🎉 Sample data creation completed!")
    print("🌐 You can now access the admin panel at: http://127.0.0.1:8000/admin/")
    print("📊 API endpoints available at: http://127.0.0.1:8000/api/")

if __name__ == "__main__":
    create_sample_data()

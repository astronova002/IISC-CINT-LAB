from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=200)
    summary = models.TextField(blank=True)
    content = models.TextField(blank=True)
    image_url = models.URLField(blank=True)
    type = models.CharField(max_length=50, default='news')
    is_published = models.BooleanField(default=True)
    published_at = models.DateTimeField(auto_now_add=True)
    external_link = models.URLField(blank=True)

    def __str__(self):
        return self.title
        return self.title

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    specialization = models.CharField(max_length=200, blank=True)
    image = models.URLField(blank=True)
    category = models.CharField(max_length=50, default='faculty')

    def __str__(self):
        return self.name

class Publication(models.Model):
    title = models.CharField(max_length=200)
    authors = models.CharField(max_length=300)
    journal = models.CharField(max_length=200, blank=True)
    year = models.PositiveIntegerField()
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"

class Setting(models.Model):
    key = models.CharField(max_length=100, unique=True)
    value = models.TextField()

    def __str__(self):
        return self.key

class Photo(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='photos/')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title

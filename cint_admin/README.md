# CINT Lab Django Admin Portal

This is the Django admin portal for managing the CINT Lab website content.

## Features

- **News Management**: Create, edit, and publish news articles, awards, collaborations, etc.
- **Project Management**: Manage lab projects with start/end dates and status
- **Team Member Management**: Add and manage team member profiles
- **Publication Management**: Maintain publication records
- **Feedback Management**: View and manage user feedback
- **Settings Management**: Configure site settings
- **Photo Gallery**: Manage photo uploads

## Setup

### Prerequisites
- Python 3.8+
- SQLite (default) or PostgreSQL

### Installation

1. Navigate to the admin directory:
```bash
cd cint_admin
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Apply migrations:
```bash
python manage.py migrate
```

4. Create a superuser:
```bash
python manage.py createsuperuser
```

5. Run the development server:
```bash
python manage.py runserver 8000
```

### Access

- **Admin Panel**: http://127.0.0.1:8000/admin/
- **API Endpoints**: http://127.0.0.1:8000/api/

## API Endpoints

The following REST API endpoints are available:

- `/api/news/` - News articles
- `/api/projects/` - Lab projects
- `/api/team-members/` - Team member profiles
- `/api/publications/` - Publication records
- `/api/feedback/` - User feedback
- `/api/settings/` - Site settings
- `/api/photos/` - Photo gallery

### API Features

- Full CRUD operations
- Filtering by various fields
- Search functionality
- Ordering/sorting
- Pagination

### Example API Usage

```bash
# Get all published news
GET /api/news/?is_published=true

# Search news by title
GET /api/news/?search=research

# Get team members by category
GET /api/team-members/?category=faculty

# Get publications by year
GET /api/publications/?year=2024
```

## Admin Interface Features

- Enhanced list views with filtering and search
- Bulk operations
- Rich text editing
- Image upload support
- User-friendly forms

## Configuration

- **Database**: Configured in `settings.py` (default: SQLite)
- **CORS**: Configured to allow frontend access
- **Media Files**: Photos uploaded to `photos/` directory
- **Static Files**: Collected in `static/` directory

## Production Deployment

For production deployment:

1. Set `DEBUG = False` in settings.py
2. Configure proper database (PostgreSQL recommended)
3. Set up proper static file serving
4. Configure media file serving
5. Use a production WSGI server (gunicorn, uWSGI)

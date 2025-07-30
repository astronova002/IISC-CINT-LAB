from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    NewsViewSet, ProjectViewSet, TeamMemberViewSet, PublicationViewSet,
    FeedbackViewSet, SettingViewSet, PhotoViewSet
)

router = DefaultRouter()
router.register(r'news', NewsViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'team-members', TeamMemberViewSet)
router.register(r'publications', PublicationViewSet)
router.register(r'feedback', FeedbackViewSet)
router.register(r'settings', SettingViewSet)
router.register(r'photos', PhotoViewSet)

urlpatterns = [
    path('', include(router.urls)),
] 
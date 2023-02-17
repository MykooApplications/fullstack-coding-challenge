from os import lseek
from re import M
from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet, AllComplaintsView, UserProfileView

router = routers.SimpleRouter()
router.register(r'allComplaints', AllComplaintsView, basename='allComplaints')
# router.register(r'', , basename='')
# router.register(r'', AllComplaintsView, basename='allComplaints')
router.register(r'', ComplaintViewSet, basename='complaint')
router.register(r'openCases', OpenCasesViewSet, basename='openCases')
router.register(r'closedCases', ClosedCasesViewSet, basename='closedCases')
router.register(r'topComplaints', TopComplaintTypeViewSet, basename='topComplaints')
router.register(r'user', UserProfileView, basename='user')
urlpatterns = [
]
urlpatterns += router.urls
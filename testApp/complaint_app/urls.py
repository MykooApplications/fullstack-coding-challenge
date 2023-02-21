from os import lseek
from re import M
from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet

router = routers.SimpleRouter()
router.register(r'^$', ComplaintViewSet, base_name='complaints')
router.register(r'', ComplaintViewSet, base_name='complaint')
router.register(r'./openCases/', OpenCasesViewSet, basename='openCases')
router.register(r'./closedCases', ClosedCasesViewSet, basename='closedCases')
router.register(r'./topComplaints', TopComplaintTypeViewSet, basename='topComplaints')
urlpatterns = [
]
urlpatterns += router.urls
from http.client import HTTPResponse
from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from rest_framework import generics

# Create your views here.

class AllComplaintsView(generics.ListAPIView):
  queryset = Complaint.objects.all()
  serializer_class = ComplaintSerializer


class ComplaintViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  def list(self, request):
    # Get all complaints from the user's district
    # Filter complaints from user's disctict ID
    return Response()

class OpenCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  def list(self, request):
    # Get only the open complaints from the user's district
    # Filter complaints from distrct with no close date
    return Response()

class ClosedCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get'] 
  def list(self, request):
    # Get only complaints that are close from the user's district
    # Get complants from distrct that have close date
    return Response()
    
class TopComplaintTypeViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  def list(self, request):
    # Get the top 3 complaint types from the user's district
    # Display the 3 most common types of compaints from contained distrct
    return Response()
    
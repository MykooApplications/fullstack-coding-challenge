from rest_framework import viewsets
from .models import User, UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# def home(request):
#   return render(request, '')

# def sign_up(request):
#   if request.method == 'POST':
#     form = RegisterForm(request.POST)
#   else:
#       form = RegisterForm()
#   return render(request,'', {"form": form})

def getProperDistrictNumberFromUser(user):
  userInfo = UserProfile.objects.filter(user=user).first()
  districtNumber = getattr(userInfo, 'district')
  districtLength = len(districtNumber)
  distictString = "NYCC"
  if districtLength > 1 :
    distictString = distictString + districtNumber
  else :
    distictString = distictString + "0" + districtNumber 
  return distictString

class AllComplaintsView(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    queryset = self.queryset
    serializer = Complaint(queryset, many=True)
    return Response(serializer.data)

class UserProfileView(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer = UserProfileSerializer

class ComplaintViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  queryset = Complaint.objects.all()
  seralizer = ComplaintSerializer
  def list(self, request):
    # Get all complaints from the user's district
    # Filter complaints from user's disctict ID
    userDistrict = getProperDistrictNumberFromUser(request.user)
    queryset = self.queryset.filter(account=userDistrict)
    seralizer= ComplaintSerializer(queryset, many=True)
    return Response(seralizer.data)

class OpenCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  queryset = Complaint.objects.all().filter(closedate=None)
  seralizer = ComplaintSerializer
  def list(self, request):
    # Get only the open complaints from the user's district
    # Filter complaints from distrct with no close date
    userDistrict = getProperDistrictNumberFromUser(request.user)
    queryset = self.queryset.filter(account=userDistrict)
    seralizer = ComplaintSerializer(queryset, many=True)
    return Response(seralizer.data)

class ClosedCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get'] 
  queryset = Complaint.objects.all().exclude(closedate=None)
  seralizer = ComplaintSerializer
  def list(self, request):
    # Get only complaints that are close from the user's district
    # Get complants from distrct that have close date
    queryset = self.queryset
    seralizer = ComplaintSerializer(queryset, many=True)
    return Response(seralizer.data)
    
class TopComplaintTypeViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  seralizer = ComplaintSerializer
  def list(self, request):
    # Get the top 3 complaint types from the user's district
    # Display the 3 most common types of compaints from contained distrct
    return Response()
    
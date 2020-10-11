from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
from backend.serializers import *


class hospitalViewset(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    def create(self, request, format=None):
        print("Testing create post")
        data = request.data
        if data['name'] == '':
            return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Name is missing!"})
        print("Data is {}".format(data))
        try:
            Hospitals.objects.get_or_create(name=data['name'], addressine1=data['addressine1'],
                                            addressine2=data['addressine2'], area=data['area'], city=data['city'],
                                            state=data['state'], pincode=data['pincode'],
                                            hospital_phone_number=data['hospital_phone_number'],
                                            licence_number=data['licence_number'],
                                            # originally_registered_date=data['originally_registered_date'],
                                            # registered_date=data['registered_date'],
                                            # regisrted_by=data['regisrted_by'])
                                            )
        except Exception as exception:
            print(exception)
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Incorrect data-{}".format(exception)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Hospital"})

    def list(self, request):
        querySet = Hospitals.objects.all()
        serializer = HospitalsSerializer(querySet, many=True)
        return Response(serializer.data)

class ProfilesViewset(viewsets.ViewSet):

    def list(self,req):
        querySet = Profiles.objects.all()
        serializer = ProfilesSerializer(querySet, many=True)
        return Response(serializer.data)

class PatientsViewset(viewsets.ViewSet):

    def list(self,request):
        querySet = Patients.objects.all()
        serializer = PatientsSerializer(querySet,many=True)
        return Response(serializer.data)


class PharmacyViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Pharmacy.objects.all()
        serializer = PharmacySerializer(querySet,many=True)
        return Response(serializer.data)


class MedicineViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Medicine.objects.all()
        serializer = MedicineSerializer(querySet,many=True)
        return Response(serializer.data)


class MedicineOrderViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = MedicineOrder.objects.all()
        serializer = MedicineOrderSerializer(querySet,many=True)
        return Response(serializer.data)


class LabViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Lab.objects.all()
        serializer = LabSerializer(querySet,many=True)
        return Response(serializer.data)


class DepartmentViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Department.objects.all()
        serializer = DepartmentSerializer(querySet,many=True)
        return Response(serializer.data)


class StaffViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Staff.objects.all()
        serializer = StaffSerializer(querySet,many=True)
        return Response(serializer.data)


class LabReportsViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = LabReports.objects.all()
        serializer = LabReportsSerializer(querySet,many=True)
        return Response(serializer.data)


class AppointmentsViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Appointments.objects.all()
        serializer = AppointmentsSerializer(querySet,many=True)
        return Response(serializer.data)


class MessagesViewset(viewsets.ViewSet):
    def list(self,request):
        querySet = Messages.objects.all()
        serializer = MessagesSerializer(querySet,many=True)
        return Response(serializer.data)

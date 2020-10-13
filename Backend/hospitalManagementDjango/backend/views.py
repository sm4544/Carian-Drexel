from django.db.models import QuerySet
from django.views import View
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import JsonResponse
import django.utils
import jwt
from rest_framework.permissions import IsAuthenticated
# Create your views here.
from backend.serializers import *
from datetime import timedelta
import json
import random

# Create your views here.
from backend.serializers import *


class hospitalViewset(viewsets.ViewSet):
    #permission_classes = (IsAuthenticated,)

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


    def create(self, request, format=None):
        print('entered create')
        data = request.data
        print(data)
        if data['email'] == '':
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid email'})
        elif data['password'] == '':
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter password'})
        elif data['first_name'] == '' or data['last_name'] == '':
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid name!'})
        #elif data['date_of_birth'] == '':
            #return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid date of birth!'})
        elif data['profile_type'] == '':
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid profile type!'})
        else:
            try:
                _str = 'pic'
                # new_str = _str.join(format(ord(x), 'b') for x in _str)
                # print(new_str)
                Profiles.objects.get_or_create(id=random.randint(10, 100), first_name=data['first_name'], last_name=data['last_name'],
                                               email=data['email'],
                                               user_name=data['username'], password=data['password'],
                                               registred_date=datetime.utcnow(),
                                               date_of_birth=datetime.utcnow(),
                                               security_question='test',
                                               security_answer='test', password_attempts=0,
                                               last_login_date=datetime.utcnow(),
                                               status='test', profile_pic=bytes(_str, 'utf-8'), profile_type=data['profile_type'])
            except Exception as exception:
                print(exception)
                return Response(status=status.HTTP_409_CONFLICT, data={"Message12345": "{}".format(
                    exception)})
            return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Profile"})

    def list(self,req):
        querySet = Profiles.objects.all()
        serializer = ProfilesSerializer(querySet, many=True)
        return Response(serializer.data)
class LoginSetup(View):
    http_method_names = ['post']
    def post(self, request):
        print("Data is {}".format(request))
        data = request.body
        email = json.loads(data)['email']
        password = json.loads(data)['password']
        #timelimit = datetime.utcnow() + timedelta(minutes=20)
        #timelimit = timedelta(minutes=20)
        if Profiles.objects.filter(email=email, password=password).count() == 0:
            # return Response({"Message":"Incorrect Username/Password"})
            return JsonResponse({"Message": "Incorrect Username/Password"})
        else:
            # Create a JWT Token
            timeLimit = datetime.utcnow()+timedelta(minutes=1)
            payload = {"email": email, "password": password, "exp":timeLimit}
            SECRET_KEY = "hkBxrbZ9Td4QEwgRewV6gZSVH4q78vBia4GBYuqd09SsiMsIjH"
            token = jwt.encode(payload, SECRET_KEY)#.decode('utf-8')
            print("{} and type is {}".format(token,type(token)))
            _token = token
            token = str(token).replace('b', '')
            token = token.replace("'", '')
            return JsonResponse({"Message": "Logged in succesfully", "JWT_TOKEN": "{}".format(token)})

    def verifyTokenExpiry(token,secretKey):
        recoveredPayload=None
        try:
            #recoveredPayload = jwt.decode(token, secretKey, algorithms=['HS256']).decode('utf-8')
            recoveredPayload = jwt.decode(bytes(token,'utf-8'),secretKey,algorithms=['HS256'])
        except Exception as exception:
            print(recoveredPayload)
            return False
        return True

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

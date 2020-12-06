import os

from cryptography.fernet import Fernet
from django.db.models import QuerySet
from django.shortcuts import get_object_or_404
from django.views import View
from django.views.decorators.http import require_http_methods
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponse
import jwt
import datetime
import requests
from PIL import Image

# Create your views here.
from backend.serializers import *
from datetime import timedelta
import json
import base64

SECRET_KEY = "hkBxrbZ9Td4QEwgRewV6gZSVH4q78vBia4GBYuqd09SsiMsIjH"
FERNET_KEY = b'Jbx7Zr2pQ3YgKei404YLNqS_fx_mmUPHd-ryjDGg2wM='


class hospitalViewset(viewsets.ViewSet):

    def create(self, request, format=None):
        data = request.data
        try:
            if data['name'] == '':
                return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Name is missing!"})
            elif data['licence_number'] == '':
                return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Licence Number is missing!"})
            print("Data is {}".format(data))
            try:
                Hospitals.objects.get_or_create(name=data['name'], addressine1=data['addressine1'],
                                                addressine2=data['addressine2'], area=data['area'], city=data['city'],
                                                state=data['state'], pincode=data['pincode'],
                                                hospital_phone_number=data['hospital_phone_number'],
                                                licence_number=data['licence_number'],
                                                # originally_registered_date=data['originally_registered_date'],
                                                originally_registered_date = datetime.utcnow(),
                                                registered_date=datetime.utcnow(),
                                                regisrted_by_id=13),

            except Exception as exception:
                print(exception)
                return Response(status=status.HTTP_409_CONFLICT,
                                data={"Message": "Incorrect data-{}".format(exception)})
        except KeyError as keyError:
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Invalid JSON-{}".format(keyError)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Hospital"})

    def list(self, request):
        querySet = Hospitals.objects.all()
        serializer = HospitalsSerializer(querySet, many=True)
        return Response(serializer.data)


class ProfilesViewset(viewsets.ViewSet):

    def create(self, request, format=None):
        data = request.data
        try:
            if data['email'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid email'})
            elif data['password'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter password'})
            elif data['first_name'] == '' or data['last_name'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid name!'})
            elif data['date_of_birth'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid date of birth!'})
            elif data['profile_type'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid profile type!'})
            else:
                try:
                    _str = data['profile_pic']
                    cipher_suite = Fernet(FERNET_KEY)
                    encrypted_password = cipher_suite.encrypt(str.encode(data['password']))
                    encrypted_password = encrypted_password.decode('utf-8')
                    _profile = Profiles.objects.get_or_create(first_name=data['first_name'],
                                                              last_name=data['last_name'],
                                                              email=data['email'],
                                                              username=data['username'],
                                                              password=encrypted_password,
                                                              # password=data['password'],
                                                              registred_date=datetime.utcnow(),
                                                              date_of_birth=data['date_of_birth'],
                                                              security_question=data['security_question'],
                                                              security_answer=data['security_answer'],
                                                              password_attempts=0,
                                                              last_login_date=datetime.utcnow(),
                                                              status='test', profile_pic=bytes(_str, 'utf-8'),
                                                              profile_type=data['profile_type'])
                    return Response(status=status.HTTP_201_CREATED,
                                    data={"ProfileID": "{}".format(_profile[0].id), "Message": "Added Profile"})
                except Exception as exception:
                    return Response(status=status.HTTP_409_CONFLICT, data={"Message": "{}".format(exception)})
        except KeyError as keyError:
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Invalid Json - {}".format(keyError)})
        except Exception as exception:
            print('Missing Json - {}'.format(exception))
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Invalid Json - {}".format(exception)})

    def retrieve(self, req, pk=None):
        _profile = Profiles.objects.filter(email=req.GET.get("email"), password=req.GET.get("password"))

        if QuerySet(_profile).count() == 0:
            return Response({"Message": "Incorrect Email/Password"})
        else:
            return Response({"Message": "Authenticated Sucesfully!"})

    def list(self, req):

        response_tuple = verifyAuthHeader(req, "Profiles")
        if response_tuple[0] == 403:
            return Response(status=status.HTTP_403_FORBIDDEN, data={"Message": response_tuple[1]})
        else:
            querySet = Profiles.objects.all()
            serializer = ProfilesSerializer(querySet, many=True)
            return Response(status=200, data=serializer.data)


class PatientsViewset(viewsets.ViewSet):

    def create(self, request, format=None):
        data = request.data
        column_names = ['first_name', 'last_name', 'email', 'mobile_number', 'age', 'weight', 'height', 'gender',
                        'occupation', 'martial_status', 'blood_group', 'is_created_by_staff',
                        'addressine1', 'addressine2', 'city', 'state', 'pincode', 'created_by_id']
        try:
            for column in column_names:
                if data[column] == " ":
                    return Response(status=status.HTTP_400_BAD_REQUEST,
                                    data={"Message": "Invalid JSON-{}".format(column)})
        except KeyError as keyError:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid JSON-{}".format(keyError)})

        try:
            patient = Patients.objects.get_or_create(first_name=data['first_name'], last_name=data['last_name'],
                                                     email=data['email'],
                                                     mobile_number=data['mobile_number'], age=data['age'],
                                                     weight=data['weight'], height=data['height'],
                                                     gender=data['gender'],
                                                     occupation=data['occupation'],
                                                     martial_status=data['martial_status'],
                                                     blood_group=data['blood_group'],
                                                     registred_date=datetime.utcnow(),
                                                     is_created_by_staff=data['is_created_by_staff'],
                                                     addressine1=data['addressine1'],
                                                     addressine2=data['addressine2'],
                                                     city=data['city'],
                                                     state=data['state'],
                                                     pincode=data['pincode'],
                                                     created_by_id=data['created_by_id'])
        except Exception as exception:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="Message - {}".format(exception))
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Patient - {}".format(patient[0].id)})

    def list(self, request):
        responseTuple = verifyAuthHeader(request, "Patients")
        if responseTuple[0] == 403:
            return Response(status=status.HTTP_403_FORBIDDEN, data={"Message": responseTuple[1]})
        elif responseTuple[0] == 200:
            querySet = Patients.objects.all()
            serializer = PatientsSerializer(querySet, many=True)
            return Response(serializer.data)
        else:
            return Response(status=responseTuple[0], data={"Message": responseTuple[1]})


class PharmacyViewset(viewsets.ViewSet):

    def create(self, request, format=None):
        data = request.data
        column_names = ['name', 'addressine1', 'addressine2', 'city', 'state', 'pincode', 'pharmacy_phone_number',
                        'licence_number', 'originally_registered_date', 'registered_date', 'timestamp', 'medicine',
                        'hospital_id_id', 'regisrted_by_id']
        try:
            for column in column_names:
                if data[column] == "":
                    return Response(status=status.HTTP_400_BAD_REQUEST,
                                    data={"Message": "Column-{} can't be empty".format(column)})

            try:
                pharmacy = Pharmacy.objects.get_or_create(
                    name=data['name'], addressine1=data['addressine1'], addressine2=data['addressine2'],
                    city=data['city'], state=data['state'], pincode=data['pincode'],
                    pharmacy_phone_number=data['pharmacy_phone_number'], licence_number=data['licence_number'],
                    originally_registered_date=data['originally_registered_date'], registered_date=datetime.utcnow(),
                    timestamp=datetime.utcnow(), medicine=data['medicine'], hospital_id_id=data['hospital_id_id'],
                    regisrted_by_id=data['regisrted_by_id']
                )
            except Exception as exception:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "{}".format(exception)})

            return Response(status=status.HTTP_201_CREATED,
                            data={"Message": "Added Pharmacy - {}".format(pharmacy[0].id)})
        except KeyError as keyError:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid JSON-{}".format(keyError)})

    def list(self, request):
        querySet = Pharmacy.objects.all()
        serializer = PharmacySerializer(querySet, many=True)
        return Response(serializer.data)


class MedicineViewset(viewsets.ViewSet):
    def list(self, request):
        querySet = Medicine.objects.all()
        serializer = MedicineSerializer(querySet, many=True)
        return Response(serializer.data)


class MedicineOrderViewset(viewsets.ViewSet):
    def list(self, request):
        querySet = MedicineOrder.objects.all()
        serializer = MedicineOrderSerializer(querySet, many=True)
        return Response(serializer.data)


class LabViewset(viewsets.ViewSet):
    def create(self, request, format=None):
        data = request.data
        if data['name'] == '':
            return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Name is missing!"})
        elif data['licence_number'] == '':
            return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Licence Number is missing!"})

        print("Data is {}".format(data))
        try:
            _lab = Lab.objects.get_or_create(name=data['name'], addressine1=data['addressine1'],
                                             addressine2=data['addressine2'], city=data['city'],
                                             state=data['state'], pincode=data['pincode'],
                                             lab_phone_number=data['lab_phone_number'],
                                             licence_number=data['licence_number'],
                                             originally_registered_date=data['originally_registered_date'],
                                             registered_date=datetime.now(tz=timezone.utc),
                                             # registered_date=datetime.utcnow(),
                                             hospital_id_id=1,
                                             regisrted_by_id=13),

        except Exception as exception:
            print(exception)
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Incorrect data-{}".format(exception)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Lab"})

    def list(self, request):
        querySet = Lab.objects.all()
        serializer = LabSerializer(querySet, many=True)
        return Response(serializer.data)


class DepartmentViewset(viewsets.ViewSet):
    def create(self, request, format=None):
        data = request.data
        if data['name'] == '':
            return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Name is missing!"})

        print("Data is {}".format(data))
        try:
            _department = Department.objects.get_or_create(Department_name=data['name'],
                                                           addressine1=data['addressine1'],
                                                           is_same_as_hospital_address=data[
                                                               'is_same_as_hospital_address'],
                                                           addressine2=data['addressine2'], city=data['city'],
                                                           state=data['state'], pincode=data['pincode'],
                                                           department_phone_number=data['department_phone_number'],
                                                           registered_date=datetime.utcnow(),
                                                           regisrted_by_id=13,
                                                           hospital_id_id=1),

        except Exception as exception:
            print(exception)
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Incorrect data-{}".format(exception)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Department"})

    def list(self, request):
        querySet = Department.objects.all()
        serializer = DepartmentSerializer(querySet, many=True)
        return Response(serializer.data)


class StaffViewset(viewsets.ViewSet):

    def create(self, request, format=None):
        data = request.data
        try:
            if data['highest_degree'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter  highest qualification'})
            elif data['work_email_address'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter email'})
            elif data['work_phone_number'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid work_phone_number'})
            elif data['licence_number'] == '':
                return Response(status=status.HTTP_409_CONFLICT, data={"Message": 'Enter valid licence_number'})
            else:
                try:
                    # new_str = _str.join(format(ord(x), 'b') for x in _str)
                    # print(new_str)
                    print(data['work_email_address'])
                    profile_id = data['profileid']
                    # p = Profiles.objects.filter(email = data['work_email_address'])
                    # q = ProfilesSerializer(p, many=True)
                    # print(q.data[0]['id'])
                    _staff = Staff.objects.get_or_create(highest_qualification=data['highest_degree'],
                                                         studied_at=data['college_name'],
                                                         specialization=data['specilization'],
                                                         licence_number=data['licence_number'],
                                                         # experience_at_this_hospital=data['experience_at_this_hospital'],
                                                         overall_work_experience=data['overall_work_experience'],
                                                         work_phone_number=data['work_phone_number'],
                                                         work_email_address=data['work_email_address'],
                                                         status='inactive', doctor_fee=data['doctor_fee'],
                                                         approved_by_id=13,
                                                         hospital_id_id=data['hospital_id'], department_id_id=1,
                                                         lab_id_id=1,
                                                         pharmacy_id_id=1, profile_id_id=profile_id),

                except Exception as exception:
                    return Response(status=status.HTTP_409_CONFLICT, data={"Message": "{}".format(exception)})
        except KeyError as key_error:
            return JsonResponse(status=status.HTTP_400_CONFLICT, data={"Message": "{}".format(key_error)})
        return Response(status=status.HTTP_201_CREATED,
                        data={"StaffID": "{}".format(_staff[0][0].id), "Message": "Added Staff"})

    def list(self, request):
        querySet = Staff.objects.all()
        serializer = StaffSerializer(querySet, many=True)
        return Response(serializer.data)


class LabReportsViewset(viewsets.ViewSet):
    def list(self, request):
        querySet = LabReports.objects.all()
        serializer = LabReportsSerializer(querySet, many=True)
        return Response(serializer.data)


class AppointmentsViewset(viewsets.ViewSet):
    def list(self, request):
        querySet = Appointments.objects.all()
        # querySet = Appointments.objects.filter(doctorID)
        serializer = AppointmentsSerializer(querySet, many=True)
        return Response(serializer.data)

    # def retrieve(self, request):
    #    query_set = Appointments.objects.filter(id=)


class MessagesViewset(viewsets.ViewSet):
    def list(self, request):
        querySet = Messages.objects.all()
        serializer = MessagesSerializer(querySet, many=True)
        return Response(serializer.data)


class StaticImagesViewSet(viewsets.ViewSet):

    def list(self, request):
        query_set = StaticImages.objects.all()
        serializer = StaticImagesSerializer(query_set, many=True)
        return Response(serializer.data)



class ReviewsViewset(viewsets.ViewSet):
    def list(self, request):
        querySet = Reviews.objects.all()
        serializer = ReviewsSerializer(querySet, many=True)
        return Response(serializer.data)

    def create(self, request, format=None):
        data = request.data
        try:
            review_stars = int(data['review_stars'])
            reviewObject = Reviews.objects.get_or_create(review_stars=data['review_stars'],
                                                         review_content=data['review_content'],
                                                         reviewTimeStamp=datetime.utcnow(),
                                                         review_for=Profiles.objects.get(id=data['review_for']),
                                                         # review_for=data['review_for'],
                                                         # review_by=data['review_by']
                                                         review_by=Profiles.objects.get(id=data['review_by']),
                                                         )

        except Exception as exception:
            jsonMessage = {"Message": "{}".format(exception)}
            print(exception)
            return JsonResponse(status=status.HTTP_409_CONFLICT, data={"Message": "{}".format(exception)})
        return JsonResponse(status=status.HTTP_201_CREATED,
                            data={"Message": "Comment Added {}".format(reviewObject[0].id)})


@require_http_methods(['GET'])
def HospitalsSimplifiedView(request):
    hospitals = Hospitals.objects.all()
    data = []
    for _hospital in hospitals:
        data.append(
            {
                "label": "{}".format(_hospital.name + "," + _hospital.city),
                "value": "{}".format(_hospital.id)
            }
        )
    return JsonResponse(status=200, data=data, safe=False)


class LoginSetup(View):
    http_method_names = ['post']

    def post(self, request):
        print("Data is {}".format(request))
        data = request.body
        # email = json.loads(data)['email']
        try:
            username = json.loads(data)['username']
            password = json.loads(data)['password']
            if username == "" or password == "":
                return JsonResponse(status=400, data={"Message": "Username or password Can't be empty!"})
            cipher_suite = Fernet(FERNET_KEY)
            _profileObject = Profiles.objects.filter(username=username)
            if _profileObject.count() == 0:
                # return Response({"Message":"Incorrect Username/Password"})
                return JsonResponse(status=403, data={"Message": "Incorrect Username/Password"})
            elif _profileObject.count() == 1:
                # print("Inside one {}".format(cipher_suite.decrypt(str.encode(_profileObject[0].password))))
                if password != cipher_suite.decrypt(str.encode(_profileObject[0].password)).decode('utf-8'):
                    return JsonResponse(status=403, data={"Message": "Incorrect Username/Password"})
                else:
                    # Create a JWT Token
                    timeLimit = datetime.utcnow() + timedelta(minutes=30)
                    _profileType = _profileObject[0].profile_type
                    _profileType = _profileType.lower()
                    scope = ""
                    if _profileType == 'admin':
                        scope = "admin"
                    elif _profileType == 'test':
                        scope = "customer"
                    elif _profileType == 'customer':
                        scope = "customer"
                    else:
                        scope = "other"
                    payload = {"username": username, "password": password, "exp": timeLimit, "scope": scope}
                    SECRET_KEY = "hkBxrbZ9Td4QEwgRewV6gZSVH4q78vBia4GBYuqd09SsiMsIjH"
                    token = jwt.encode(payload, SECRET_KEY)  # .decode('utf-8')
                    print("{} and type is {}".format(token, type(token)))
                    _token = token
                    # token = str(token).replace('b', '')
                    token = token.decode("utf-8")
                    # token = token.replace("'", '')
                    return JsonResponse({"Message": "Logged in succesfully", "JWT_TOKEN": "{}".format(token),
                                         "FirstName": "{}".format(_profileObject[0].first_name),
                                         "LastName": "{}".format(_profileObject[0].last_name),
                                         "Profile_Type": "{}".format(_profileObject[0].profile_type),
                                         "ProfileID": "{}".format(_profileObject[0].id)})
        except KeyError as key_error:
            return JsonResponse(status=400, data={"Message": "{}".format(key_error)})


def verifyTokenExpiry(token, secretKey, callType):
    recoveredPayload = None
    btoken = bytes(token, 'utf-8')
    try:
        recoveredPayload = jwt.decode(btoken, secretKey, algorithms=['HS256'])
        if callType == "Profiles":
            if recoveredPayload["scope"] != "admin":
                return False, "Forbidden Access"
    except Exception as exception:
        print(exception)
        print(recoveredPayload)
        return False, "Token Expired"
    return True, ""


@require_http_methods(['POST'])
def sendImage(request):
    module_dir = os.path.dirname(__file__)  # get current directory
    file_path = os.path.join(module_dir, 'pediatrician.jpg')
    with open(file_path, "rb") as image_file:
        image_data = base64.b64encode(image_file.read()).decode('utf-8')
    # image = Image.open(file_path)
    # image = Image.open('/images/pediatrician.jpg')
    # width, height = image.size
    # image = image.resize(300, 300)
    # image = image.resize((600, 600))
    return HttpResponse(image_data, content_type="image/jpg")


@require_http_methods(['POST'])
def getImageByFilter(request):
    data = request.body
    data = json.loads(data)
    title = data['title']
    images = StaticImages.objects.filter(image_title=title)
    return JsonResponse(status=status.HTTP_200_OK,data={"ImageTitle":title,"Image Blob":images[0].encoded_image})

@require_http_methods(['POST'])
def getAppointments(request):
    data = request.body
    print(data)
    data = json.loads(data)
    try:
        doctorID = data['doctorID']
        doctor_appointment = Appointments.objects.filter(doctor_id=doctorID)
        json_response = {"DoctorID": "", "Appointments": {}}
        json_response["Appointments"] = []
        today = datetime.now()
        if len(doctor_appointment) == 0:
            # if QuerySet(doctor_appointment).count() == 0 :
            for day in range(1, 31):
                current_timestamp = datetime.now() + timedelta(days=day)
                current_date = current_timestamp.strftime('%Y-%m-%d')
                json_response["DoctorID"] = doctorID
                json_response["Appointments"].append(
                    {"Date": "{}".format(current_date), "Slots": ["10:30", "12:30", "2:30"]})
                appointment_times = {"10:30", "1:30", "4:30"}
            return JsonResponse(status=status.HTTP_200_OK, data=json_response)
        else:
            return JsonResponse(status=status.HTTP_200_OK, data=json.dumps({"Testing": "No"}))
    except KeyError as key_error:
        return JsonResponse(status.HTTP_400_BAD_REQUEST, data={"Error": "Invalid JSON {}".format(key_error)})


def verifyAuthHeader(_req, requestor):
    if 'Authorization' not in _req.headers:
        return 403, "Not Authorized to view this info!"
    else:
        if _req.headers['Authorization'].split()[0] == 'Bearer':
            token = _req.headers['Authorization'].split()[1]
        else:
            token = _req.headers['Authorization'].split()[0]

        if token == " " or token == '':
            return 403, "Invalid Token"
        else:
            global SECRET_KEY
            response_tuple = verifyTokenExpiry(token, SECRET_KEY, requestor)
            if not response_tuple[0]:
                return 403, response_tuple[1]
            else:
                return 200, None

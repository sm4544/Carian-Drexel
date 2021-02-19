import os
from rest_framework.decorators import api_view, renderer_classes
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
from django.core import serializers

# Create your views here.
from backend.encryption import encrypt
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
                                                originally_registered_date=datetime.utcnow(),
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

    def put(self, request):
        _hospital_updated_data = request.data
        _hospital = Hospitals.objects.get(id=_hospital_updated_data['id'])
        _hospital.name = _hospital_updated_data["name"]
        _hospital.addressine1 = _hospital_updated_data["addressine1"]
        _hospital.addressine2 = _hospital_updated_data["addressine2"]
        _hospital.area = _hospital_updated_data["area"]
        _hospital.city = _hospital_updated_data["city"]
        _hospital.state = _hospital_updated_data["state"]
        _hospital.pincode = _hospital_updated_data["pincode"]
        _hospital.hospital_phone_number = _hospital_updated_data["hospital_phone_number"]
        _hospital.licence_number = _hospital_updated_data["licence_number"]
        _hospital.originally_registered_date = _hospital_updated_data["originally_registered_date"]
        _hospital.save()
        ser = HospitalsSerializer(_hospital)
        return Response(ser.data)

    def delete(self, request):
        _hospital = Hospitals.objects.get(id=request.data['id'])
        _hospital.delete()
        querySet = Hospitals.objects.all()
        serializer = HospitalsSerializer(querySet, many=True)
        return Response(serializer.data)


class ProfilesViewset(viewsets.ViewSet):

    def create(self, request, format=None):
        data = request.data
        print(data)
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
                    encrypted_password = encrypt(data['password'])
                    # cipher_suite = Fernet(FERNET_KEY)
                    # encrypted_password = cipher_suite.encrypt(str.encode(data['password']))
                    # encrypted_password = encrypted_password.decode('utf-8')
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

    # def retrieve(self, req, pk=None):
    #     _profile = Profiles.objects.filter(email=req.GET.get("email"), password=req.GET.get("password"))
    #
    #     if QuerySet(_profile).count() == 0:
    #         return Response({"Message": "Incorrect Email/Password"})
    #     else:
    #         return Response({"Message": "Authenticated Sucesfully!"})

    def list(self, req):

        response_tuple = verifyAuthHeader(req, "Profiles")
        if response_tuple[0] == 403:
            return Response(status=status.HTTP_403_FORBIDDEN, data={"Message": response_tuple[1]})
        else:
            querySet = Profiles.objects.all()
            serializer = ProfilesSerializer(querySet, many=True)
            return Response(status=200, data=serializer.data)


class PatientsViewset(viewsets.ViewSet):

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

    def create(self, request, format=None):
        data = request.data
        column_names = ['first_name', 'last_name', 'email', 'mobile_number', 'age', 'weight', 'height', 'gender',
                        'occupation', 'martial_status', 'blood_group', 'is_created_by_staff',
                        'addressine1', 'addressine2', 'city', 'state', 'pincode', 'related_profile']
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
                                                     dob=data['dob'],
                                                     hobbies=data['hobbies'],
                                                     recurring_problems=data['recurring_problems'],
                                                     allergies_to_medicine=data['allergies'],
                                                     use_of_alcohol=data['alcohol'],
                                                     use_of_tobacco=data['tobacco'],
                                                     physical_activities=data['activities'],
                                                     pincode=data['pincode'], relation=data['relation'],
                                                     created_by_id=Profiles.objects.get(id=data['related_profile']))
        except Exception as exception:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="Message - {}".format(exception))
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Patient - {}".format(patient[0].id)})

    def retrieve(self, request, *args, **kwargs):
        value = kwargs['pk']
        patient_object = Patients.objects.filter(related_profile_id=value)
        serializer = PatientsSerializer(patient_object, many=True)
        return Response(status=200, data=serializer.data)

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

    def put(self, request):
        _pharmacy_updated_data = request.data
        _pharmacy = Pharmacy.objects.get(id=_pharmacy_updated_data['id'])
        _pharmacy.name = _pharmacy_updated_data["name"]
        _pharmacy.addressine1 = _pharmacy_updated_data["addressine1"]
        _pharmacy.addressine2 = _pharmacy_updated_data["addressine2"]
        _pharmacy.city = _pharmacy_updated_data["city"]
        _pharmacy.state = _pharmacy_updated_data["state"]
        _pharmacy.pincode = _pharmacy_updated_data["pincode"]
        _pharmacy.pharmacy_phone_number = _pharmacy_updated_data["pharmacy_phone_number"]
        _pharmacy.licence_number = _pharmacy_updated_data["licence_number"]
        _pharmacy.originally_registered_date = _pharmacy_updated_data["originally_registered_date"]
        _pharmacy.save()
        ser = PharmacySerializer(_pharmacy)
        return Response(ser.data)


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
        try:
            if data['name'] == '':
                return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Name is missing!"})
            elif data['licence_number'] == '':
                return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Licence Number is missing!"})

            print("Data is {}".format(data))
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
            # print(exception)
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Incorrect data-{}".format(exception)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Lab"})

    def list(self, request):
        querySet = Lab.objects.all()
        serializer = LabSerializer(querySet, many=True)
        return Response(serializer.data)

    def put(self, request):
        _lab_updated_data = request.data
        _lab = Lab.objects.get(id=_lab_updated_data['id'])
        _lab.name = _lab_updated_data["name"]
        _lab.addressine1 = _lab_updated_data["addressine1"]
        _lab.addressine2 = _lab_updated_data["addressine2"]
        _lab.city = _lab_updated_data["city"]
        _lab.state = _lab_updated_data["state"]
        _lab.pincode = _lab_updated_data["pincode"]
        _lab.lab_phone_number = _lab_updated_data["lab_phone_number"]
        _lab.licence_number = _lab_updated_data["licence_number"]
        _lab.originally_registered_date = _lab_updated_data["originally_registered_date"]
        _lab.save()
        ser = LabSerializer(_lab)
        return Response(ser.data)

    def delete(self, request):
        _lab = Lab.objects.get(id=request.data['id'])
        _lab.delete()
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

    def put(self, request):
        _department_updated_data = request.data
        _department = Department.objects.get(id=_department_updated_data['id'])
        _department.Department_name = _department_updated_data["name"]
        _department.addressine1 = _department_updated_data["addressine1"]
        _department.addressine2 = _department_updated_data["addressine2"]
        _department.is_same_as_hospital_address = _department_updated_data["is_same_as_hospital_address"]
        _department.city = _department_updated_data["city"]
        _department.state = _department_updated_data["state"]
        _department.pincode = _department_updated_data["pincode"]
        _department.department_phone_number = _department_updated_data["department_phone_number"]
        _department.save()
        ser = DepartmentSerializer(_department)
        return Response(ser.data)

    def delete(self, request):
        _department = Department.objects.get(id=request.data['id'])
        _department.delete()
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
                                                         hospital_id_id=data['hospital_id'],
                                                         department_id_id=data['department_id'],
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

    def put(self, request):
        _staff_updated_data = request.data
        _staff = Staff.objects.get(id=_staff_updated_data['id'])
        _staff.highest_qualification = _staff_updated_data["highest_degree"]
        _staff.studied_at = _staff_updated_data["college_name"]
        _staff.specialization = _staff_updated_data["specilization"]
        _staff.overall_work_experience = _staff_updated_data["overall_work_experience"]
        _staff.work_phone_number = _staff_updated_data["work_phone_number"]
        _staff.work_email_address = _staff_updated_data["work_email_address"]
        _staff.doctor_fee = _staff_updated_data["doctor_fee"]
        _staff.licence_number = _staff_updated_data["licence_number"]
        _staff.save()
        ser = StaffSerializer(_staff)
        return Response(ser.data)

    def delete(self, request):
        _staff = Staff.objects.get(id=request.data['id'])
        _staff.delete()
        querySet = Lab.objects.all()
        serializer = LabSerializer(querySet, many=True)
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

    def create(self, request, format=None):
        data = request.data
        print(data)
        try:
            patient_id = data['patient_id']
            doctor_id = data['doctor_id']
            hospital_id = data['hospital_id']
            # status = data["status"]
            if patient_id == doctor_id:
                raise Exception("Patient_id can't be same as doctor_id")
            if patient_id == '' or doctor_id == '':
                raise Exception("Patient_id or Doctor_id is empty!")
            # check for validity
            profile_data = Profiles.objects.filter(id=doctor_id)
            if profile_data is None or len(profile_data) == 0:
                raise Exception("Invalid Doctor_id")
            profile_data = Profiles.objects.filter(id=doctor_id)
            if profile_data is None or len(profile_data) == 0:
                raise Exception("Invalid Doctor_id")
            hospital_data = Hospitals.objects.filter(id=hospital_id)
            if hospital_data is None or len(hospital_data) == 0:
                raise Exception("Invalid Hospital_id")
            appointment_date_time = data['appointment_time']
            timeslot = data['timeslot']
            appointment = Appointments.objects.get_or_create(patient_id=Patients.objects.get(id=patient_id),
                                                             doctor_id=Profiles.objects.get(id=doctor_id),
                                                             hospital_id=Hospitals.objects.get(id=hospital_id),
                                                             date=appointment_date_time, start_time=timeslot,
                                                             end_time=timeslot,
                                                             appointment_status=data['appointment_status'])
            return Response(status=status.HTTP_201_CREATED,
                            data={"Message": "Appointment-id {} Booked".format(appointment[0].id)})
        except Patients.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid patient_id"})
        except KeyError as key_error:
            print('KeyError')
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid JSON"})
        except Exception as exception:
            print(exception)
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "{}".format(exception)})


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


class LabWorkingHoursViewSet(viewsets.ViewSet):
    def create(self, request, format=None):
        data = request.data
        try:
            if data['lab_id'] == '':
                return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Lab Id is missing!"})
            try:
                LabWorkingHours.objects.get_or_create(lab_id_id=data['lab_id'],
                                                      mon_start_time=data['monst'],
                                                      mon_end_time=data['monet'], tue_start_time=data['tuest'],
                                                      tue_end_time=data['tueet'], wed_start_time=data['wedst'],
                                                      wed_end_time=data['wedet'],
                                                      thu_start_time=data['thust'], thu_end_time=data['thuet'],
                                                      fri_start_time=data['frist'],
                                                      fri_end_time=data['friet'], sat_start_time=data['satst'],
                                                      sat_end_time=data['satet'],
                                                      sun_start_time=data['sunst'], sun_end_time=data['sunet']),

            except Exception as exception:
                print(exception)
                return Response(status=status.HTTP_409_CONFLICT,
                                data={"Message": "Incorrect data-{}".format(exception)})
        except KeyError as keyError:
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Invalid JSON-{}".format(keyError)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Lab working hours"})

    def list(self, request):
        querySet = LabWorkingHours.objects.all()
        serializer = LabWorkingHoursSerializer(querySet, many=True)
        return Response(serializer.data)

    def put(self, request):
        _lab_wh_updated_data = request.data
        _lab_wh = LabWorkingHours.objects.get(lab_id_id=_lab_wh_updated_data['lab_id'])
        _lab_wh.mon_start_time = _lab_wh_updated_data["monst"]
        _lab_wh.mon_end_time = _lab_wh_updated_data["monet"]
        _lab_wh.tue_start_time = _lab_wh_updated_data["tuest"]
        _lab_wh.tue_end_time = _lab_wh_updated_data["tueet"]
        _lab_wh.wed_start_time = _lab_wh_updated_data["wedst"]
        _lab_wh.wed_end_time = _lab_wh_updated_data["wedet"]
        _lab_wh.thu_start_time = _lab_wh_updated_data["thust"]
        _lab_wh.thu_end_time = _lab_wh_updated_data["thuet"]
        _lab_wh.fri_start_time = _lab_wh_updated_data["frist"]
        _lab_wh.fri_end_time = _lab_wh_updated_data["friet"]
        _lab_wh.sat_start_time = _lab_wh_updated_data["satst"]
        _lab_wh.sat_end_time = _lab_wh_updated_data["satet"]
        _lab_wh.sun_start_time = _lab_wh_updated_data["sunst"]
        _lab_wh.sun_end_time = _lab_wh_updated_data["sunet"]

        _lab_wh.save()
        ser = LabWorkingHoursSerializer(_lab_wh)
        return Response(ser.data)


@require_http_methods(['POST'])
def hospitalworkinghours(request):
    input_data = request.body
    out_data = []
    hospital_id = json.loads(input_data)['hospital_id']
    _hospitalwh = HospitalWorkingHours.objects.filter(hospital_id_id=hospital_id)
    if len(_hospitalwh) == 0:
        return JsonResponse(status=status.HTTP_204_NO_CONTENT,
                            data={"Message": "Hospital working hours does not exist!!"})
    else:
        wh = HospitalWorkingHoursSerializer(_hospitalwh, many=True).data[0]
        out_data.append({"Message": "Hospital working hours exist!!", "id": "{}".format(wh['id']),
                         "hospital_id": "{}".format(wh['hospital_id']),
                         "mon_start_time": "{}".format(wh['mon_start_time']),
                         "mon_end_time": "{}".format(wh['mon_end_time']),
                         "tue_start_time": "{}".format(wh['tue_start_time']),
                         "tue_end_time": "{}".format(wh['tue_end_time']),
                         "wed_start_time": "{}".format(wh['wed_start_time']),
                         "wed_end_time": "{}".format(wh['wed_end_time']),
                         "thu_start_time": "{}".format(wh['thu_start_time']),
                         "thu_end_time": "{}".format(wh['thu_end_time']),
                         "fri_start_time": "{}".format(wh['fri_start_time']),
                         "fri_end_time": "{}".format(wh['fri_end_time']),
                         "sat_start_time": "{}".format(wh['sat_start_time']),
                         "sat_end_time": "{}".format(wh['sat_end_time']),
                         "sun_start_time": "{}".format(wh['sun_start_time']),
                         "sun_end_time": "{}".format(wh['sun_end_time']),
                         })
        return JsonResponse(status=200, data=out_data, safe=False)


class DoctorWorkingHoursViewSet(viewsets.ViewSet):

    def list(self, request):
        data = DoctorWorkingHours.objects.all()
        serializer = DoctorWorkingHoursSerializer(data, many=True)
        return Response(status=200, data=serializer.data)

    def create(self, request):
        data = request.data
        try:
            doctor_id = data["doctor_id"]
            timeslots = data["working_hours"]
            profile_data = Profiles.objects.filter(id=doctor_id)
            # print(profile_data)
            if profile_data is None or len(profile_data) == 0:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid doctor_id"})
            # print(type(timeslots))
            # print(timeslots)
            DoctorWorkingHours.objects.get_or_create(doctor=Profiles.objects.get(id=doctor_id), working_hours=timeslots)
            return Response(status=status.HTTP_201_CREATED, data={"Message": "Created doctor working hours!"})
        except KeyError as key_error:
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "{}".format(key_error)})
        except Exception as exception:
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "{}".format(exception)})

    def retrieve(self, request, *args, **kwargs):
        print('Inside retrieve')
        value = kwargs['pk']
        # print(value)
        doctor_working_hours = DoctorWorkingHours.objects.filter(doctor_id=value)
        serializer = DoctorWorkingHoursSerializer(doctor_working_hours, many=True)
        return Response(status=200, data=serializer.data)


class HospitalWorkingHoursViewSet(viewsets.ViewSet):
    def create(self, request, format=None):
        data = request.data
        try:
            if data['hospital_id'] == '':
                return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Hospital Id is missing!"})
            try:
                HospitalWorkingHours.objects.get_or_create(hospital_id_id=data['hospital_id'],
                                                           mon_start_time=data['monst'],
                                                           mon_end_time=data['monet'], tue_start_time=data['tuest'],
                                                           tue_end_time=data['tueet'], wed_start_time=data['wedst'],
                                                           wed_end_time=data['wedet'],
                                                           thu_start_time=data['thust'], thu_end_time=data['thuet'],
                                                           fri_start_time=data['frist'],
                                                           fri_end_time=data['friet'], sat_start_time=data['satst'],
                                                           sat_end_time=data['satet'],
                                                           sun_start_time=data['sunst'], sun_end_time=data['sunet']),

            except Exception as exception:
                print(exception)
                return Response(status=status.HTTP_409_CONFLICT,
                                data={"Message": "Incorrect data-{}".format(exception)})
        except KeyError as keyError:
            return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Invalid JSON-{}".format(keyError)})
        return Response(status=status.HTTP_201_CREATED, data={"Message": "Added Hospital working hours"})

    def list(self, request):
        querySet = HospitalWorkingHours.objects.all()
        serializer = HospitalWorkingHoursSerializer(querySet, many=True)
        return Response(serializer.data)

    def put(self, request):
        _hospital_wh_updated_data = request.data
        _hospital_wh = HospitalWorkingHours.objects.get(hospital_id_id=_hospital_wh_updated_data['hospital_id'])
        _hospital_wh.mon_start_time = _hospital_wh_updated_data["monst"]
        _hospital_wh.mon_end_time = _hospital_wh_updated_data["monet"]
        _hospital_wh.tue_start_time = _hospital_wh_updated_data["tuest"]
        _hospital_wh.tue_end_time = _hospital_wh_updated_data["tueet"]
        _hospital_wh.wed_start_time = _hospital_wh_updated_data["wedst"]
        _hospital_wh.wed_end_time = _hospital_wh_updated_data["wedet"]
        _hospital_wh.thu_start_time = _hospital_wh_updated_data["thust"]
        _hospital_wh.thu_end_time = _hospital_wh_updated_data["thuet"]
        _hospital_wh.fri_start_time = _hospital_wh_updated_data["frist"]
        _hospital_wh.fri_end_time = _hospital_wh_updated_data["friet"]
        _hospital_wh.sat_start_time = _hospital_wh_updated_data["satst"]
        _hospital_wh.sat_end_time = _hospital_wh_updated_data["satet"]
        _hospital_wh.sun_start_time = _hospital_wh_updated_data["sunst"]
        _hospital_wh.sun_end_time = _hospital_wh_updated_data["sunet"]

        _hospital_wh.save()
        ser = HospitalWorkingHoursSerializer(_hospital_wh)
        return Response(ser.data)


@require_http_methods(['POST'])
def hospitalDepartments(request):
    input_data = request.body
    out_data = []
    hospital_id = json.loads(input_data)['hospital_id']
    _hospitalDepartments = Department.objects.filter(hospital_id_id=hospital_id)
    print("len:", len(_hospitalDepartments))
    if len(_hospitalDepartments) == 0:
        return JsonResponse(status=status.HTTP_204_NO_CONTENT, data={"Message": "Departments does not exist!!"})
    else:
        for department in _hospitalDepartments:
            out_data.append({
                "Department_name": "{}".format(department.Department_name),
                "addressine1": "{}".format(department.addressine1),
                "is_same_as_hospital_address": "{}".format(department.is_same_as_hospital_address),
                "addressine2": "{}".format(department.addressine2),
                "city": "{}".format(department.city),
                "state": "{}".format(department.state),
                "pincode": "{}".format(department.pincode),
                "department_phone_number": "{}".format(department.department_phone_number),
                "hospital_id": "{}".format(department.hospital_id_id),
                "id": "{}".format(department.id)

            })
        return JsonResponse(status=200, data=out_data, safe=False)


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
            return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"Message": "{}".format(key_error)})


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
    try:
        data = request.body
        data = json.loads(data)
        title = data['title']
        images = StaticImages.objects.filter(image_title=title)
    except KeyError as key_error:
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid JSON - {}".format(key_error)})
    except Exception as exception:
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid JSON - {}".format(exception)})
    return JsonResponse(status=status.HTTP_200_OK, data={"ImageTitle": title, "Image Blob": images[0].encoded_image})


# @require_http_methods(['POST'])
@api_view(('POST',))
def getAppointments(request):
    try:
        _data = request.body
        _data = _data.decode("utf-8")
        print(_data)
        if _data == '':
            raise Exception('Improper JSON')
        _data = json.loads(_data)
        doctorID = _data['doctorID']
        profile_data = Profiles.objects.filter(id=doctorID)
        # print(profile_data)
        if profile_data is None or len(profile_data) == 0:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid doctor_id"})
        doctor_appointment = Appointments.objects.filter(doctor_id=doctorID)
        # print(doctor_appointment[0].start_time)
        # print(len(doctor_appointment))
        json_response = {"DoctorID": "", "Appointments": {}}
        json_response["Appointments"] = []
        today = datetime.now()
        slots = ["10:30", "11:30", "12:30", "1:30", "2:30", "3:30", "4:30", "5:30", "6:30", "7:30", "8:30", "9:30",
                 "10:30"]
        # slots = ["10:30", "11:30", "12:30", "1:30", "2:30", "3:30"]
        #         "10:30"]
        print(doctor_appointment)
        if len(doctor_appointment) == 0:
            datetime_object = {}
            # if QuerySet(doctor_appointment).count() == 0 :
            for day in range(0, 30):
                current_timestamp = datetime.now() + timedelta(days=day)
                current_date = current_timestamp.strftime('%Y-%m-%d')
                json_response["DoctorID"] = doctorID
                datetime_object['{}'.format(current_date)] = slots;
            json_response['Appointments'] = datetime_object
            return JsonResponse(status=status.HTTP_200_OK, data=json_response)
        else:
            json_response = {"DoctorID": "", "Appointments": {}}
            json_response["DoctorID"] = doctorID
            datetime_object = {}
            for day in range(0, 30):
                current_timestamp = datetime.now() + timedelta(days=day)
                current_date = current_timestamp.strftime('%Y-%m-%d')

                available_slots = []
                datetime_object['{}'.format(current_date)] = []
                for i in range(0, len(doctor_appointment)):
                    if doctor_appointment[i].start_time.strftime('%Y-%m-%d') == current_date:
                        print(doctor_appointment[i].start_time)
                        if len(datetime_object['{}'.format(current_date)]) == 0:
                            datetime_object['{}'.format(current_date)] = list(
                                filter(lambda slot: doctor_appointment[i].start_time.strftime(
                                    '%Y:%m:%d %H:%M') != current_timestamp.strftime('%Y:%m:%d {}'.format(slot)), slots))
                        else:
                            datetime_object['{}'.format(current_date)] = list(
                                filter(lambda slot: doctor_appointment[i].start_time.strftime(
                                    '%Y:%m:%d %H:%M') != current_timestamp.strftime('%Y:%m:%d {}'.format(slot)),
                                       datetime_object['{}'.format(current_date)]))
                        available_slots = list(filter(lambda slot: doctor_appointment[i].start_time.strftime(
                            '%Y:%m:%d %H:%M') != current_timestamp.strftime('%Y:%m:%d {}'.format(slot)), slots))
                    else:
                        available_slots = slots
                        datetime_object['{}'.format(current_date)] = slots
                # json_response['Appointments'].append({"Date": "{}".format(current_date),"Slots":available_slots})
                # print('---------')
                # print(datetime_object)
                # print('---------')
                json_response["Appointments"] = datetime_object
            return JsonResponse(status=status.HTTP_200_OK, data=json_response)
            # return JsonResponse(status=status.HTTP_200_OK, data={"Testing": "No"},safe=False)
    except KeyError as key_error:
        error_payload = {"Error": "Invalid JSON {}".format(key_error)}
        print(error_payload)
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"Message": "Invalid JSON"})
    except Exception as exception:
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST, data={"Message": "{}".format(exception)})


@require_http_methods(['GET'])
def hospitalsList(request):
    hospitals = Hospitals.objects.all()
    data = []
    # static_image = StaticImages.objects.filter(image_title="hospital")
    # print(static_image[0].encoded_image)
    for _hospital in hospitals:
        doctors = Staff.objects.filter(hospital_id_id=_hospital.id)
        data.append(
            {
                "name": "{}".format(_hospital.name),
                "hospital_id": "{}".format(_hospital.id),
                "area": "{}".format(_hospital.area),
                "city": "{}".format(_hospital.city),
                "doctors": "{}".format(len(doctors)),
                "type": "{}".format(_hospital.type),
                "avg_rating": "4.2",
                "total_reviews": "120",
                # "image": "{}".format(static_image[0].encoded_image)
            }
        )
    return JsonResponse(status=200, data=data, safe=False)


@require_http_methods(['POST'])
def hospitalDetails(request):
    data = request.body
    name = json.loads(data)['name']
    try:
        hospital = Hospitals.objects.get(name=name)
    except Exception:
        return Response(status=status.HTTP_204_NO_CONTENT, data={"Message": "Hospital name does not exist!! "})

    data = []
    data1 = []
    data2 = []

    doctors = Staff.objects.filter(hospital_id_id=hospital.id)
    departments = Department.objects.filter(hospital_id_id=hospital.id)
    data.append(
        {

            "name": "{}".format(hospital.name),
            "address": "{} {}".format(hospital.addressine1, hospital.addressine2),
            "area": "{}".format(hospital.area),
            "city": "{}".format(hospital.city),
            "doctors": "{}".format(len(doctors)),
            "departments": "{}".format(len(departments)),
        }
    )
    for doctor in doctors:
        profile = Profiles.objects.filter(id=doctor.profile_id_id)
        _profile = ProfilesSerializer(profile, many=True).data[0]

        data1.append({
            "name": "{} {}".format(_profile['first_name'], _profile['last_name'])
        })
    for department in departments:
        data2.append(
            {
                "department": "{}".format(department.Department_name)
            })

    return JsonResponse(status=200, data=[data, data1, data2], safe=False)


@require_http_methods(['GET'])
def doctorsList(request):
    _doctors = Staff.objects.all()
    data = []
    for _doctor in _doctors:
        hospital = Hospitals.objects.filter(id=_doctor.hospital_id_id)
        _hospital = (HospitalsSerializer(hospital, many=True)).data[0]
        profile = Profiles.objects.filter(id=_doctor.profile_id_id)
        _profile = (ProfilesSerializer(profile, many=True)).data[0]
        data.append(
            {
                "specialization": "{}".format(_doctor.specialization),
                "highestDegree": "{}".format(_doctor.highest_qualification),
                "overallExperience": "{}".format(_doctor.overall_work_experience),
                "area": "{}".format(_hospital['area']),
                "city": "{}".format(_hospital['city']),
                "hospital_name": "{}".format(_hospital['name']),
                "phoneNumber": "{}".format(_doctor.work_phone_number),
                "name": "{} {}".format(_profile['first_name'], _profile['last_name']),
                "email": "{}".format(_doctor.work_email_address),
                "doctor_fee": "{}".format(_doctor.doctor_fee),
                "licence_number": "{}".format(_doctor.licence_number),
                "college_name": "{}".format(_doctor.studied_at),
                "id": "{}".format(_doctor.id),
                "hospital_id": "{}".format(_doctor.hospital_id_id),
                "profile_id": "{}".format(_doctor.profile_id_id)
            }
        )
    return JsonResponse(status=200, data=data, safe=False)


# @require_http_methods(['POST'])
@api_view(('POST',))
def ProfilePicUpd(request):
    try:
        data = request.body
        print('inside try')
        id = json.loads(data)['id']
        encoded_image = json.loads(data)['image']
        # images = StaticImages.objects.filter(image_title=title)
        profile_pic = ProfilePic.objects.filter(id=id).first()
        # print(profile_pic)
        if profile_pic is None:
            profile_data = Profiles.objects.filter(id=id)
            print(profile_data)
            if profile_data is None or len(profile_data) == 0:
                return Response(status=status.HTTP_404_NOT_FOUND, data={"Message": "Invalid Profile_id"})
            elif len(profile_data) == 1:
                ProfilePic.objects.create(id=Profiles.objects.get(id=id), encoded_image='')
                return Response(status=status.HTTP_201_CREATED, data={"Message": "Profile Pic created!"})
        else:
            prf_pic = ProfilePic.objects.get(id=id)
            prf_pic.encoded_image = encoded_image
            prf_pic.save()
            return Response(status=status.HTTP_201_CREATED, data={"Message": "Profile pic updated!"})
    except Exception as exception:
        print("Exception={}".format(exception))
        return Response(status=status.HTTP_409_CONFLICT, data={"Message": "Incorrect Body"})


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


@require_http_methods(['POST'])
def doctorDepartments(request):
    input_data = request.body
    out_data = []
    hospital_id = json.loads(input_data)['hospital_id']
    department_id = json.loads(input_data)['department_id']
    if hospital_id == "" or department_id == "":
        return JsonResponse(status=400, data={"Message": "hospital or department Can't be empty!"})
    _doctorDepartments = Staff.objects.filter(hospital_id_id=hospital_id).filter(department_id_id=department_id)
    print("len:", len(_doctorDepartments))
    if len(_doctorDepartments) == 0:
        return JsonResponse(status=404, data={"Message": "No Doctors avaialable!!"})
    else:
        for doctor in _doctorDepartments:
            profile = Profiles.objects.filter(id=doctor.profile_id_id)
            _profile = ProfilesSerializer(profile, many=True).data[0]
            hospital = Hospitals.objects.filter(id=doctor.hospital_id_id)
            _hospital = (HospitalsSerializer(hospital, many=True)).data[0]
            out_data.append({
                "name": "{} {}".format(_profile['first_name'], _profile['last_name']),
                "specialization": "{}".format(doctor.specialization),
                "highest_qualification": "{}".format(doctor.highest_qualification),
                "studied_at": "{}".format(doctor.studied_at),
                "licence_number": "{}".format(doctor.licence_number),
                "overall_work_experience": "{}".format(doctor.overall_work_experience),
                "work_email_address": "{}".format(doctor.work_email_address),
                "department_id": "{}".format(doctor.department_id_id),
                "hospital_id": "{}".format(doctor.hospital_id_id),
                "id": "{}".format(doctor.id),
                "doctor_fee": "{}".format(doctor.doctor_fee),
                "area": "{}".format(_hospital['area']),
                "city": "{}".format(_hospital['city'])
            })
        return JsonResponse(status=200, data=out_data, safe=False)

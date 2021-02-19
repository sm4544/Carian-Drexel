from rest_framework import serializers
from .models import *


class HospitalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospitals
        fields = 'id', 'name', 'addressine1', 'addressine2', 'area', 'city', 'state', 'pincode', 'hospital_phone_number', 'licence_number', 'originally_registered_date', 'regisrted_by', 'registered_date'


class ProfilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profiles
        fields = 'id', 'first_name', 'last_name', 'email', 'username', 'password', 'registred_date', 'date_of_birth', 'security_question', 'security_answer', 'password_attempts', 'last_login_date', 'status', 'profile_pic', 'profile_type'


class PatientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = 'id', 'first_name', 'last_name', 'email', 'mobile_number', 'age', 'weight', 'height', 'gender', 'occupation', 'martial_status', 'blood_group', 'registred_date', 'related_profile', 'is_created_by_staff', 'addressine1', 'addressine2', 'city', 'state', 'pincode','dob','hobbies','recurring_problems','allergies_to_medicine','use_of_alcohol','use_of_tobacco','physical_activities', 'relation'


class PharmacySerializer(serializers.ModelSerializer):
    class Meta:
        model = Pharmacy
        fields = 'id', 'name', 'addressine1', 'addressine2', 'city', 'state', 'pincode', 'pharmacy_phone_number', 'licence_number', 'hospital_id', 'originally_registered_date', 'registered_date', 'timestamp', 'regisrted_by', '_medicine'


class MedicineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicine
        fields = 'id', 'brand_name', 'drug_name', 'category', 'dosage', 'price', 'description', 'created_by', 'created_date', 'pharmacy_id'


class MedicineOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicineOrder
        fields = 'id', 'generated_by', 'generated_for', 'generated_date', 'pharmacy_id', 'accepted_by', 'issued_date', 'medicines'


class LabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lab
        fields = 'id', 'name', 'addressine1', 'addressine2', 'city', 'state', 'pincode', 'lab_phone_number', 'licence_number', 'hospital_id', 'originally_registered_date', 'registered_date', 'regisrted_by'


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = 'id', 'Department_name', 'is_same_as_hospital_address', 'addressine1', 'addressine2', 'city', 'state', 'pincode', 'department_phone_number', 'hospital_id', 'registered_date', 'regisrted_by'


class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = 'id', 'profile_id', 'highest_qualification', 'studied_at', 'work_phone_number', 'work_email_address', 'overall_work_experience', 'hospital_id', 'department_id', 'pharmacy_id', 'lab_id', 'status', 'approved_by', 'licence_number', 'doctor_fee', 'specialization'


class LabReportsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabReports
        fields = 'id', 'name', 'lab_id'


class AppointmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = 'id', 'patient_id', 'doctor_id', 'hospital_id', 'department_id', 'pharmacy_id', 'lab_id', 'appointment_status', 'date', 'start_time', 'end_time '


class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = 'id', 'appointment_id', 'generated_by', 'generated_for', 'message', 'generated_date'


class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = 'id', 'review_content', 'reviewTimeStamp', 'review_for', 'review_by', 'review_stars'


class StaticImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StaticImages
        fields = 'id', 'image_title', 'encoded_image'


class ProfilePicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfilePic
        fields = 'id', 'encoded_image'


class HospitalWorkingHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalWorkingHours
        fields = 'id', 'hospital_id', 'mon_start_time', 'mon_end_time', 'tue_start_time', 'tue_end_time', 'wed_start_time', 'wed_end_time', 'thu_start_time', 'thu_end_time', 'fri_start_time', 'fri_end_time', 'sat_start_time', 'sat_end_time', 'sun_start_time', 'sun_end_time'


class LabWorkingHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = LabWorkingHours
        fields = 'id', 'lab_id', 'mon_start_time', 'mon_end_time', 'tue_start_time', 'tue_end_time', 'wed_start_time', 'wed_end_time', 'thu_start_time', 'thu_end_time', 'fri_start_time', 'fri_end_time', 'sat_start_time', 'sat_end_time', 'sun_start_time', 'sun_end_time'

class DoctorWorkingHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorWorkingHours
        fields = 'doctor', 'working_hours'
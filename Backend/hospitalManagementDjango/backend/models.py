from datetime import datetime

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import django.utils

# Create your models here.


#class Profiles(models.Model):
class Profiles (models.Model):
    id = models.AutoField(primary_key=True,)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=28)
    email = models.CharField(max_length=40, unique=True)
    username = models.CharField(max_length=15,unique=True)
    password = models.CharField(max_length=100)
    registred_date = models.DateField(default=timezone.now)
    date_of_birth = models.DateField()
    security_question = models.CharField(max_length=40)
    security_answer = models.CharField(max_length=15)
    password_attempts = models.IntegerField()
    last_login_date = models.DateField()
    status = models.CharField(max_length=12)
    profile_pic = models.BinaryField()
    profile_type = models.CharField(max_length=15)



class Hospitals(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    area = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    hospital_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=20)
    originally_registered_date = models.DateField(default=timezone.now, blank=True)
    regisrted_by = models.ForeignKey(Profiles, to_field='id',on_delete=models.CASCADE)
    registered_date = models.DateField(default=timezone.now, blank=True)
    type = models.CharField(max_length=25, default="multi-speciality")

class Patients(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=28)
    email = models.CharField(max_length=40)
    mobile_number = models.CharField(max_length=14)
    age = models.IntegerField()
    weight = models.IntegerField()
    height = models.IntegerField()
    gender = models.CharField(max_length=3)
    occupation = models.CharField(max_length=20)
    martial_status = models.CharField(max_length=20)
    blood_group = models.CharField(max_length=4)
    registred_date = models.DateField()
    created_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE)
    is_created_by_staff = models.BooleanField()
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)


class Pharmacy(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    pharmacy_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=14)
    hospital_id = models.ForeignKey(Hospitals, to_field='id', on_delete=models.CASCADE)
    originally_registered_date = models.DateField()
    registered_date = models.DateField()
    timestamp = models.DateTimeField()
    regisrted_by = models.ForeignKey(Profiles, to_field='id',on_delete=models.CASCADE)
    _medicine = models.TextField()


class Medicine(models.Model):
    id = models.AutoField(primary_key=True)
    brand_name = models.CharField(max_length=25)
    drug_name = models.CharField(max_length=35)
    category = models.CharField(max_length=35)
    dosage = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    description = models.TextField()
    created_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE)
    created_date = models.DateField()
    pharmacy_id = models.ForeignKey(Pharmacy, to_field='id', on_delete=models.CASCADE)


class MedicineOrder(models.Model):
    id = models.AutoField(primary_key=True)
    generated_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='gen_by')
    generated_for = models.ForeignKey(Patients, to_field='id', on_delete=models.CASCADE)
    generated_date = models.DateTimeField()
    pharmacy_id = models.ForeignKey(Pharmacy, to_field='id', on_delete=models.CASCADE)
    accepted_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='medicineorder_acc_by')
    issued_date = models.DateTimeField()
    medicines = models.TextField()


class Lab(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    lab_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=20)
    hospital_id = models.ForeignKey(Hospitals, to_field='id', on_delete=models.CASCADE)
    originally_registered_date = models.DateTimeField()
    registered_date = models.DateTimeField()
    regisrted_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE)


class Department(models.Model):
    id = models.AutoField(primary_key=True)
    Department_name = models.CharField(max_length=30)
    is_same_as_hospital_address = models.BooleanField()
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    department_phone_number = models.CharField(max_length=14)
    hospital_id = models.ForeignKey(Hospitals, to_field='id', on_delete=models.CASCADE)
    registered_date = models.DateTimeField()
    regisrted_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE)


class Staff(models.Model):
    #id = models.IntegerField(primary_key=True)
    id = models.AutoField(primary_key=True,)
    specialization = models.CharField(max_length=25,default=None, blank=True, null=True)
    profile_id = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='staff_prof_id')
    highest_qualification = models.CharField(max_length=30)
    studied_at = models.CharField(max_length=35)
    work_phone_number = models.CharField(max_length=14)
    work_email_address = models.CharField(max_length=40)
    overall_work_experience = models.IntegerField()
    #experience_at_this_hospital = models.IntegerField()
    hospital_id = models.ForeignKey(Hospitals, to_field='id', on_delete=models.CASCADE)
    department_id = models.ForeignKey(Department,to_field='id', on_delete=models.CASCADE) #models.IntegerField(Department, to_field='id')
    pharmacy_id = models.ForeignKey(Pharmacy, to_field='id', on_delete=models.CASCADE)
    lab_id = models.ForeignKey(Lab, to_field='id', on_delete=models.CASCADE)
    status = models.CharField(max_length=15)
    approved_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='staff_appr_by')
    licence_number = models.CharField(max_length=20)
    doctor_fee = models.DecimalField(max_digits=5,decimal_places=2)


class LabReports(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=32)
    lab_id = models.ForeignKey(Lab, to_field='id', on_delete=models.CASCADE)


class Appointments(models.Model):
    id = models.AutoField(primary_key=True)
    patient_id = models.ForeignKey(Patients, to_field='id', on_delete=models.CASCADE)
    doctor_id = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE)
    hospital_id = models.ForeignKey(Hospitals, to_field='id', on_delete=models.CASCADE)
    department_id = models.ForeignKey(Department, to_field='id', on_delete=models.CASCADE)
    pharmacy_id = models.ForeignKey(Pharmacy, to_field='id', on_delete=models.CASCADE)
    lab_id = models.ForeignKey(Lab, to_field='id', on_delete=models.CASCADE)
    status = models.CharField(max_length=15)
    date = models.DateTimeField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


class Messages(models.Model):
    id = models.AutoField(primary_key=True)
    appointment_id = models.ForeignKey(Appointments, to_field='id', on_delete=models.CASCADE)
    generated_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='msg_gen_by')
    generated_for = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='msg_gen_for')
    message = models.TextField()
    generated_date = models.DateTimeField()


class Reviews(models.Model):
    id = models.AutoField(primary_key=True)
    review_content = models.TextField()
    #reviewTimeStamp = models.DateTimeField()
    reviewTimeStamp = models.DateField(default=timezone.now, blank=True)
    review_for = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='_review_for')
    review_by = models.ForeignKey(Profiles, to_field='id', on_delete=models.CASCADE, related_name='_review_by')
    review_stars = models.IntegerField()

class StaticImages(models.Model):
    id = models.AutoField(primary_key=True)
    image_title = models.CharField(max_length=20)
    encoded_image = models.TextField()
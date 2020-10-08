from datetime import datetime

from django.db import models


# Create your models here.

class Profiles(models.Model):
    id = models.IntegerField(primary_key=True)  # [pk, increment] // auto-increment
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=28)
    email = models.CharField(max_length=40)
    user_name = models.CharField(max_length=15)
    password = models.CharField(max_length=32)
    registred_date = models.DateField()
    date_of_birth = models.DateField()
    security_question = models.CharField(40)
    security_answer = models.CharField(15)
    password_attempts = models.IntegerField()
    last_login_date = models.DateField()
    status = models.CharField(12)
    profile_pic = models.BinaryField()
    profile_type = models.CharField(max_length=15)  


class Hospitals(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=60)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    area = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    hospital_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=20)
    originally_registered_date = models.DateField(default=datetime.now().date(), blank=True)
    regisrted_by = models.ForeignKey(Profiles, db_column='id')
    # models.DateField(default=datetime.now().date(),blank=True)
    registered_date = models.DateField(default=datetime.now().date(), blank=True)


class Patients(models.Model):
    id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=28)
    email = models.CharField(max_length=40)
    mobile_number = models.CharField(max_length=14)
    age = models.IntegerField()
    weight = models.IntegerField()
    height = models.IntegerField()
    gender = models.CharField(3)
    occupation = models.CharField(20)
    martial_status = models.CharField(20)
    blood_group = models.CharField(4)
    registred_date = models.DateField()
    created_by = models.ForeignKey(Profiles, db_column='id')  # -int[ref: > Profiles.id]
    is_created_by_staff = models.BooleanField()  # -boolean
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)


class Pharmacy(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=25)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    pharmacy_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=14)
    hospital_id = models.ForeignKey(Hospitals, db_column='id')  # int[ref: > h.id]
    originally_registered_date = models.DateField()
    registered_date = models.DateField()
    timestamp = models.DateTimeField()
    regisrted_by = models.Model(Profiles, db_column='id')
    medicine = models.TextField()


class Medicine(models.Model):
    id = models.IntegerField(primary_key=True)
    brand_name = models.CharField(max_length=25)
    drug_name = models.CharField(max_length=35)
    category = models.CharField(max_length=35)
    dosage = models.CharField(max_length=30)
    price = models.DecimalField()
    description = models.TextField()
    created_by = models.ForeignKey(Profiles, db_column='id')
    created_date = models.DateField()
    pharmacy_id = models.ForeignKey(Pharmacy, db_column='id')


class MedicineOrder(models.Model):
    id = models.IntegerField(primary_key=True)
    generated_by = models.ForeignKey(Profiles, db_column='id')
    generated_for = models.ForeignKey(Patients, db_column='id')
    generated_date = models.DateTimeField()
    pharmacy_id = models.ForeignKey(Pharmacy, db_column='id')
    accepted_by = models.ForeignKey(Pharmacy, db_column='id')
    issued_date = models.DateTimeField()
    medicines = models.TextField()


class Lab(models.Model):
    id = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=30)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    lab_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=20)
    hospital_id = models.ForeignKey(Hospitals, db_column='id')  # int [ref: > h.id]
    originally_registered_date = models.DateTimeField()
    registered_date = models.DateTimeField()  # timestamp
    regisrted_by = models.ForeignKey(Profiles, db_column='id')  # int [ref: > Profiles.id] // admin_id


class Department(models.Model):
    id = models.IntegerField(primary_key=True)
    Department_name = models.CharField(max_length=30)
    is_same_as_hospital_address = models.BooleanField()
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    department_phone_number = models.CharField(max_length=14)
    hospital_id = models.ForeignKey(Hospitals, db_column='id')  # int [ref: > h.id]
    registered_date = models.DateTimeField()  # timestamp
    regisrted_by = models.ForeignKey(Profiles, db_column='id')  # int [ref: > Profiles.id]


class Staff(models.Model):
    id = models.IntegerField(primary_key=True)
    profile_id = models.ForeignKey(Profiles, db_column='id')  # int [ref: > Profiles.id]
    highest_qualification = models.CharField(max_length=30)  # varchar
    studied_at = models.CharField(max_length=35)  # varchar
    work_phone_number = models.CharField(max_length=14)
    work_email_address = models.CharField(max_length=40)
    overall_work_experience = models.IntegerField()
    experience_at_this_hospital = models.IntegerField()
    hospital_id = models.ForeignKey(Hospitals, db_column='id')  # int [ref: > h.id]
    department_id = models.IntegerField(Department, db_column='id')  # int [ref: > Department.id]
    pharmacy_id = models.IntegerField(Pharmacy, db_column='id')  # int [ref: > Pharmacy.id]
    lab_id = models.ForeignKey(Lab, db_column='id')  # int [ref: > Lab.id]
    status = models.CharField(15)  # varchar //pending approval, active
    approved_by = models.ForeignKey(Profiles, db_column='id')  # [ref: > Profiles.id]
    licence_number = models.CharField(max_length=20)
    doctor_fee = models.DecimalField()


class LabReports(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=32)
    lab_id = models.ForeignKey(Lab, db_column='id')  # int[ref: > Lab.id]


class Appointments(models.Model):
    id = models.IntegerField(primary_key=True)
    patient_id = models.ForeignKey(Patients, db_column='id')
    doctor_id = models.ForeignKey(Profiles, db_column='id')
    hospital_id = models.ForeignKey(Hospitals, db_column='id')
    department_id = models.ForeignKey(Department, db_column='id')  # int[ref: > Department.id]
    pharmacy_id = models.ForeignKey(Pharmacy, db_column='id')  # int[ref: > Pharmacy.id]
    lab_id = models.ForeignKey(Lab, db_column='id')  # int[ref: > Lab.id]
    status = models.CharField(15)  # varchar //pending approval, active
    date = models.DateTimeField()
    start_time = models.DateTimeField()  # time
    end_time = models.DateTimeField()  # time


class Messages(models.Model):
    id = models.IntegerField(primary_key=True)
    appointment_id = models.ForeignKey(Appointments, db_column='id') #int[ref: > Appointments.id]
    generated_by = models.ForeignKey(Profiles, db_column='id') #int[ref: > Profiles.id]
    generated_for = models.ForeignKey(Profiles, db_column='id') #int[ref: > Profiles.id]
    message = models.TextField()
    generated_date = models.DateTimeField()
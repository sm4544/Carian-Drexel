import json
import pickle

from backend.models import *
from django.test import TestCase, Client
from django.urls import reverse
from backend.encryption import encrypt
from datetime import date


class TestStaff(TestCase):
    def setUp(self):
        self.client = Client()

        profile = Profiles.objects.create(first_name='adi-root', last_name='testing', email='adi@gmail.com',
                                          username='adiRoot',
                                          password=encrypt('aditya123'), registred_date=datetime.utcnow(),
                                          date_of_birth='1991-05-05', security_question='NO', security_answer='NO',
                                          password_attempts=0, last_login_date=datetime.utcnow(), status='test',
                                          profile_pic=bytes("NA", 'utf-8'), profile_type='admin')
        self.profile_id = profile.id
        hospital = Hospitals.objects.get_or_create(name='VNR', addressine1='address1', addressine2='address2',
                                                   area='Baring Street', city='Philadelphia', state='PA',
                                                   pincode='19104', hospital_phone_number='7768913458',
                                                   licence_number='121214',
                                                   originally_registered_date=datetime.now(tz=timezone.utc),
                                                   regisrted_by=Profiles.objects.get(id=self.profile_id),
                                                   registered_date=datetime.now(tz=timezone.utc),
                                                   type='multi-speciality')
        # print(hospital)
        self.hospital_id = hospital[0].id
        department = Department.objects.get_or_create(Department_name='random', is_same_as_hospital_address=True,
                                                      addressine2='address1', city='Philadelphia', state='PA',
                                                      pincode='19104', department_phone_number='4567891234',
                                                      registered_date=datetime.now(tz=timezone.utc),
                                                      regisrted_by_id=self.profile_id,
                                                      hospital_id_id=self.hospital_id)

        self.department_id = department[0].id
        # print('Profile = {}'.format(profile.id))
        pharmacy = Pharmacy.objects.get_or_create(name='VNR Pharma', addressine1='', addressine2='address2',
                                                  city='Philly', state='PA', pincode='19104',
                                                  pharmacy_phone_number='1466456987', licence_number='1244575',
                                                  hospital_id=Hospitals.objects.get(id=self.hospital_id),
                                                  # originally_registered_date=datetime.utcnow(),
                                                  # registered_date=datetime.utcnow(), timestamp=datetime.utcnow(),
                                                  originally_registered_date=datetime.now(tz=timezone.utc),
                                                  registered_date=datetime.now(tz=timezone.utc),
                                                  timestamp=datetime.now(tz=timezone.utc),
                                                  regisrted_by=Profiles.objects.get(id=self.profile_id),
                                                  _medicine='test')
        # print(pharmacy)
        self.pharmacy_id = pharmacy[0].id

        lab = Lab.objects.get_or_create(name='VNR Lab', addressine1='address1', addressine2='address2', city='Philly',
                                        state='PA', pincode='19104', lab_phone_number='1889876098',
                                        licence_number='1134456', hospital_id=Hospitals.objects.get(id=hospital[0].id),
                                        originally_registered_date=datetime.now(tz=timezone.utc),
                                        registered_date=datetime.now(tz=timezone.utc),
                                        regisrted_by=Profiles.objects.get(id=self.profile_id))
        self.lab_id = lab[0].id
        print("LAB=", lab, self.lab_id)
        # print(self.lab_id)
        staff = Staff.objects.get_or_create(highest_qualification='MBBS', studied_at='VNR',
                                            specialization='Gynaecology', licence_number='1112344',
                                            overall_work_experience=4, work_phone_number='4841239889',
                                            work_email_address='abc@gmail.com', status='inactive',
                                            doctor_fee=75.0, approved_by_id=self.profile_id,
                                            hospital_id_id=self.hospital_id, department_id_id=self.department_id,
                                            lab_id_id=self.lab_id, pharmacy_id_id=self.pharmacy_id,
                                            profile_id_id=self.profile_id)
        print(staff)
        self.staff_id = staff[0].id

        patient = Patients.objects.get_or_create(first_name='MB', last_name='AA',
                                                 email='mbabu@gmail.com', mobile_number='4568889121', age=23,
                                                 weight=180, height=180, gender='M', occupation='SDE',
                                                 martial_status='Single', blood_group='O+',
                                                 registred_date=datetime.utcnow().date(),
                                                 is_created_by_staff=False, addressine1="Address1",
                                                 addressine2="Address2",
                                                 city="Philly", state="PA", dob=datetime.utcnow().date(),
                                                 hobbies="Fake Hobby", recurring_problems="NA",
                                                 allergies_to_medicine="NA",
                                                 use_of_alcohol="NA", use_of_tobacco="NA", physical_activities="NA",
                                                 pincode='19104', relation="NA",
                                                 related_profile=Profiles.objects.get(id=self.profile_id))
        self.patient_id = patient[0].id

        lab_report = LabReports.objects.get_or_create(name='VNR LAB',
                                                      category='Pulmonary',
                                                      price=120.0, lab_id=Lab.objects.get(id=self.lab_id))
        self.lab_report_id = lab_report[0].id

        medicine = Medicine.objects.get_or_create(drug_name="Fake Drug",
                                dosage="Sample Dosage", pharmacy=Pharmacy.objects.get(id=self.pharmacy_id))

        self.medicine_id = medicine[0].id
    def test_get_staff(self):
        response = self.client.get(reverse('staff-list'))
        assert response.status_code, 200

    def test_get_create_staff_with_incorrect_payload(self):
        payload = {
            "highest_degree": "MBBS", "specilization": "Dental", "college_name": "sidd", "overall_work_experience": "2",
            "work_phone_number": "213",
            "work_email_address": "doctor18@carian.com", "licence_number": "123456", "doctor_fee": "123",
            "hospital_id": "2", "department_id": 1,
            "pharmacy_id": 1, "lab_id": 1
        }
        response = self.client.post(reverse('staff-list'), data=payload, content_type='application/json')
        assert response.status_code, 409

    def test_staff_create_with_key_error(self):
        payload = {}
        response = self.client.post(reverse('staff-list'), data=payload, content_type='application/json')
        assert response.status_code, 409

    def test_staff_create_staff_with_correct_payload(self):
        payload = {
            "highest_degree": "MBBS", "specilization": "Dental", "college_name": "PNR", "overall_work_experience": 2,
            "work_phone_number": "2133469999",
            "work_email_address": "doctor@gmail.com", "licence_number": "123456", "doctor_fee": 123.0,
            "hospital_id": self.hospital_id, "department_id": self.department_id,
            "pharmacy_id": self.pharmacy_id, "lab_id": self.lab_id, "profileid": self.profile_id,
            "approved_by_id": self.profile_id
        }
        response = self.client.post(reverse('staff-list'), data=payload, content_type='application/json')
        assert response.status_code, 201

    def test_appointments_endpoint(self):
        payload = {"doctorID": self.staff_id}
        response = self.client.post(reverse('appointments-data'), data=payload, content_type='application/json')
        # print(response)
        assert response.status_code, 200

    def test_appointments_endpoint_incorrect_payload(self):
        payload = {}
        response = self.client.post(reverse('appointments-data'), data=payload, content_type='application/json')
        # print(response)
        assert response.status_code, 409

    def test_hospitals_list(self):
        response = self.client.get(reverse('hospitals-simple'))
        assert response.status_code, 200

    def test_patients_list(self):
        response = self.client.get(reverse('patients-list'))
        # print('Patients', response)
        assert response.status_code, 200

    def test_create_doctor_working_hours_with_key_error(self):
        payload = {}
        response = self.client.post(reverse('doctorworkinghours-list'), data=payload, content_type='application/json')
        assert response.status_code, 409

    def test_create_doctor_working_hours_with_invalid_doctor_id(self):
        payload = {"doctor_id": 19,
                   "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00", "Wednesday": "10:00-18:00",
                                     "Thursday": "10:00-18:00", "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                     "Sunday": "10:00-18:00"}}
        response = self.client.post(reverse('doctorworkinghours-list'), data=payload, content_type='application/json')
        assert response.status_code, 409

    def test_doctor_retrieve_with_doctor_id(self):
        # https://hospitalmanagementbackend.herokuapp.com/DoctorWorkingHours/24
        response = self.client.get(reverse('doctorworkinghours-detail', args=[self.profile_id]))
        # print('doctor', response)
        assert response.status_code, 200

    def test_doctor_retrieve_with_invalid_doctor_id(self):
        # https://hospitalmanagementbackend.herokuapp.com/DoctorWorkingHours/24
        response = self.client.get(reverse('doctorworkinghours-detail', args=[200]))
        # print('doctor', response)
        assert response.status_code, 200

    def test_hospital_create_working_hours(self):
        payload = {"hospital_id": self.hospital_id, "monst": "01:00PM", "monet": "06:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM", "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM",
                   "frist": "01:00PM", "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM",
                   "sunet": "06:00PM"}
        response = self.client.post(reverse('hospitalworkinghours-list'), data=payload)
        assert response.status_code, 201

    def test_hospital_create_working_hours_with_key_error(self):
        payload = {"hospital_id": self.hospital_id, "monst": "01:00PM", "monet": "06:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM", "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM",
                   "frist": "01:00PM", "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM"}
        response = self.client.post(reverse('hospitalworkinghours-list'), data=payload)
        assert response.status_code, 409

    def test_hospital_create_working_hours_with_invalid_hospital(self):
        payload = {"hospital_id": 600, "monst": "01:00PM", "monet": "06:00PM", "tuest": "01:00PM", "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM"}
        response = self.client.post(reverse('hospitalworkinghours-list'), data=payload)
        assert response.status_code, 409

    def test_get_hospital_working_hours(self):
        response = self.client.get(reverse('hospitalworkinghours-list'))
        # print('Working Hours', response)
        assert response.status_code, 200

    def test_put_hospital_working_hours(self):
        HospitalWorkingHours.objects.get_or_create(hospital_id_id=self.hospital_id,
                                                   mon_start_time="1:00PM",
                                                   mon_end_time="6:00PM", tue_start_time="1:00PM",
                                                   tue_end_time="6:00PM", wed_start_time="1:00PM",
                                                   wed_end_time="6:00PM",
                                                   thu_start_time="1:00PM", thu_end_time="6:00PM",
                                                   fri_start_time="1:00PM",
                                                   fri_end_time="6:00PM", sat_start_time="1:00PM",
                                                   sat_end_time="6:00PM",
                                                   sun_start_time="1:00PM", sun_end_time="6:00PM")
        payload = {"hospital_id": self.hospital_id, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM", "sunet": "04:00PM"}
        response = self.client.put(reverse('hospitalworkinghours-list'), data=payload, content_type='application/json')
        # print('Updated Working hours', response.content, response.status_code, response)
        assert response.status_code, 202

    def test_pharmacy_update(self):
        payload = {"id": self.pharmacy_id,
                   "name": "VNR-Pharma",
                   "addressine1": "address1",
                   "addressine2": "address2",
                   "city": "Allentown",
                   "state": "PA",
                   "pincode": "19102",
                   "pharmacy_phone_number": "7894538833", "licence_number": "1212122",
                   "originally_registered_date": date.today()
                   }
        response = self.client.put(reverse('pharmacy-list'), data=payload, content_type='application/json')
        assert response.status_code, 202

    def test_update_staff(self):
        payload = {"id": self.staff_id,
                   "highest_degree": "BDS",
                   "college_name": "VNR",
                   "specilization": "MBBS",
                   "overall_work_experience": 5,
                   "work_phone_number": "8979698489",
                   "work_email_address": "updatetest@carian.com",
                   "doctor_fee": 125.0,
                   "licence_number": "991121"}
        response = self.client.put(reverse('staff-list'), data=payload, content_type='application/json')
        # print('Update staff',response,response.content,)
        assert response.status_code, 202

    def test_lab_working_hours_create(self):
        payload = {"lab_id": self.lab_id, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM", "sunet": "04:00PM"}
        response = self.client.post(reverse('labworkinghours-list'), data=payload, content_type='application/json')
        assert response.status_code, 201

    def test_lab_working_hours_create_with_key_error(self):
        payload = {"lab_id": self.lab_id, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM"}
        response = self.client.post(reverse('labworkinghours-list'), data=payload, content_type='application/json')
        # print('LabWH', response.content)
        assert response.status_code, 409

    def test_lab_working_hours_create_with_no_lab_id(self):
        payload = {"lab_id": -1, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM"}
        response = self.client.post(reverse('labworkinghours-list'), data=payload, content_type='application/json')
        assert response.status_code, 204

    def test_lab_working_hours_create_with_invalid_lab_id(self):
        payload = {"lab_id": 2882, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM", "sunet": "04:00PM"}
        response = self.client.post(reverse('labworkinghours-list'), data=payload, content_type='application/json')
        assert response.status_code, 409

    def test_lab_working_hours_get(self):
        response = self.client.get(reverse('labworkinghours-list'))
        assert response.status_code, 200

    def test_lab_working_hours_update(self):
        create_payload = {"lab_id": self.lab_id, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                          "tueet": "06:00PM",
                          "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM",
                          "frist": "01:00PM",
                          "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM",
                          "sunet": "04:00PM"}
        res = self.client.post(reverse('labworkinghours-list'), data=create_payload, content_type='application/json')
        print(res, res.content)
        payload = {"lab_id": self.lab_id, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
                   "tueet": "06:00PM",
                   "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
                   "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM", "sunet": "04:00PM"}
        response = self.client.put(reverse('labworkinghours-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 202)

    def test_get_hospital_summary(self):
        payload = {"hospital_id": self.hospital_id}
        HospitalWorkingHours.objects.get_or_create(hospital_id=Hospitals.objects.get(id=self.hospital_id),
                                                   mon_start_time="01:00PM",
                                                   mon_end_time="01:00PM", tue_start_time="01:00PM",
                                                   tue_end_time="01:00PM", wed_start_time="01:00PM",
                                                   wed_end_time="01:00PM",
                                                   thu_start_time="01:00PM", thu_end_time="01:00PM",
                                                   fri_start_time="01:00PM",
                                                   fri_end_time="01:00PM", sat_start_time="01:00PM",
                                                   sat_end_time="01:00PM",
                                                   sun_start_time="01:00PM", sun_end_time="01:00PM")
        response = self.client.post(reverse('hospitalsummary'), data=payload, content_type='application/json')
        # print('Hospital Summary', response, response.content)
        assert response.status_code, 200

    def test_create_doctor_working_hours(self):
        # payload = {"lab_id": 2882, "monst": "01:00PM", "monet": "09:00PM", "tuest": "01:00PM",
        #            "tueet": "06:00PM",
        #            "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM", "thuet": "06:00PM", "frist": "01:00PM",
        #            "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM", "sunst": "01:00PM", "sunet": "04:00PM"}
        payload = {"doctor_id": self.profile_id,
                   "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00",
                                     "Wednesday": "10:00-18:00", "Thursday": "10:00-18:00",
                                     "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                     "Sunday": "10:00-18:00"}}

        response = self.client.post(reverse('doctorworkinghours-list'), data=payload, content_type='application/json')
        # print('test_create',response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_get_doctor_summary(self):
        workingHours_payload = {"doctor_id": self.profile_id,
                                "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00",
                                                  "Wednesday": "10:00-18:00", "Thursday": "10:00-18:00",
                                                  "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                                  "Sunday": "10:00-18:00"}}
        res1 = self.client.post(reverse('doctorworkinghours-list'), data=workingHours_payload,
                                content_type='application/json')
        # print('test ds', res1, res1.content)

        payload = {"doctor_id": self.profile_id}
        response = self.client.post(reverse('doctorsummary'), data=payload, content_type='application/json')
        # print("get_DS=", response.content)
        self.assertEqual(response.status_code, 200)

    def test_create_hospital_with_valid_data(self):
        payload = {'name': "VNR", "addressine1": "address1",
                   "addressine2": "address1", "area": "Baring", "city": "Philly", "state": "PA", "pincode": "19104",
                   "hospital_phone_number": "6678967845",
                   "licence_number": "485858",
                   "originally_registered_date": datetime.utcnow(),
                   "registered_date": datetime.utcnow(),
                   "regisrted_by_id": self.profile_id}
        response = self.client.post(reverse('hospitals-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_create_hospital_with_no_name(self):
        payload = {'name': "", "addressine1": "address1",
                   "addressine2": "address1", "area": "Baring", "city": "Philly", "state": "PA", "pincode": "19104",
                   "hospital_phone_number": "6678967845",
                   "licence_number": "485858",
                   "originally_registered_date": datetime.utcnow(),
                   "registered_date": datetime.utcnow(),
                   "regisrted_by_id": self.profile_id}
        response = self.client.post(reverse('hospitals-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 409)

    def test_create_hospital_with_no_licence(self):
        payload = {'name': "sdsd", "addressine1": "address1",
                   "addressine2": "address1", "area": "Baring", "city": "Philly", "state": "PA", "pincode": "19104",
                   "hospital_phone_number": "6678967845",
                   "licence_number": "",
                   "originally_registered_date": datetime.utcnow(),
                   "registered_date": datetime.utcnow(),
                   "regisrted_by_id": self.profile_id}
        response = self.client.post(reverse('hospitals-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 409)

    def test_get_hospitals(self):
        response = self.client.get(reverse('hospitals-list'))
        # print(response, response.status_code)
        self.assertEqual(response.status_code, 200)

    def test_put_hospitals(self):
        payload = {'id': self.hospital_id,
                   "name": "new VNR",
                   "addressine1": "address1",
                   "addressine2": "address2",
                   "area": "Baring",
                   "city": "Philly",
                   "state": "PA",
                   "pincode": "19103",
                   "hospital_phone_number": "8885638192",
                   "licence_number": "456733",
                   "originally_registered_date": datetime.utcnow().strftime('%Y-%m-%d')}
        response = self.client.put(reverse('hospitals-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 202)

    def test_profiles_create(self):
        payload = {"first_name": "Adi",
                   "last_name": "VL",
                   "email": "adivln@gmail.com",
                   "username": "adivln1234",
                   "password": "aditya17",
                   "date_of_birth": datetime.utcnow().strftime('%Y-%m-%d'),
                   "security_question": "Q1", "security_answer": "A1", "profile_pic": "NA", "profile_type": "Admin"}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_profiles_create_with_no_email(self):
        payload = {"first_name": "Adi",
                   "last_name": "VL",
                   "email": "",
                   "username": "adivln1234",
                   "password": "aditya17",
                   "date_of_birth": datetime.utcnow().strftime('%Y-%m-%d'),
                   "security_question": "Q1", "security_answer": "A1", "profile_pic": "NA", "profile_type": "Admin"}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_profiles_create_with_no_password(self):
        payload = {"first_name": "Adi",
                   "last_name": "VL",
                   "email": "abc@gmail.com",
                   "username": "adivln1234",
                   "password": "",
                   "date_of_birth": datetime.utcnow().strftime('%Y-%m-%d'),
                   "security_question": "Q1", "security_answer": "A1", "profile_pic": "NA", "profile_type": "Admin"}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_profiles_create_with_no_name(self):
        payload = {"first_name": "",
                   "last_name": "",
                   "email": "adivln@gmail.com",
                   "username": "adivln1234",
                   "password": "aditya17",
                   "date_of_birth": datetime.utcnow().strftime('%Y-%m-%d'),
                   "security_question": "Q1", "security_answer": "A1", "profile_pic": "NA", "profile_type": "Admin"}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_profiles_create_no_dob(self):
        payload = {"first_name": "Adi",
                   "last_name": "VL",
                   "email": "adivln@gmail.com",
                   "username": "adivln1234",
                   "password": "aditya17",
                   "date_of_birth": "",
                   "security_question": "Q1", "security_answer": "A1", "profile_pic": "NA", "profile_type": "Admin"}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_profiles_create_with_no_profile_type(self):
        payload = {"first_name": "Adi",
                   "last_name": "VL",
                   "email": "adivln@gmail.com",
                   "username": "adivln1234",
                   "password": "aditya17",
                   "date_of_birth": datetime.utcnow().strftime('%Y-%m-%d'),
                   "security_question": "Q1", "security_answer": "A1", "profile_pic": "NA", "profile_type": ""}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_profiles_create_with_key_error(self):
        payload = {}
        response = self.client.post(reverse('profiles-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_login_with_username_password(self):
        payload = {"username": "adiRoot", "password": "aditya123"}
        response = self.client.post(reverse('post'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_login_with_username_password_wrong(self):
        payload = {"username": "adiRoot", "password": "aditya12343"}
        response = self.client.post(reverse('post'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 403)

    def test_doctor_simple(self):
        response = self.client.get(reverse('doctors-simple'))
        self.assertEqual(response.status_code, 200)

    def test_get_pharmacy(self):
        response = self.client.get(reverse('pharmacy-list'))
        self.assertEqual(response.status_code, 200)

    def test_create_pharmacy(self):
        payload = {"name": "AEC Pharma", "addressine1": "address1", "addressine2": "address2", "city": "Philly",
                   "state": "PA", "pincode": "19104",
                   "pharmacy_phone_number": "7584479087", "licence_number": "174839",
                   "originally_registered_date": datetime.utcnow().strftime('%Y-%m-%d'),
                   "medicine": "NA", "hospital_id_id": self.hospital_id, "regisrted_by_id": self.profile_id}
        response = self.client.post(reverse('pharmacy-list'), data=payload, content_type='application/json')
        # print("CreatePharmacy", response.content, response)
        self.assertEqual(response.status_code, 201)

    def test_create_pharmacy_with_column_missing(self):
        payload = {"name": "AEC Pharma", "addressine1": "address1", "addressine2": "address2",
                   "state": "PA", "pincode": "19104",
                   "pharmacy_phone_number": "7584479087", "licence_number": "174839",
                   "originally_registered_date": datetime.utcnow().strftime('%Y-%m-%d'),
                   "medicine": "NA", "hospital_id_id": self.hospital_id, "regisrted_by_id": self.profile_id}
        response = self.client.post(reverse('pharmacy-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_medicines_get(self):
        response = self.client.get(reverse('medicine-list'))
        self.assertEqual(response.status_code, 200)

    def test_medicines_create(self):
        column_names = ['drug_name', 'dosage', 'pharmacy']
        payload = {'drug_name': 'Paracetamol', 'dosage': 'Twice Test', 'pharmacy': self.pharmacy_id}
        response = self.client.post(reverse('medicine-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_medicines_create_with_empty_value(self):
        payload = {'drug_name': '', 'dosage': 'Twice Test', 'pharmacy': self.pharmacy_id}
        response = self.client.post(reverse('medicine-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_medicines_create_with_key_error(self):
        payload = {'dosage': 'Twice Test', 'pharmacy': self.pharmacy_id}
        response = self.client.post(reverse('medicine-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_patients_create(self):
        payload = {
            "first_name": "AB", "last_name": "D",
            "email": "abdev@gmail.com",
            "mobile_number": "8879456788", "age": 22,
            "weight": 180, "height": 170,
            "gender": "M", "occupation": "SDE-1", "martial_status": "Single", "blood_group": "O+",
            "is_created_by_staff": False, "addressine1": "address1", "addressine2": "address2", "city": "Philadelphia",
            "state": "PA", "dob": datetime.utcnow().date(),
            "hobbies": "Test Hobby", "recurring_problems": "NA",
            "allergies": "NA", "alcohol": "NA", "tobacco": "NA", "activities": "NA", "pincode": "19104",
            "relation": "Sample", "related_profile": self.profile_id
        }

        response = self.client.post(reverse('patients-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_patients_create_with_empty_value(self):
        payload = {
            "first_name": " ", "last_name": "D",
            "email": "abdev@gmail.com",
            "mobile_number": "8879456788", "age": 22,
            "weight": 180, "height": 170,
            "gender": "M", "occupation": "SDE-1", "martial_status": "Single", "blood_group": "O+",
            "is_created_by_staff": False, "addressine1": "address1", "addressine2": "address2", "city": "Philadelphia",
            "state": "PA", "dob": datetime.utcnow().date(),
            "hobbies": "Test Hobby", "recurring_problems": "NA",
            "allergies": "NA", "alcohol": "NA", "tobacco": "NA", "activities": "NA", "pincode": "19104",
            "relation": "Sample", "related_profile": self.profile_id
        }

        response = self.client.post(reverse('patients-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_patients_create_with_invalid_json(self):
        payload = {
            "last_name": "D",
            "email": "abdev@gmail.com",
            "mobile_number": "8879456788", "age": 22,
            "weight": 180, "height": 170,
            "gender": "M", "occupation": "SDE-1", "martial_status": "Single", "blood_group": "O+",
            "is_created_by_staff": False, "addressine1": "address1", "addressine2": "address2", "city": "Philadelphia",
            "state": "PA", "dob": datetime.utcnow().date(),
            "hobbies": "Test Hobby", "recurring_problems": "NA",
            "allergies": "NA", "alcohol": "NA", "tobacco": "NA", "activities": "NA", "pincode": "19104",
            "relation": "Sample", "related_profile": self.profile_id
        }

        response = self.client.post(reverse('patients-list'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_appointments(self):
        working_payload = {"doctor_id": self.profile_id,
                           "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00",
                                             "Wednesday": "10:00-18:00", "Thursday": "10:00-18:00",
                                             "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                             "Sunday": "10:00-18:00"}}
        res = self.client.post(reverse('doctorworkinghours-list'), data=working_payload,
                               content_type='application/json')
        # print(res, res.content)
        payload = {"doctorID": self.profile_id}
        response = self.client.post(reverse('appointments-data'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_appointments_with_days(self):
        working_payload = {"doctor_id": self.profile_id,
                           "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00",
                                             "Wednesday": "10:00-18:00", "Thursday": "10:00-18:00",
                                             "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                             "Sunday": "10:00-18:00"}}
        res = self.client.post(reverse('doctorworkinghours-list'), data=working_payload,
                               content_type='application/json')
        payload = {"doctorID": self.profile_id, "days": 31}
        response = self.client.post(reverse('appointments-data'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_appointments_with_key_error(self):
        payload = {"days": 31}
        response = self.client.post(reverse('appointments-data'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_create_appointments(self):
        payload = {"patient_id": self.patient_id, "doctor_id": self.profile_id, "hospital_id": self.hospital_id,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        response = self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        print('YO', response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_create_appointments_with_invalid_json(self):
        payload = {"patient_id": '', "doctor_id": self.staff_id, "hospital_id": self.hospital_id,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        response = self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 409)

    def test_create_appointments_with_key_error(self):
        payload = {"doctor_id": self.staff_id, "hospital_id": self.hospital_id,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        response = self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        print('YO', response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_create_appointments_with_invalid_hospital_id(self):
        payload = {"patient_id": self.patient_id, "doctor_id": self.staff_id, "hospital_id": 4544,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        response = self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 409)

    def test_get_hospital_details(self):
        payload = {'name': 'VNR'}
        response = self.client.post(reverse('hospital-details'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 200)

    def test_get_hospital_details_invalid_name(self):
        payload = {'name': 'Unknown'}
        response = self.client.post(reverse('hospital-details'), data=payload, content_type='application/json')
        # print(response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_get_profile_with_related_patients(self):
        payload = {'profile_id': self.profile_id}
        response = self.client.post(reverse('related_patients'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_get_profile_with_related_patients_with_key_error(self):
        payload = {'profiles_id': self.profile_id}
        response = self.client.post(reverse('related_patients'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_get_profile_with_related_patients_with_invalid_profile(self):
        payload = {'profiles_id': 29991}
        response = self.client.post(reverse('related_patients'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_get_appointment_doctor(self):
        payload = {"doctor_id": self.profile_id, "date": datetime.utcnow().date()}
        response = self.client.post(reverse('appointmentdoctor'), data=payload, content_type='application/json')
        print('apt yo', response, response.content)
        self.assertEqual(response.status_code, 200)

    def test_get_appointment_doctor_with_key_error(self):
        payload = {"date": datetime.utcnow().date()}
        response = self.client.post(reverse('appointmentdoctor'), data=payload, content_type='application/json')
        print('apt yo', response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_get_lab_order(self):
        response = self.client.get(reverse('labreportorders-list'))
        self.assertEqual(response.status_code, 200)

    def test_create_lab_order(self):
        payload = {'doctor_id': self.profile_id, 'patient_id': self.patient_id, 'labreport_id': self.lab_report_id,
                   'lab_id': self.lab_id, 'order_status': 'pending'}
        response = self.client.post(reverse('labreportorders-list'), data=payload, content_type='application/json')
        print('Create Lab', response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_create_lab_order_with_invalid(self):
        payload = {'doctor_id': self.staff_id, 'patient_id': self.profile_id, 'labreport_id': self.lab_report_id,
                   'lab_id': self.lab_id}
        response = self.client.post(reverse('labreportorders-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_create_lab_order_with_invalid_staff_id(self):
        payload = {'doctor_id': 71717, 'patient_id': self.profile_id, 'labreport_id': self.lab_report_id,
                   'lab_id': self.lab_id}
        response = self.client.post(reverse('labreportorders-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_create_lab(self):
        print('YO',Hospitals.objects.all().first())
        payload = {'name': 'VNR Lab', 'addressine1': 'Address1',
                   'addressine2': 'Address2', 'city': 'Philly',
                   'state': 'PA', 'pincode': '19104',
                   'lab_phone_number': '7781239292', 'licence_number': '771737',
                   'originally_registered_date': datetime.now(tz=timezone.utc),
                   'registered_date': datetime.now(tz=timezone.utc),
                   'hospital_id': Hospitals.objects.all().first().id, 'regisrted_by_id': self.profile_id
                   }
        response = self.client.post(reverse('lab-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 201)

    def test_update_lab(self):
        payload = {'name': 'VNR Lab', 'addressine1': 'Address1',
                   'addressine2': 'Address2', 'city': 'Philly',
                   'state': 'PA', 'pincode': '19104','id':self.lab_id,
                   'lab_phone_number': '7781239292', 'licence_number': '771737',
                   'originally_registered_date': datetime.now(tz=timezone.utc),
                   'registered_date': datetime.now(tz=timezone.utc),
                   'hospital_id': Hospitals.objects.all().first().id, 'regisrted_by_id': self.profile_id
                   }
        response = self.client.put(reverse('lab-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 202)

    def test_create_lab_invalid(self):
        payload = {'addressine1': 'Address1',
                   'addressine2': 'Address2', 'city': 'Philly',
                   'state': 'PA', 'pincode': '19104',
                   'lab_phone_number': '7781239292', 'licence_number': '771737',
                   'originally_registered_date': datetime.now(tz=timezone.utc),
                   'registered_date': datetime.now(tz=timezone.utc),
                   'hospital_id_id': 1,
                   }
        response = self.client.post(reverse('lab-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_create_lab_invalid_name(self):
        payload = {'name': '', 'addressine1': 'Address1',
                   'addressine2': 'Address2', 'city': 'Philly',
                   'state': 'PA', 'pincode': '19104',
                   'lab_phone_number': '7781239292', 'licence_number': '771737',
                   'originally_registered_date': datetime.now(tz=timezone.utc),
                   'registered_date': datetime.now(tz=timezone.utc),
                   'hospital_id_id': 88888, 'regisrted_by_id': self.profile_id
                   }
        response = self.client.post(reverse('lab-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_lab_retrieve(self):
        payload = {'doctor_id': self.profile_id, 'patient_id': self.patient_id, 'labreport_id': self.lab_report_id,
                   'lab_id': self.lab_id, 'order_status': 'pending'}
        fake = self.client.post(reverse('labreportorders-list'), data=payload, content_type='application/json')
        print('FAKE=', fake, fake.content)
        print('Report=', LabReportsOrder.objects.all().first().id)
        response = self.client.get(reverse('labreportorders-detail', args=[LabReportsOrder.objects.all().first().id]))
        self.assertEqual(response.status_code, 200)

    def test_create_department(self):
        payload = {"name": "Gynaecology", "addressine1": "address1", "addressine2": "address2",
                   "is_same_as_hospital_address": True, "city": "Philadelphia", "state": "PA",
                   "department_phone_number": "6673839922",
                   "pincode": "19104", "reg_by": self.profile_id, "hospital_id": self.hospital_id}

        response = self.client.post(reverse('department-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_create_department_with_no_name(self):
        payload = {"name": "", "addressine1": "address1", "addressine2": "address2",
                   "is_same_as_hospital_address": True, "city": "Philadelphia", "state": "PA",
                   "department_phone_number": "6673839922",
                   "pincode": "19104", "reg_by": self.profile_id, "hospital_id": self.hospital_id}

        response = self.client.post(reverse('department-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_create_department_with_key_error(self):
        payload = {"name": "Gynaecology", "addressine1": "address1", "addressine2": "address2",
                   "is_same_as_hospital_address": True, "city": "Philadelphia", "state": "PA",
                   "pincode": "19104", "reg_by": self.profile_id, "hospital_id": self.hospital_id}

        response = self.client.post(reverse('department-list'), data=payload, content_type='application/json')
        print(response, response.content)
        self.assertEqual(response.status_code, 409)

    def test_get_appoint_summary(self):
        payload = {"patient_id": self.patient_id, "doctor_id": self.profile_id, "hospital_id": self.hospital_id,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        test_payload = {"appointment_id": Appointments.objects.all().first().id}
        response = self.client.post(reverse('appointmentsummary'), data=test_payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_get_appoint_summary_error(self):
        payload = {"patient_id": self.patient_id, "doctor_id": self.profile_id, "hospital_id": self.hospital_id,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        res = self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        print(res, res.content)
        test_payload = {"fake_id": Appointments.objects.all().first().id}
        response = self.client.post(reverse('appointmentsummary'), data=test_payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_get_appoint_summary_key_error(self):
        payload = {"patient_id": self.patient_id, "doctor_id": self.profile_id, "hospital_id": self.hospital_id,
                   "appointment_time": "2021-02-10",
                   "timeslot": "2021-03-09 10:00", "timeslot_end": "2021-02-04 1:30",
                   "appointment_status": "Pending", "profile_id": self.profile_id}
        res = self.client.post(reverse('appointments-list'), data=payload, content_type='application/json')
        print(res, res.content)
        test_payload = {"appointment_id": 9999}
        response = self.client.post(reverse('appointmentsummary'), data=test_payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_create_reviews(self):
        payload = {
            "review_stars": 5, "review_content": "Review Content",
            "review_for": self.profile_id, "review_by": self.profile_id,
            "hospital": self.hospital_id
        }
        response = self.client.post(reverse('reviews-list'), data=payload, content_type='application/json')
        print('YYY', response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_create_reviews_error(self):
        payload = {
            "review_stars": 5, "review_content": "Review Content",
            "review_for": self.profile_id, "review_by": 7767
        }
        response = self.client.post(reverse('reviews-list'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 409)

    def test_getHospital_with_working_hours(self):
        wh_payload = {"hospital_id": self.hospital_id, "monst": "01:00PM", "monet": "06:00PM", "tuest": "01:00PM",
                      "tueet": "06:00PM", "wedst": "01:00PM", "wedet": "06:00PM", "thust": "01:00PM",
                      "thuet": "06:00PM",
                      "frist": "01:00PM", "friet": "06:00PM", "satst": "01:00PM", "satet": "06:00PM",
                      "sunst": "01:00PM",
                      "sunet": "06:00PM"}
        create_working_hours_response = self.client.post(reverse('hospitalworkinghours-list'), data=wh_payload)
        payload = {"hospital_id": self.hospital_id}
        res = self.client.post(reverse('hospital-workinghours'), data=payload, content_type='application/json')
        self.assertEqual(res.status_code, 200)

    def test_lab_reports_create(self):
        # name = data['name'], category = data['category'], \
        # price = data['price'], lab_id_id = data['lab_id']
        payload = {'name': 'Temp Report', 'category': 'RTPCR', 'price': '120', 'lab_id': self.lab_id}
        response = self.client.post(reverse('lab_reports-list'), data=payload, content_type='application/json')
        print('lab_rep', response, response.content)
        self.assertEqual(response.status_code, 201)

    def test_lab_reports_create_incorrect(self):
        payload = {'name': '', 'category': 'RTPCR', 'price': '120', 'lab_id': self.lab_id}
        response = self.client.post(reverse('lab_reports-list'), data=payload, content_type='application/json')
        print('lab_rep', response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_lab_reports_create_incorrect_id(self):
        payload = {'name': 'Report', 'category': 'RTPCR', 'price': '120', 'lab_id': 9999}
        response = self.client.post(reverse('lab_reports-list'), data=payload, content_type='application/json')
        # print('lab_rep',response, response.content)
        self.assertEqual(response.status_code, 400)

    def test_hospital_departments(self):
        payload={'hospital_id':self.hospital_id}
        response = self.client.post(reverse('hospitaldepartments'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_hospital_departments_invalid(self):
        payload={'hospital_id':7717}
        response = self.client.post(reverse('hospitaldepartments'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 400)

    def test_doctor_departments(self):
        payload={'hospital_id':self.hospital_id,'department_id':self.department_id}
        response = self.client.post(reverse('doctordepartments'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 200)
    def test_doctor_departments_invalid(self):
        payload={'hospital_id':88,'department_id':self.department_id}
        response = self.client.post(reverse('doctordepartments'), data=payload, content_type='application/json')
        self.assertEqual(response.status_code, 404)

    def test_pharmacy_medicine(self):
        payload={"pharmacy":self.pharmacy_id}
        res = self.client.post(reverse('pharmacymedicine'), data=payload, content_type='application/json')
        self.assertEqual(res.status_code, 200)

    def test_pharmacy_medicine_invalid(self):
        payload={"pharmacy":888}
        res = self.client.post(reverse('pharmacymedicine'), data=payload, content_type='application/json')
        self.assertEqual(res.status_code, 403)
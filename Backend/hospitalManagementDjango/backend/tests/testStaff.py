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
                                                   originally_registered_date=datetime.utcnow(),
                                                   regisrted_by=Profiles.objects.get(id=self.profile_id),
                                                   registered_date=datetime.utcnow(),
                                                   type='multi-speciality')
        print(hospital)
        self.hospital_id = hospital[0].id
        department = Department.objects.get_or_create(Department_name='random', is_same_as_hospital_address=True,
                                                      addressine2='address1', city='Philadelphia', state='PA',
                                                      pincode='19104', department_phone_number='4567891234',
                                                      registered_date=datetime.utcnow(),
                                                      regisrted_by_id=self.profile_id,
                                                      hospital_id_id=self.hospital_id)

        self.department_id = department[0].id
        # print('Profile = {}'.format(profile.id))
        pharmacy = Pharmacy.objects.get_or_create(name='VNR Pharma', addressine1='', addressine2='address2',
                                                  city='Philly', state='PA', pincode='19104',
                                                  pharmacy_phone_number='1466456987', licence_number='1244575',
                                                  hospital_id=Hospitals.objects.get(id=self.hospital_id),
                                                  originally_registered_date=datetime.utcnow(),
                                                  registered_date=datetime.utcnow(), timestamp=datetime.utcnow(),
                                                  regisrted_by=Profiles.objects.get(id=self.profile_id),
                                                  _medicine='test')
        print(pharmacy)
        self.pharmacy_id = pharmacy[0].id

        lab = Lab.objects.get_or_create(name='VNR Lab', addressine1='address1', addressine2='address2', city='Philly',
                                        state='PA', pincode='19104', lab_phone_number='1889876098',
                                        licence_number='1134456', hospital_id=Hospitals.objects.get(id=hospital[0].id),
                                        originally_registered_date=datetime.utcnow(), registered_date=datetime.utcnow(),
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
        print(response)
        assert response.status_code, 409

    def test_hospitals_list(self):
        response = self.client.get(reverse('hospitals-simple'))
        assert response.status_code, 200

    def test_patients_list(self):
        response = self.client.get(reverse('patients-list'))
        print('Patients', response)
        assert response.status_code, 200

    def test_create_doctor_working_hours(self):
        payload = {"doctor_id": self.profile_id,
                   "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00", "Wednesday": "10:00-18:00",
                                     "Thursday": "10:00-18:00", "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                     "Sunday": "10:00-18:00"}}
        response = self.client.post(reverse('doctorworkinghours-list'), data=payload, content_type='application/json')
        assert response.status_code, 201

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
        print('doctor', response)
        assert response.status_code, 200

    def test_doctor_retrieve_with_invalid_doctor_id(self):
        # https://hospitalmanagementbackend.herokuapp.com/DoctorWorkingHours/24
        response = self.client.get(reverse('doctorworkinghours-detail', args=[200]))
        print('doctor', response)
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
        print('Updated Working hours', response.content, response.status_code, response)
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
        print('LabWH', response.content)
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
        print('Hospital Summary', response, response.content)
        assert response.status_code, 200

    def test_get_doctor_summary(self):

        workingHours_payload = {"doctor_id": self.profile_id,
                   "working_hours": {"Monday": "10:00-18:00", "Tuesday": "10:00-18:00", "Wednesday": "10:00-18:00",
                                     "Thursday": "10:00-18:00", "Friday": "10:00-18:00", "Saturday": "10:00-18:00",
                                     "Sunday": "10:00-18:00"}}
        self.client.post(reverse('doctorworkinghours-list'), data=workingHours_payload, content_type='application/json')

        payload={"doctor_id":self.staff_id}
        response = self.client.post(reverse('doctorsummary'), data=payload, content_type='application/json')
        print("get_DS=",response.content)
        self.assertEqual(response.status_code, 200)
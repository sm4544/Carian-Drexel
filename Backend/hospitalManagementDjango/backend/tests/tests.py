import json

from django.test import TestCase, Client
from django.urls import reverse
from django.utils.encoding import force_text
from unittest.mock import Mock
import sure
import requests
import httpretty


# Create your tests here.

class TestMethods(TestCase):

    def setUp(self):
        self.client = Client()
        # self.url=reverse("hospitals:patients")

    def test_profiles_url(self):
        response = self.client.get('/Profiles/')
        self.assertEqual(response.status_code, 403)
        # self.browser.quit()

    def test_pharmacy_url(self):
        response = self.client.get('/Pharmacy/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_medicine_url(self):
        response = self.client.get('/Medicine/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_medicineOrder_url(self):
        response = self.client.get('/MedicineOrder/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_lab_url(self):
        response = self.client.get('/Lab/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_dept_url(self):
        response = self.client.get('/Department/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_labReports_url(self):
        response = self.client.get('/LabReports/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_appointment_url(self):
        response = self.client.get('/Appointments/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_messages_url(self):
        response = self.client.get('/Messages/')
        self.assertEqual(response.status_code, 200)
        # self.browser.quit()

    def test_login_with_get(self):
        response = self.client.get('/login/')
        self.assertEqual(response.status_code, 404)
        # self.browser.quit()

    def test_login_with_post(self):
        response = self.client.post('/login/')

    @httpretty.activate
    def test_get_jwt_token(self):
        jsonResponse = '{"Department_name": "Cardio","is_same_as_hospital_address": false,"addressine1": "rgjh","addressine2": "34","city": "NA","state": "NA","pincode": "287389","department_phone_number": "278101860","hospital_id": 1,"registered_date": "2020-10-26T00:00:00Z","regisrted_by": 13}'
        httpretty.register_uri(httpretty.GET,
                               uri='https://hospitalmanagementbackend.herokuapp.com/Department/', body=jsonResponse)
        response = requests.get('https://hospitalmanagementbackend.herokuapp.com/Department/')
        response.json().should.equal(json.loads(jsonResponse))

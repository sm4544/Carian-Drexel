from django.test import TestCase, Client
from django.urls import reverse
from splinter import Browser
from django.utils.encoding import force_text



# Create your tests here.

class TestMethods(TestCase):

    def setUp(self):
        self.client = Client()
        self.browser = Browser()
        #self.url=reverse("hospitals:patients")    

    def test_patient_url(self):
        response=self.client.get('/Patients/')
        self.assertEqual(response.status_code,200)
        self.browser.quit()

    def test_profiles_url(self):
        response=self.client.get('/Profiles/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_pharmacy_url(self):
        response = self.client.get('/Pharmacy/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_medicine_url(self):
        response = self.client.get('/Medicine/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_medicineOrder_url(self):
        response = self.client.get('/MedicineOrder/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_lab_url(self):
        response = self.client.get('/Lab/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_dept_url(self):
        response = self.client.get('/Department/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_staff_url(self):
        response = self.client.get('/Staff/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_labReports_url(self):
        response = self.client.get('/LabReports/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_appointment_url(self):
        response = self.client.get('/Appointments/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()

    def test_messages_url(self):
        response = self.client.get('/Messages/')
        self.assertEqual(response.status_code, 200)
        self.browser.quit()
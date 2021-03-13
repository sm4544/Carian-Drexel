from unittest import TestCase

import requests


class EndPointTests(TestCase):

    def setUp(self):
        self.urls = {
            "hospitals": "https://hospitalmanagementbackend.herokuapp.com/hospitals/",
            "Patients": "https://hospitalmanagementbackend.herokuapp.com/Patients/",
            "Profiles": "https://hospitalmanagementbackend.herokuapp.com/Profiles/",
            "Pharmacy": "https://hospitalmanagementbackend.herokuapp.com/Pharmacy/",
            "Medicine": "https://hospitalmanagementbackend.herokuapp.com/Medicine/",
            "MedicineOrder": "https://hospitalmanagementbackend.herokuapp.com/MedicineOrder/",
            "Lab": "https://hospitalmanagementbackend.herokuapp.com/Lab/",
            "Department": "https://hospitalmanagementbackend.herokuapp.com/Department/",
            "Staff": "https://hospitalmanagementbackend.herokuapp.com/Staff/",
            "LabReports": "https://hospitalmanagementbackend.herokuapp.com/LabReports/",
            "Appointments": "https://hospitalmanagementbackend.herokuapp.com/Appointments/",
            "Messages": "https://hospitalmanagementbackend.herokuapp.com/Messages/"
        }
        pass

    def test_patient_url(self):
        response = requests.get(self.urls["Patients"])
        self.assertEqual(response.status_code, 403)

    def test_profiles_url(self):
        response = requests.get(self.urls["Profiles"])
        self.assertEqual(response.status_code, 403)

    def test_pharmacy_url(self):
        response = requests.get(self.urls["Pharmacy"])
        self.assertEqual(response.status_code, 200)

    def test_medicine_url(self):
        response = requests.get(self.urls["Medicine"])
        self.assertEqual(response.status_code, 200)

    def test_medicineOrder_url(self):
        response = requests.get(self.urls["MedicineOrder"])
        self.assertEqual(response.status_code, 200)

    def test_lab_url(self):
        response = requests.get(self.urls["Lab"])
        self.assertEqual(response.status_code, 200)

    def test_dept_url(self):
        response = requests.get(self.urls["Department"])
        self.assertEqual(response.status_code, 200)

    def test_staff_url(self):
        response = requests.get(self.urls["Staff"])
        self.assertEqual(response.status_code, 200)

    def test_labReports_url(self):
        response = requests.get(self.urls["LabReports"])
        self.assertEqual(response.status_code, 200)

    def test_appointment_url(self):
        response = requests.get(self.urls["Appointments"])
        self.assertEqual(response.status_code, 200)

    def test_messages_url(self):
        response = requests.get(self.urls["Messages"])
        self.assertEqual(response.status_code, 200)

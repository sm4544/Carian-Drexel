from django.test import TestCase,Client
from django.urls import reverse


class TestAppointments(TestCase):

    def setUp(self):
        self.client=Client()

    def test_get_appointments(self):
        #response = requests.get('http://localhost:8000/Reviews/')
        response = self.client.get(reverse('appointments-list'))
        assert response.status_code, 200

    def test_get_appointments_given_empty_json(self):
        response= self.client.get(reverse('appointments-data'))
        assert response.status_code,400

    def test_get_appointments_given_no_doctor_id(self):
        payload={"":""}
        response = self.client.post(reverse('appointments-data'),data=payload,content_type='application/json')
        assert response.status_code,400

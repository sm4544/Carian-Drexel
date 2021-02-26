from django.test import TestCase,Client
from django.urls import reverse


class TestMedicineOrder(TestCase):

    def setUp(self):
        self.client=Client()

    def test_get_medicineOrder(self):
        #response = requests.get('http://localhost:8000/Reviews/')
        response = self.client.get(reverse('medicineOrder-list'))
        assert response.status_code, 200

    def test_get_medicine(self):
        response = self.client.get(reverse('medicine-list'))
        assert response.status_code, 200
from django.test import Client, TestCase
from django.urls import reverse


class TestPharmacy(TestCase):
    def setUp(self):
        self.client=Client()

    def test_get_pharmacy(self):
        response = self.client.get(reverse('pharmacy-list'))
        assert response.status_code,200

    def test_create_pharmacy_with_no_json(self):
        response = self.client.post(reverse('pharmacy-list'),data={"":""})
        assert response.status_code, 400

    def test_create_pharmacy_with_no_json_body(self):
        response = self.client.post(reverse('pharmacy-list'))
        assert response.status_code, 400

    # def test_create_pharmacy_without_columns(self):
    #     column_names = ['name', 'addressine1', 'addressine2', 'city', 'state', 'pincode', 'pharmacy_phone_number',
    #                     'licence_number', 'originally_registered_date', 'registered_date', 'timestamp', 'medicine',
    #                     'hospital_id_id', 'regisrted_by_id']

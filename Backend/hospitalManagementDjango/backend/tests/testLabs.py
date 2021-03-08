from django.test import TestCase, Client
from django.urls import reverse

from backend.models import Lab


class TestLabs(TestCase):
    def setUp(self):
        self.client = Client()

    def test_get_labs(self):
        response = self.client.get(reverse('lab-list'))
        assert response.status_code, 200

    def test_get_lab_reports(self):
        response = self.client.get(reverse('lab_reports-list'))
        assert response.status_code, 200

    def test_create_lab_with_no_name(self):
        response = self.client.post(reverse('lab-list'), data={"name": "", "licence_number": "testing"})
        assert response.status_code, 204

    def test_create_lab_with_no_licence(self):
        response = self.client.post(reverse('lab-list'), data={"name": "testing", "licence_number": ""})
        assert response.status_code, 204

    def test_create_lab_with_no_json(self):
        response = self.client.post(reverse('lab-list'), data={"": ""})
        assert response.status_code, 409

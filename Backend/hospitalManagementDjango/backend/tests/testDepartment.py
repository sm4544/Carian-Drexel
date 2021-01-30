from django.test import TestCase, Client
from django.urls import reverse


class TestDepartment(TestCase):
    def setUp(self):
        self.client=Client()

    def test_get_departments(self):
        response = self.client.get(reverse('department-list'))
        assert response.status_code,200


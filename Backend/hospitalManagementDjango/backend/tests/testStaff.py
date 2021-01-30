from django.test import TestCase, Client
from django.urls import reverse


class TestStaff(TestCase):
    def setUp(self):
        self.client=Client()

    def test_get_staff(self):
        response = self.client.get(reverse('staff-list'))
        assert response.status_code,200


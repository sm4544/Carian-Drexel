from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status

from backend.models import Hospitals
from backend.serializers import HospitalsSerializer


class HospitalsTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_get_hospitals(self):
        response = self.client.get(reverse('hospitals-list'))
        # print(response)
        hospitals = Hospitals.objects.all()
        serializer = HospitalsSerializer(hospitals, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_hospitals_all(self):
        response = self.client.get(reverse('hospitals-all'))
        assert response.status_code, status.HTTP_200_OK

    def test_create_hospitals_with_no_json(self):
        response = self.client.post(reverse('hospitals-list'),data={"":""})
        assert response.status_code, status.HTTP_409_CONFLICT

    def test_create_hospitals_with_no_json_body(self):
        response = self.client.post(reverse('hospitals-list'))
        assert response.status_code, status.HTTP_409_CONFLICT
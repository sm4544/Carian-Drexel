from django.test import TestCase,Client
from django.urls import reverse


class TestReviews(TestCase):

    def setUp(self):
        self.client=Client()

    def test_getReviews(self):
        #response = requests.get('http://localhost:8000/Reviews/')
        response = self.client.get(reverse('reviews-list'))
        assert response.status_code, 200
from django.test import TestCase,Client
from django.urls import reverse


class TestMessages(TestCase):
    def setUp(self):
        self.client=Client()

    def test_getMessages(self):
        response = self.client.get(reverse('messages-list'))
        # response = requests.get('http://localhost:8000/Messages/')
        assert response.status_code, 200
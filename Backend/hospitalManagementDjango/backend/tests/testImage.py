from django.test import TestCase, Client
from django.urls import reverse


class TestImage(TestCase):
    def setUp(self):
        self.client=Client()

    def test_get_image_by_filter_with_no_json(self):
        response = self.client.post(reverse('get-image'))
        assert response.status_code,400

    def test_get_image_by_filter_with_invalid_json(self):
        response = self.client.post(reverse('get-image'),data={"":""})
        assert response.status_code,400

    def test_get_static_images(self):
        response=self.client.get(reverse('staticImages-list'))
        assert response.status_code,200
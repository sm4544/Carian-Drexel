from django.test import TestCase, Client
from django.urls import reverse
from splinter import Browser
from django.utils.encoding import force_text



# Create your tests here.

class TestMethods(TestCase):

    def setUp(self):
        self.client = Client()
        self.browser = Browser()
        #self.url=reverse("hospitals:patients")    

    def test_hospital_url(self):
        response=self.client.get('localhost:8000/hospitals')#AssertionError: 404 != 200
        self.assertEqual(response.status_code,200)
        self.assertJSONEqual(response.content.decode("utf-8"),{})
        self.browser.quit()
        

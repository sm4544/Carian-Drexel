from unittest import TestCase
import json
import requests


class LoginTests(TestCase):
    def setUp(self):
        self.loginURL="https://hospitalmanagementbackend.herokuapp.com/login"

    def test_account_jwtget(self):
        payload = {"username":"kaman123","password":"kaman123"}
        response = requests.post(url=self.loginURL,data=json.dumps(payload))
        #response = self.client.post(url=self.loginURL, data=json.dumps(payload))
        payloadDict = json.loads(response.content.decode('utf-8'))
        self.assertEqual(response.status_code,200)
        self.JWT_TOKEN = payloadDict["JWT_TOKEN"]


from unittest import TestCase
from django.test import Client
import json
import requests
from unittest.mock import patch


class LoginSetupTest(TestCase):
    def setUp(self):
        self.LoginSetupURL = "http://localhost:8000/login"
        # self.LoginSetupURL = "/login"
        # self.client = Client()

    @patch('requests.post')
    def test_login_with_empty_username(self, mock_post):
        payload = {"username": "", "password": "test"}
        mock_post.return_value.status_code = 400
        mock_post.return_value.content = '{"Message": "Username or password Can\'t be empty!"}'
        response = requests.post(self.LoginSetupURL, data=json.dumps(payload))
        assert response.status_code, 400
        assert json.loads(response.content)['Message'], "Username or password Can't be empty!"

    @patch('requests.post')
    def test_login_with_empty_values(self, mock_post):
        payload = {"username": "", "password": ""}
        mock_post.return_value.status_code = 400
        mock_post.return_value.content = '{"Message": "Username or password Can\'t be empty!"}'
        response = requests.post(self.LoginSetupURL, data=json.dumps(payload))
        assert response.status_code, 400
        assert json.loads(response.content)['Message'], "Username or password Can't be empty!"

    @patch('requests.post')
    def test_login_with_empty_request(self, mock_post):
        payload = {}
        mock_post.return_value.status_code = 400
        mock_post.return_value.content = '{"Message": "\'username\'"}'
        response = requests.post(self.LoginSetupURL, data=json.dumps(payload))
        assert response.status_code, 400

    @patch('requests.post')
    def test_login_with_valid_admin_credentials(self, mock_post):
        payload = {"username": "adi-root", "password": "adithya123"}
        mock_post.return_value.status_code = 200
        mock_post.return_value.content = {"Message": "Logged in succesfully",
                                          "JWT_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYwNzIwNjUxNiwic2NvcGUiOiJhZG1pbiJ9.nfrugp9dMsQbK0uS6Q88Y3PG-0TbGtVZ3dNhrA2Q4o4",
                                          "FirstName": "a", "LastName": "a", "Profile_Type": "Admin", "ProfileID": "45"}
        response = requests.post(self.LoginSetupURL, data=json.loads(json.dumps(payload)))
        assert response.content["Message"], "Logged in succesfully"
        assert response.content["Profile_Type"], "Admin"
        assert response.status_code, 200

    @patch('requests.post')
    def test_login_with_valid_customer_credentials(self, mock_post):
        payload = {"username": "test1", "password": "test1234"}
        mock_post.return_value.status_code = 200
        mock_post.return_value.content = {
            "Message": "Logged in succesfully",
            "JWT_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3QxIiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYwNzIwNjgwMSwic2NvcGUiOiJjdXN0b21lciJ9.RE88mHyGuSOXKm0Yg77DzPoFg_i4vDPVNsI8qoUvZRY",
            "FirstName": "b",
            "LastName": "b", "Profile_Type": "Customer", "ProfileID": "74"}
        response = requests.post(self.LoginSetupURL, data=json.loads(json.dumps(payload)))
        assert response.content["Message"], "Logged in succesfully"
        assert response.content["Profile_Type"], "Customer"
        assert response.status_code, 200

    @patch('requests.post')
    def test_login_with_valid_test_credentials(self, mock_post):
        payload = {"username": "hem123", "password": "hemant123"}
        mock_post.return_value.status_code = 200
        mock_post.return_value.content = {
            "Message": "Logged in succesfully",
            "JWT_TOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImhlbTEyMyIsInBhc3N3b3JkIjoiaGVtYW50MTIzIiwiZXhwIjoxNjA3MjA3MTIyLCJzY29wZSI6ImN1c3RvbWVyIn0.JaNUAix03oURRbDWL-dr6NkEOpHj4FOqZ0ANNUw1wwI",
            "FirstName": "Hemant",
            "LastName": "V",
            "Profile_Type": "test",
            "ProfileID": "1"
        }
        response = requests.post(self.LoginSetupURL, data=json.loads(json.dumps(payload)))
        assert response.content["Message"], "Logged in succesfully"
        assert response.content["Profile_Type"], "test"
        assert response.status_code, 200
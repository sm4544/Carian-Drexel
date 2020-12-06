from unittest import TestCase
import json
from unittest.mock import patch

import requests


class ProfilesTest(TestCase):
    def setUp(self):
        self.ProfilesURL = "http://localhost:8000/Profiles/"

    @patch('requests.post')
    def test_post_profiles_without_firstname(self,mock_post):
        payload = '{"first_name":"","last_name":"V","email":"kaman@hsmgt.com","username":"kaman123","password":"kaman123","registred_date":"","date_of_birth":"1991-05-05","security_question":"","security_answer":"","last_login_date":"","status":"test","profile_pic":"aas","profile_type":"test"}'
        mock_post.return_value.status_code = 409
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 409

    @patch('requests.post')
    def test_post_profiles_without_password(self,mock_post):
        payload = '{"first_name":"Kaman","last_name":"V","email":"kaman@hsmgt.com","username":"kaman123","password":"","registred_date":"","date_of_birth":"1991-05-05","security_question":"","security_answer":"","last_login_date":"","status":"test","profile_pic":"aas","profile_type":"test"}'
        mock_post.return_value.status_code = 409
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 409

    @patch('requests.post')
    def test_post_profiles_without_email(self,mock_post):
        payload = '{"first_name":"","last_name":"V","email":"","username":"kaman123","password":"kaman123","registred_date":"","date_of_birth":"1991-05-05","security_question":"","security_answer":"","last_login_date":"","status":"test","profile_pic":"aas","profile_type":"test"}'
        mock_post.return_value.status_code = 409
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 409

    @patch('requests.post')
    def test_post_profiles_without_lastname(self,mock_post):
        payload = '{"first_name":"Kaman","last_name":"","email":"kaman@hsmgt.com","username":"kaman123","password":"kaman123","registred_date":"","date_of_birth":"1991-05-05","security_question":"","security_answer":"","last_login_date":"","status":"test","profile_pic":"aas","profile_type":"test"}'
        mock_post.return_value.status_code = 409
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 409

    @patch('requests.post')
    def test_post_profiles_without_dob(self,mock_post):
        payload = '{"first_name":"","last_name":"V","email":"kaman@hsmgt.com","username":"kaman123","password":"kaman123","registred_date":"","date_of_birth":"","security_question":"","security_answer":"","last_login_date":"","status":"test","profile_pic":"aas","profile_type":"test"}'
        mock_post.return_value.status_code = 409
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 409

    @patch('requests.post')
    def test_post_profiles_without_profile_type(self,mock_post):
        payload = '{"first_name":"","last_name":"V","email":"kaman@hsmgt.com","username":"kaman123","password":"kaman123","registred_date":"","date_of_birth":"1991-05-05","security_question":"","security_answer":"","last_login_date":"","status":"test","profile_pic":"aas","profile_type":""}'
        mock_post.return_value.status_code = 409
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 409

    @patch('requests.post')
    def test_post_profiles_empty_json(self,mock_post):
        payload = '{}'
        mock_post.return_value.status_code = 403
        response = requests.post(self.ProfilesURL, data=json.dumps(payload))
        assert response.status_code, 403

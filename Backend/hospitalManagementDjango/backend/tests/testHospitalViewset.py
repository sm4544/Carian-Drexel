from unittest import TestCase
import json
from unittest.mock import patch
import requests
from backend import views


class HospitalViewTests(TestCase):
    def setUp(self):
        self.hospital_url = "https://hospitalmanagementbackend.herokuapp.com/hospitals/"

    @patch('backend.views.requests.get','views.hospitalViewset')
    def test_get_hospitals(self, mock_get):
        #response = requests.get(self.hospital_url)
        response = mock_get(self.hospital_url)
        mock_get.return_value.status_code = 200
        assert response.status_code, 200

    @patch('backend.views.requests.post')
    def test_post_hospitals(self, mock_post):
        request_payload = {
            "name": "Apollo",
            "addressine1": "iebiuwq",
            "addressine2": "ejhqe",
            "area": " NA",
            "city": "phillly",
            "state": "PA",
            "pincode": "1234",
            "licence_number": "M23455",
            "hospital_phone_number": "287878123"
        }
        #response = requests.post(self.hospital_url,data=json.dumps(request_payload))
        response = mock_post(self.hospital_url, data=json.dumps(request_payload))
        mock_post.return_value.status_code=201
        assert response.status_code,201

    @patch('backend.views.requests.post')
    def test_no_request_payload(self,mock_post):
        request_payload = {}
        #response = requests.post(self.hospital_url, data=json.dumps(request_payload))
        response = mock_post(self.hospital_url, data=json.dumps(request_payload))
        mock_post.return_value.status_code = 409
        mock_post.return_value.content = "JSON parse error - Expecting value: line 1 column 1 (char 0)"
        assert response.status_code, 400
        assert response.content, "JSON parse error - Expecting value: line 1 column 1 (char 0)"

    @patch('backend.views.requests.post')
    def test_no_request_body_payload(self, mock_post):
        request_payload = '{}'
        # response = requests.post(self.hospital_url, data=json.loads(request_payload))
        response = mock_post(self.hospital_url, data=json.loads(request_payload))
        mock_post.return_value.status_code = 409
        mock_post.return_value.content = "Invalid JSON-'name'"
        assert response.status_code, 409
        assert response.content, "Invalid JSON-'name'"

    @patch('backend.views.requests.post')
    def test_incorrect_payload(self, mock_post):
        request_payload = {
            "name": "Apollo",
            "addressine1": "iebiuwq",
            "addressine2": "ejhqe",
            "area": " NA",
            "city": "phillly",
            "state": "PA",
            "pincode": "123450",
            "licence_number": "M23455",
            "hospital_phone_number": "287878123"
        }
        mock_post.return_value.status_code = 409
        mock_post.return_value.content = "Incorrect data-'originally_registered_date'"
        # response = requests.post(self.hospital_url, data=json.dumps(request_payload))
        response = mock_post(self.hospital_url, data=json.dumps(request_payload))
        assert response.status_code, 409
        assert response.content, "Incorrect data-'originally_registered_date'"
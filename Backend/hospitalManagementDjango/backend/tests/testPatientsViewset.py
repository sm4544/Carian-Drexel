from unittest import TestCase
import json
from unittest.mock import patch

import requests

class PatientViewset(TestCase):
    def setUp(self):
        self.patient_url = "https://hospitalmanagementbackend.herokuapp.com/Patients/"

    @patch('requests.get')
    def test_get_patient_without_jwt(self,mock_get):
        mock_get.return_value.status_code = 403
        payload='{"Message": "Not Authorized to view this info!"}'
        mock_get.return_value.content = payload
        response = requests.get(self.patient_url)
        assert response.status_code, 403
        assert json.loads(response.content)['Message'], "Not Authorized to view this info!"

    @patch('requests.get')
    def test_get_patient_with_invalid_jwt(self, mock_get):
        mock_get.return_value.status_code = 403
        payload = '{"Message": "Not Authorized to view this info!"}'
        jwt_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYwNzIxNDU4MSwic2NvcGUiOiJhZG1pbiJ9.spUAlkUC73OhA9rS4vXDwwl-JT5sy1LwWgZp9dZ9'
        mock_get.return_value.content = payload
        response = requests.get(self.patient_url, headers={'Content-Type':'application/json','Authorization':'Bearer {}'.format(jwt_token)})
        assert response.status_code, 403
        assert json.loads(response.content)['Message'], "Not Authorized to view this info!"

    @patch('requests.get')
    def test_get_patient_with_invalid_jwt_without_bearer(self, mock_get):
        mock_get.return_value.status_code = 403
        payload = '{"Message": "Not Authorized to view this info!"}'
        jwt_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYwNzIxNDU4MSwic2NvcGUiOiJhZG1pbiJ9.spUAlkUC73OhA9rS4vXDwwl-JT5sy1LwWgZp9dZ9'
        mock_get.return_value.content = payload
        response = requests.get(self.patient_url, headers={'Content-Type': 'application/json',
                                                           'Authorization': 'Bearer {}'.format(jwt_token)})
        assert response.status_code, 403
        assert json.loads(response.content)['Message'], "Not Authorized to view this info!"

    @patch('requests.get')
    def test_get_patient_with_empty_jwt(self, mock_get):
        mock_get.return_value.status_code = 403
        payload = '{"Message": "Not Authorized to view this info!"}'
        mock_get.return_value.content = payload
        response = requests.get(self.patient_url, headers={'Content-Type': 'application/json',
                                                           'Authorization': 'Bearer '})
        assert response.status_code, 403
        assert json.loads(response.content)['Message'], "Not Authorized to view this info!"

    @patch('requests.get')
    def test_get_patient_with_expired_jwt(self, mock_get):
        mock_get.return_value.status_code = 403
        jwt_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYwNzIxNTE0NCwic2NvcGUiOiJhZG1pbiJ9.QqOhsOYj5ScujlvEPgSlTacu1AH1Laz8Ncn6cmls4B'
        payload = '{"Message": "Not Authorized to view this info!"}'
        mock_get.return_value.content = payload
        response = requests.get(self.patient_url, headers={'Content-Type': 'application/json',
                                                           'Authorization': 'Bearer {}'.format(jwt_token)})
        assert response.status_code, 403
        assert json.loads(response.content)['Message'], "Not Authorized to view this info!"

    @patch('requests.get')
    def test_get_patient_with_valid_jwt(self, mock_get):
        mock_get.return_value.status_code = 200
        jwt_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYwNzIxNTE0NCwic2NvcGUiOiJhZG1pbiJ9.QqOhsOYj5ScujlvEPgSlTacu1AH1Laz8Ncn6cmls4Bc'
        # payload = {"id": 2,"first_name": "Hemant","last_name": "V","email": "hem@hsmgt.com","mobile_number": "9595870807","age": 20,"weight": 80,"height": 170,"gender": "M","occupation": "NAAM","martial_status": "Single","blood_group": "O+","registred_date": "2020-11-10","created_by": 13,"is_created_by_staff": false,"addressine1": "Hitex","addressine2": "Hitech city","city": "Hyd","state": "TG","pincode": "500081"}
        # mock_get.return_value.content = payload
        response = requests.get(self.patient_url)
        assert response.status_code, 200

    @patch('requests.post')
    def test_post_patient_with_missing_column_name(self,mock_post):
        payload = '{"first_name":"", "last_name":"V", "email":"adi@gmail.com", "mobile_number":"2324897461", "age":24, "weight":78, "height":180, "gender":"M","occupation":"SDE", "martial_status":"Single", "blood_group":"AB", "is_created_by_staff":"Y","addressine1":"Line1", "addressine2":"Line2", "city":"Philadelphia", "state":"PA", "pincode":"19104", "created_by_id":1}'
        mock_post.return_value.status_code = 400
        response = requests.post(self.patient_url,data=json.loads(payload))
        assert response.status_code, 400

    @patch('requests.post')
    def test_post_patient_for_key_error(self, mock_post):
        payload = '{"last_name":"V", "email":"adi@gmail.com", "mobile_number":"2324897461", "age":24, "weight":78, "height":180, "gender":"M","occupation":"SDE", "martial_status":"Single", "blood_group":"AB", "is_created_by_staff":"Y","addressine1":"Line1", "addressine2":"Line2", "city":"Philadelphia", "state":"PA", "pincode":"19104", "created_by_id":1}'
        mock_post.return_value.status_code = 400
        response = requests.post(self.patient_url, data=json.loads(payload))
        assert response.status_code, 400

    @patch('requests.post')
    def test_post_patient_without_missing_column(self, mock_post):
        payload = '{"first_name":"ADI", "last_name":"V", "email":"adi@gmail.com", "mobile_number":"2324897461", "age":24, "weight":78, "height":180, "gender":"M","occupation":"SDE", "martial_status":"Single", "blood_group":"AB", "is_created_by_staff":"Y","addressine1":"Line1", "addressine2":"Line2", "city":"Philadelphia", "state":"PA", "pincode":"19104", "created_by_id":1}'
        mock_post.return_value.status_code = 201
        response = requests.post(self.patient_url)
        assert response.status_code, 201


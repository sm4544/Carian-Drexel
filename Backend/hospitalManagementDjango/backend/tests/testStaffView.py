from unittest import TestCase
from django.test import Client
import json
import requests
from unittest.mock import patch



class LoginSetupTest(TestCase):
    def setUp(self):
        self.StaffURL = "http://localhost:8000/Staff/"
        self.client = Client()

    @patch('requests.post')
    def test_staff_post_with_empty_body(self,mock_post):
        payload = '{}'
        mock_post.return_value.status_code = 400
        response = requests.post('http://localhost:8000/Staff/')
        assert response.status_code, 400

    def test_staff_post_without_highest_degree(self):
        payload = '{"highest_degree" :"","studied_at" : "VNR","specialization" : "ECE","licence_number" : "12XXCV1","overall_work_experience" : "5","work_phone_number" : "2672221234","work_email_address" : "abc@vnr.org","status" : "inactive","doctor_fee" :"150","approved_by_id" : "13","hospital_id_id" : "3","department_id_id" : "1","lab_id_id": "1","pharmacy_id_id" : "1","profile_id_id" : "1"}'
        response = requests.post(self.StaffURL, data=json.loads(payload))
        assert json.loads(response.content.decode("utf-8"))['Message'], 'Enter highest qualification'
        assert response.status_code, 409

    def test_staff_post_without_studied_at(self):
        payload = '{"highest_degree" :"AB","studied_at" : "VNR","specialization" : "ECE","licence_number" : "12XXCV1","overall_work_experience" : "5","work_phone_number" : "2672221234","work_email_address" : "","status" : "inactive","doctor_fee" :"150","approved_by_id" : "13","hospital_id_id" : "3","department_id_id" : "1","lab_id_id": "1","pharmacy_id_id" : "1","profile_id_id" : "1"}'
        response = requests.post(self.StaffURL, data=json.loads(payload))
        assert json.loads(response.content.decode("utf-8"))['Message'], 'Enter email'
        assert response.status_code, 409

    def test_staff_post_without_work_phone_number(self):
        payload = '{"highest_degree" :"AB","studied_at" : "VNR","specialization" : "ECE","licence_number" : "12XXCV1","overall_work_experience" : "5","work_phone_number" : "","work_email_address" : "bbv@gmail.com","status" : "inactive","doctor_fee" :"150","approved_by_id" : "13","hospital_id_id" : "3","department_id_id" : "1","lab_id_id": "1","pharmacy_id_id" : "1","profile_id_id" : "1"}'
        response = requests.post(self.StaffURL, data=json.loads(payload))
        assert json.loads(response.content.decode("utf-8"))['Message'], 'Enter valid work_phone_number'
        assert response.status_code, 409

    def test_staff_post_without_license_number(self):
        payload = '{"highest_degree" :"AB","studied_at" : "VNR","specialization" : "ECE","licence_number" : "","overall_work_experience" : "5","work_phone_number" : "2672221234","work_email_address" : "bbv@gmail.com","status" : "inactive","doctor_fee" :"150","approved_by_id" : "13","hospital_id_id" : "3","department_id_id" : "1","lab_id_id": "1","pharmacy_id_id" : "1","profile_id_id" : "1"}'
        response = requests.post(self.StaffURL, data=json.loads(payload))
        assert json.loads(response.content.decode("utf-8"))['Message'], 'Enter valid licence_number'
        assert response.status_code, 409

    @patch('requests.get')
    def test_staff_get(self,mock_get):
        mock_get.return_value.status_code = 200
        payload =  {"id": 6,"profile_id": 12,"highest_qualification": "MD","studied_at": "VJIET","work_phone_number": "2746468196","work_email_address": "whwiydhqdn@gmail.com","overall_work_experience": 8,"hospital_id": 1,"department_id": 1,"pharmacy_id": 1,"lab_id": 1,"status": "test","approved_by": 13,"licence_number": "AT76547","doctor_fee": "200.00","specialization": None}
        mock_get.return_value.content = json.loads(json.dumps(payload))
        response = requests.get('http://localhost:8000/Staff/')
        # print(response)
        assert response.status_code,200
        assert response.content, json.loads(json.dumps(payload))


    @patch('requests.post')
    def test_staff_post(self,mock_post):
        payload = '{"highest_degree" :"ABC","studied_at" : "VNR","specialization" : "ECE","licence_number" : "12XXCV1","overall_work_experience" : "5","work_phone_number" : "2672221234","work_email_address" : "abc@vnr.org","status" : "inactive","doctor_fee" :"150","approved_by_id" : "13","hospital_id_id" : "3","department_id_id" : "1","lab_id_id": "1","pharmacy_id_id" : "1","profile_id_id" : "1"}'
        mock_post.return_value.status_code = 201
        response = requests.post('http://localhost:8000/Staff/')
        assert response.status_code, 201


import requests
import json
from datetime import datetime
from django.test import TestCase, Client
from django.test.client import MULTIPART_CONTENT
from django.urls import reverse
from backend.encryption import encrypt
from ..models import Profiles, Hospitals




class LoginTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.responsePayload = None
        self.incorrectResponsePayload = None
        self.expiredToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYxMDM2OTE4Miwic2NvcGUiOiJhZG1pbiJ9.cnYHwvBQptej2c_AxdStKxOWFrle36JZlxJGpu9LbvA"
        Profiles.objects.create(first_name='adi-root', last_name='testing', email='adi@gmail.com', username='adiRoot',
                                password=encrypt('aditya123'), registred_date=datetime.utcnow(),
                                date_of_birth='1991-05-05', security_question='NO', security_answer='NO',
                                password_attempts=0, last_login_date=datetime.utcnow(), status='test',
                                profile_pic=bytes("NA", 'utf-8'), profile_type='admin')

    def login(self):
        payload = {"username": "adiRoot", "password": "aditya123"}
        # response = self.client.post(reverse('admin:login'),data=json.dumps(payload),content_type='application/json')
        response = self.client.post(reverse('post'), data=payload, content_type='application/json')
        # print(response)
        # print(response.content)
        self.responsePayload = response.content
        # print(response.content)

    def test_profiles_without_token(self):
        self.login()
        response = self.client.get(reverse('profiles-list'))
        # response = requests.get('http://localhost:8000/Profiles/')
        assert response.status_code, 400

    def test_login_with_incorrect_json(self):
        payload = {"": ""}
        response = self.client.post(reverse('post'), data=payload, content_type='application/json')
        assert response.status_code, 400

    def incorrect_login(self):
        payload = {"username": "adiRoot", "password": "aditya1223"}
        response = requests.post('http://localhost:8000/login', data=json.dumps(payload))
        self.incorrectResponsePayload = response.content
        # print(response.content)

    def test_with_token(self):
        if self.responsePayload is None:
            self.login()
        self.responsePayload = json.loads(self.responsePayload.decode('utf-8'))
        assert self.responsePayload['Message'], 'Logged in succesfully'

    def test_login_with_incorrect(self):
        self.incorrect_login()
        self.incorrectResponsePayload = json.loads(self.incorrectResponsePayload.decode('utf-8'))
        assert self.incorrectResponsePayload['Message'], "Incorrect Username/Password"

    def test_profile_view_with_token(self):
        if self.responsePayload is None:
            self.login()
        self.responsePayload = json.loads(self.responsePayload.decode('utf-8'))
        header = {'Authorization': self.responsePayload['JWT_TOKEN']}
        print(header)
        response = self.client.post(reverse('profiles-list'),**header)
        # print(response.content)
        assert response.status_code, 200

    # def test_profiles_detail_incorrect_email_password(self):
    #     self.client.post(reverse('profiles-detail'),content_type=MULTIPART_CONTENT,data=)
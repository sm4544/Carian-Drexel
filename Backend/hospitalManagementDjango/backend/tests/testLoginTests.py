import requests
import json
from datetime import datetime
from django.test import TestCase, Client
from django.test.client import MULTIPART_CONTENT
from django.urls import reverse
from backend.encryption import encrypt
from ..models import Profiles, Hospitals
from http.cookies import SimpleCookie





class LoginTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.responsePayload = None
        self.incorrectResponsePayload = None
        self.expiredToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkaS1yb290IiwicGFzc3dvcmQiOiJ0ZXN0MTIzNCIsImV4cCI6MTYxMDM2OTE4Miwic2NvcGUiOiJhZG1pbiJ9.cnYHwvBQptej2c_AxdStKxOWFrle36JZlxJGpu9LbvA"
        profile = Profiles.objects.get_or_create(first_name='adi-root', last_name='testing', email='adi@gmail.com', username='adiRoot',
                                password=encrypt('aditya123'), registred_date=datetime.utcnow(),
                                date_of_birth='1991-05-05', security_question='NO', security_answer='NO',
                                password_attempts=0, last_login_date=datetime.utcnow(), status='test',
                                profile_pic=bytes("NA", 'utf-8'), profile_type='admin')
        self.profile_id = profile[0].id

    def login(self):
        payload = {"username": "adiRoot", "password": "aditya123"}
        # response = self.client.post(reverse('admin:login'),data=json.dumps(payload),content_type='application/json')
        response = self.client.post(reverse('post'), data=payload, content_type='application/json')
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

    def test_with_token(self):
        if self.responsePayload is None:
            self.login()
        self.responsePayload = json.loads(self.responsePayload.decode('utf-8'))
        assert self.responsePayload['Message'], 'Logged in succesfully'

    def test_profile_view_with_token(self):
        if self.responsePayload is None:
            self.login()
        self.responsePayload = json.loads(self.responsePayload.decode('utf-8'))
        headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {}'.format(self.responsePayload['JWT_TOKEN'])
        }
        #header = {'Authorization': self.responsePayload['JWT_TOKEN']}
        #print(header)
        #response = self.client.get(reverse('profiles-list'),headers=headers)
        response = self.client.get(reverse('profiles-list'),header="testing")
        print(response, response.content)
        self.assertEqual(response.status_code, 403)

    def test_prof_pic_update(self):
        payload={"id":self.profile_id,"image":"NA"}
        res = self.client.post(reverse('profile-pic-update'),data=payload, content_type='application/json')
        self.assertEqual(res.status_code, 201)

    def test_prof_pic_update_inv_id(self):
        payload={"id":99,"image":"NA"}
        res = self.client.post(reverse('profile-pic-update'),data=payload, content_type='application/json')
        self.assertEqual(res.status_code, 404)

    def test_prof_pic_update_inv_body(self):
        payload={"image":"NA"}
        res = self.client.post(reverse('profile-pic-update'),data=payload, content_type='application/json')
        self.assertEqual(res.status_code, 409)

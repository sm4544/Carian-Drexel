from datetime import datetime

from django.db import models

# Create your models here.

class Hospitals(models.Model):
    name = models.CharField(max_length=60)
    addressine1 = models.CharField(max_length=60)
    addressine2 = models.CharField(max_length=60)
    area = models.CharField(max_length=60)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    pincode = models.CharField(max_length=9)
    hospital_phone_number = models.CharField(max_length=14)
    licence_number = models.CharField(max_length=20)
    originally_registered_date = models.DateField(default=datetime.now().date(),blank=True)
    regisrted_by = models.DateField(default=datetime.now().date(),blank=True)
    registered_date = models.DateField(default=datetime.now().date(),blank=True)

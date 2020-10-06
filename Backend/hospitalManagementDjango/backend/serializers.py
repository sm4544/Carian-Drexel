from rest_framework import serializers
from .models import Hospitals


class HospitalsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Hospitals()
        fields = ('name','addressine1','addressine2','area','city','state','pincode','hospital_phone_number','licence_number','originally_registered_date','registered_date','regisrted_by')
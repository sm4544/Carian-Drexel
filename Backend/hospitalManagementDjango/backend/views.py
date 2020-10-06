from uuid import uuid4

from rest_framework.response import Response
from backend.models import Hospitals
from rest_framework import viewsets, status


# Create your views here.
from backend.serializers import HospitalsSerializers


class hospitalViewset(viewsets.ViewSet):

    def create(self,request,format=None):
        print("Testing create post")
        data=request.data
        if data['name']=='':
            return Response(status=status.HTTP_204_NO_CONTENT,data={"Message":"Name is missing!"})
        print("Data is {}".format(data))
        try:
            #Hospitals.objects.get_or_create(id=int(uuid4())%300,name=data['name'],addressine1=data['addressine1'],addressine2=data['addressine2'],area=data['area'],city=data['city'],state=data['state'],pincode=data['pincode'],hospital_phone_number=data['hospital_phone_number'],licence_number=data['licence_number'],originally_registered_date=data['originally_registered_date'],registered_date=data['registered_date'],regisrted_by=data['regisrted_by'])
            Hospitals.objects.get_or_create(name=data['name'], addressine1=data['addressine1'],
                                            addressine2=data['addressine2'], area=data['area'], city=data['city'],
                                            state=data['state'], pincode=data['pincode'],
                                            hospital_phone_number=data['hospital_phone_number'],
                                            licence_number=data['licence_number'],
                                            #originally_registered_date=data['originally_registered_date'],
                                            #registered_date=data['registered_date'],
                                            #regisrted_by=data['regisrted_by'])
                                            )
        except Exception as exception:
            print(exception)
            return Response(status=status.HTTP_409_CONFLICT,data={"Message":"Incorrect data-{}".format(exception)})
        return Response(status=status.HTTP_201_CREATED,data={"Message":"Added Hospital"})



    def list(self, request):
        querySet=Hospitals.objects.all()
        serializer = HospitalsSerializers(querySet, many=True)
        return Response(serializer.data)

    #def retrieve(self, request, pk=None):
    #    _data = Hospitals.objects.all().filter(id=request.GET.get("id"))[0]
    #    jsonData = {'hospitalName': _data.name, 'id': _data.id}
    #    return Response({"results": jsonData})

##def getHospitalsData(request):
# hospitals=Hospitals()
# return JsonResponse(json.dumps(hospitals))

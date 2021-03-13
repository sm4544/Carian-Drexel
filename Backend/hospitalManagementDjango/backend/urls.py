from django.contrib import admin
from django.urls import path, include
from django.views.decorators.csrf import csrf_exempt
from rest_framework import routers
from . import views
from .views import LoginSetup

router = routers.DefaultRouter()
router.register(r'hospitals', views.hospitalViewset, basename='hospitals')
router.register(r'hospitals', views.hospitalViewset, basename='hospitals')
router.register(r'Patients', views.PatientsViewset, basename='patients')
router.register(r'Profiles', views.ProfilesViewset, basename='profiles')
router.register(r'Pharmacy', views.PharmacyViewset, basename='pharmacy')
router.register(r'Medicine', views.MedicineViewset, basename='medicine')
router.register(r'MedicineOrder', views.MedicineOrderViewset, basename='medicineOrder')
router.register(r'Lab', views.LabViewset, basename='lab')
router.register(r'Department', views.DepartmentViewset, basename='department')
router.register(r'Staff', views.StaffViewset, basename='staff')
router.register(r'LabReports', views.LabReportsViewset, basename='lab_reports')
router.register(r'Appointments', views.AppointmentsViewset, basename='appointments')
router.register(r'Messages', views.MessagesViewset, basename='messages')
router.register(r'Reviews', views.ReviewsViewset, basename='reviews')
router.register(r'StaticImages', views.StaticImagesViewSet, basename='staticImages')
router.register(r'HospitalWorkingHours', views.HospitalWorkingHoursViewSet, basename='hospitalworkinghours')
router.register(r'LabWorkingHours', views.LabWorkingHoursViewSet, basename='labworkinghours')
router.register(r'DoctorWorkingHours', views.DoctorWorkingHoursViewSet, basename='doctorworkinghours')
router.register(r'LabReportOrders', views.LabReportsOrderViewset, basename='labreportorders')

urlpatterns = [
    path('', include(router.urls)),
    path('login', csrf_exempt(LoginSetup.as_view()),name='post'),
    path('hospitals-all',csrf_exempt(views.HospitalsSimplifiedView),name='hospitals-all'),
    path('appointments-all',csrf_exempt(views.appointments_updated),name='appointments-data'),
    path('images-sample',csrf_exempt(views.sendImage),name='image-data'),
    path('image-get',csrf_exempt(views.getImageByFilter),name='get-image'),
    path('hospital-details',csrf_exempt(views.hospitalDetails),name='hospital-details'),
    path('hospitals-simple',csrf_exempt(views.hospitalsList),name='hospitals-simple'),
    path('doctors-simple',csrf_exempt(views.doctorsList),name='doctors-simple'),
    path('profile-pic-update',csrf_exempt(views.ProfilePicUpd),name='profile-pic-update'),
    path('hospitaldepartments',csrf_exempt(views.hospitalDepartments),name='hospitaldepartments'),
    path('hospital-workinghours',csrf_exempt(views.hospitalworkinghours),name='hospital-workinghours'),
    path('doctordepartments',csrf_exempt(views.doctorDepartments),name='doctordepartments'),
    path('hospital-summary',csrf_exempt(views.get_hospital_summary),name='hospitalsummary'),
    path('doctor-summary',csrf_exempt(views.get_doctor_summary),name='doctorsummary'),
    path('related-patients',csrf_exempt(views.profile_with_related_patients),name='related_patients'),
    path('pharmacymedicine',csrf_exempt(views.pharmacyMedicine),name='pharmacymedicine'),
    path('appointment-summary',csrf_exempt(views.get_appointment_summary),name='appointmentsummary'),
    path('appointment-doctor',csrf_exempt(views.get_appointment_doctor),name='appointmentdoctor'),

]

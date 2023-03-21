from django.urls import path
from . import views

urlpatterns = [
    path('getTestView', views.getTestView, name='getTestView'),
]

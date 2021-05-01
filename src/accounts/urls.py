from django.conf.urls import url
from django.urls import path, re_path
from django.contrib import admin

from .views import UserListAPIView, EditUserDetails

app_name = 'accounts'

urlpatterns = [
    path('', UserListAPIView.as_view(), name='list'),
    path('edit/<int:pk>/',
         EditUserDetails.as_view(), name='update'),
]

from django.conf.urls import url
from django.urls import path, re_path
from django.contrib import admin

from .views import (
    PostDeleteAPIView,
    PostDetailAPIView,
    PostListAPIView,
    PostUpdateAPIView,
    PostCreateAPIView
)

urlpatterns = [
    path('', PostListAPIView.as_view(), name='list'),
    path('create/', PostCreateAPIView.as_view(), name='create'),
    path('<slug:post_detail>/', PostDetailAPIView.as_view(), name='post_detail'),
    re_path(r'^(?P<slug>[\w-]+)/edit/$',
            PostUpdateAPIView.as_view(), name='update'),
    re_path(r'^(?P<slug>[\w-]+)/delete/$',
            PostDeleteAPIView.as_view(), name='delete'),
]

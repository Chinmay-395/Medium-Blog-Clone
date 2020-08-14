from django.conf.urls import url
from django.urls import path
from django.contrib import admin

from .views import (
    PostListAPIView
)

urlpatterns = [
    path('', PostListAPIView.as_view(), name='list'),
    # url(r'^create/$', post_create),
    # url(r'^(?P<slug>[\w-]+)/$', post_detail, name='detail'),
    # url(r'^(?P<slug>[\w-]+)/edit/$', post_update, name='update'),
    # url(r'^(?P<slug>[\w-]+)/delete/$', post_delete),
]

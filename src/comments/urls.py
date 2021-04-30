from django.conf.urls import url
from django.contrib import admin

from .views import (
    CommentCreateAPIView,
    CommentDetailAPIView,
    CommentListAPIView,
)
app_name = 'comments'
urlpatterns = [
    url(r'^$', CommentListAPIView.as_view(), name='list'),
    url(r'^create/$', CommentCreateAPIView.as_view(), name='create'),
    url(r'^(?P<pk>\d+)/$', CommentDetailAPIView.as_view(), name='thread'),
    #url(r'^(?P<id>\d+)/delete/$', comment_delete, name='delete'),
]


""" [How to write request of each comments]
    1) To Create a new comment on a post
        --> http://127.0.0.1:8000/comments/create/?type=post&slug=<slug_field_in_post> 
    2) To Edit/Delete the comment --> http://127.0.0.1:8000/comments/<comment_id>/edit/
        
"""

from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.generics import (
    DestroyAPIView,
    ListAPIView,
    RetrieveUpdateAPIView,
    RetrieveAPIView,
    CreateAPIView,
)
from django.db.models import Q
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly)
from .serializers import UserListSerializer, UserUpdateSerializer
from .permissions import IsOwnerOrReadOnly


class UserListAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserListSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['name', ]

    """ 
        How to use the SearchFilter and OrderingFilter in the url

        http://127.0.0.1:8000/posts/?search=chinmay&ordering=id
        NOTE: here the ordering can be done based on all the serializer-fields
              you can also order it backwards by using negative sign(-) before it
              for eg: http://127.0.0.1:8000/posts/?search=chinmay&ordering=-id
    """

    # def get_queryset(self):
    # queryset_list = User.objects.all()
    # pagination_class = PostPageNumberPagination  # PostLimitOffsetPagination


class EditUserDetails(RetrieveUpdateAPIView):
    print("I RAN")
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer
    # lookup_field = 'slug'
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

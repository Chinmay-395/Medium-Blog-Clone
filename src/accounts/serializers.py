from rest_framework.serializers import (ModelSerializer,
                                        HyperlinkedIdentityField, SerializerMethodField)
from django.contrib.auth.models import User


class UserListSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [

            'username',
            'id',
            'first_name',
            'email',
            'last_name'
        ]


class UserUpdateSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username',
                  # 'id',
                  'first_name',
                  'email',
                  'last_name']

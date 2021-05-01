# from rest_framework.permissions import BasePermission
from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    message = "You must be the owner of this object"
    """This has been commented since it hinders the delete api for comments"""
    # MY_SAFE_METHOD = ['PUT', 'GET', 'POST']

    # def has_permission(self, request, view):
    #     print("-----$$$$$$-------THE USER WHO IS REQUESTING is", request.user)
    #     if request.method in self.MY_SAFE_METHOD:
    #         print("CHECKOUT WHAT MY_SAFE_METHODS ARE", self.MY_SAFE_METHOD)
    #         return True
    #     return False

    def has_object_permission(self, request, view, obj):
        """
            ~~~The conventional method~~~
            DRF `SAFE_METHODS` are which is a tuple
            containing 'GET', 'OPTIONS' and 'HEAD'
        """
        print("------------THE USER WHO IS REQUESTING is", request.user)
        print("-#########-----------THE OBJ belongs to ", obj)
        print("THE OBJECT TYPE", type(obj))
        if request.method in permissions.SAFE_METHODS:
            # Check permissions for read-only request
            print("CHECKOUT WHAT SAFE_METHODS ARE", permissions.SAFE_METHODS)
            return True
        else:
            # Check permissions for write request
            return obj == request.user

        """ 
            ~~~The custom method~~~
            DRF `MY_SAFE_METHODS` are which is a tuple 
            containing 'GET', 'OPTIONS' and 'HEAD'
        """
        # MY_SAFE_METHOD = ['PUT', 'GET']
        # if request.method in MY_SAFE_METHOD:
        #     print("CHECKOUT WHAT MY_SAFE_METHODS ARE", SAFE_METHODS)
        #     return True
        # else:
        #     # Check permissions for write request
        #     print("THE USER WHO IS REQUESTING is", request.user)
        #     print("THE OBJ belongs to ", obj.user)
        #     return obj.user == request.user

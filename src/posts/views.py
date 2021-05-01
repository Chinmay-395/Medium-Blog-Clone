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
from posts.models import Post
from django.contrib.auth import get_user_model
from .serializers import (PostDetailSerializer,
                          PostListSerializer, PostCreateUpdateSerializer)
from .permissions import IsOwnerOrReadOnly
from .pagination import PostLimitOffsetPagination, PostPageNumberPagination


class PostCreateAPIView(CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateUpdateSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PostDetailAPIView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    lookup_field = 'slug'


class PostUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostCreateUpdateSerializer
    lookup_field = 'slug'
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    #lookup_url_kwarg = "abc"

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class PostDeleteAPIView(DestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    lookup_field = 'slug'
    #lookup_url_kwarg = "abc"


class PostListAPIView(ListAPIView):
    # queryset = Post.objects.all()
    serializer_class = PostListSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['title', 'content', 'user__username']

    """ 
        How to use the SearchFilter and OrderingFilter in the url

        http://127.0.0.1:8000/posts/?search=chinmay&ordering=id
        NOTE: here the ordering can be done based on all the serializer-fields
              you can also order it backwards by using negative sign(-) before it
              for eg: http://127.0.0.1:8000/posts/?search=chinmay&ordering=-id
    """

    pagination_class = PostPageNumberPagination  # PostLimitOffsetPagination

    def get_queryset(self, *args, **kwargs):
        queryset_list = Post.objects.all()
        query = self.request.GET.get("q")
        print("THE QUERY ===> ", query)
        if query:
            queryset_list = queryset_list.filter(
                Q(title__icontains=query) |
                Q(content__icontains=query) |
                Q(user__first_name__icontains=query) |
                Q(user__last_name__icontains=query)
            ).distinct()
            print("THE QUERYSET", queryset_list)
        return queryset_list

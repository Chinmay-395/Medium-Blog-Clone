from rest_framework.serializers import ModelSerializer

from posts.models import Post


class PostListSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'user',
            'id',
            'title',
            'slug',
            'content',
            'publish'
        ]
        read_only_fields = ['id']


class PostDetailSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'slug',
            'content',
            'publish'
        ]
        read_only_fields = ['id']


class PostCreateUpdateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            # 'id',
            'title',
            # 'slug',
            'content',
            'publish'
        ]
        # read_only_fields = ['id']

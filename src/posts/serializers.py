from rest_framework.serializers import ModelSerializer, HyperlinkedIdentityField

from posts.models import Post


class PostListSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(
        view_name='post-api:detail',
        lookup_field='slug'
        # lookup_url_kwarg = "post_detail"

    )

    class Meta:
        model = Post
        fields = [
            'user',
            'url',
            'id',
            'title',
            'slug',
            'content',
            'publish'
        ]


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

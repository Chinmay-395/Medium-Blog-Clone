from rest_framework.serializers import (ModelSerializer,
                                        HyperlinkedIdentityField, SerializerMethodField)

from posts.models import Post
from comments.models import Comment
from comments.serializers import CommentSerializer


post_detail_url = HyperlinkedIdentityField(
    view_name='post-api:detail',
    lookup_field='slug'
)
"""
    CODE:
        post_delete_url = HyperlinkedIdentityField(
            view_name='post-api:delete',
            lookup_field='slug'
        )
    NOTE: For the above code to work u need to comment has_permission function
          inside the permissions.py
"""


class PostListSerializer(ModelSerializer):
    url = post_detail_url
    user = SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'url',
            'user',
            'id',
            'title',
            'content',
            'publish'
        ]

    def get_user(self, obj):
        # print("THE OBJECT INSIDE THE SERIALIZER", obj.user)
        # print("THE OBJECT INSIDE THE SERIALIZER", obj.title)
        """
            NOTE: The object <obj> inside here refers to the object
                  of <Post> model
        """
        return str(obj.user.username)


class PostDetailSerializer(ModelSerializer):
    url = post_detail_url
    user = SerializerMethodField()
    image = SerializerMethodField()
    html = SerializerMethodField()
    comments = SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'url',
            'user',
            'id',
            'title',
            'slug',
            'content',
            'image',
            'html',
            'publish',
            'comments',
        ]
        read_only_fields = ['id']

    def get_html(self, obj):
        return obj.get_markdown()

    def get_user(self, obj):
        return str(obj.user.username)

    def get_image(self, obj):
        try:
            image = obj.image.url
        except:
            image = None
        return image

    def get_comments(self, obj):
        content_type = obj.get_content_type
        object_id = obj.id
        c_qs = Comment.objects.filter_by_instance(
            obj)  # c_qs --> comments queryset
        comments = CommentSerializer(c_qs, many=True).data
        return comments


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

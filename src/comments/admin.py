from django.contrib import admin

# Register your models here.
from .models import Comment


class CommentModelAdmin(admin.ModelAdmin):
    list_display = ["id", "content_type", "object_id",
                    "content_object", "parent", "timestamp"]
    list_display_links = ["content_object"]
    # list_editable = ["title"]
    # list_filter = ["updated", "timestamp"]

    # search_fields = ["title", "content"]

    class Meta:
        model = Comment


admin.site.register(Comment, CommentModelAdmin)

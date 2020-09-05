from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
# Register your models here.
from .models import Post


class PostModelAdmin(SummernoteModelAdmin):
    list_display = ["title", "updated", "timestamp"]
    list_display_links = ["updated"]
    list_editable = ["title"]
    list_filter = ["updated", "timestamp"]

    search_fields = ["title", "content"]

    summernote_fields = ('content',)

    class Meta:
        model = Post


admin.site.register(Post, PostModelAdmin)

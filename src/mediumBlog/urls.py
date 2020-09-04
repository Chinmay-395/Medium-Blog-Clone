from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('summernote/', include('django_summernote.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    # , namespace='post-api'
    path('posts/', include('posts.urls', namespace='post-api')),
    path('comments/', include('comments.urls', namespace='comment-api')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html'))]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

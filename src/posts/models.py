from __future__ import unicode_literals
from django.db import models
from django.urls import reverse


class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        """basically you can refer to this URL as
           as one of the <Post> object method 
           which can be called through <object_name>.<get_absolute_url>
        """
        return reverse("post:detail", kwargs={"id": self.id})
        """This will take me to <detail> page URL wherein
           the "id" of the post is passed in the request-object
        """

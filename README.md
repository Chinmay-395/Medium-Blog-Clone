<h1>Notes:-</h1>

Admin Login details
username: chinmay
password: test@1234

user-login
user-1: Mukesh
username: mukesh
email:mukesh@gmail.com
password: test@1234

## BACKEND

    To check whether the slugfield was properly working I need to create post through
    django shell, hence the following commands:-
    Creating a successful post in django-shell ==>
    Post.objects.create(title='New New',content='Break-a-Leg',publish=timezone.now())

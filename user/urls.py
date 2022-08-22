from django.urls import path
from core import urls

from . import views
from . import api

urlpatterns = [
    # API

    path("login", api.UserViewSet.as_view(
        {'post': 'login_user'})),
    path("register", api.Register.as_view(
        {'post': 'register_user'})),
    path("logout", api.Logout.as_view(
        {'post': 'logout_user'})),


    path("profile", api.ProfileViewSet.as_view(
        {'get': 'get_user_profile'})),
    path("edit", api.ProfileViewSet.as_view(
        {'put': 'edit_user'})),
    path("profile2", api.ProfileViewSet.as_view(
         {'get': 'get_b'})),


]

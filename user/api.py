
import email
import imp

from book.models import Book


from .serializer import EditSerializer, RegisterSerializer, UserSerializer, ProfileSerializer
from user.models import CustomUser
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth import login, authenticate, logout
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient


class UserViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]

    # permission_classes = [IsAuthenticated]

    def login_user(self, request, *args, **kwargs):
        email = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            print(request.user.email)
            return Response(status=201)
        else:

            return Response(status=400)


class Logout(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def logout_user(self, request, *args, **kwargs):

        request.user

        logout(request)
        return Response(status=201)


class Register(viewsets.ViewSet):
    permission_classrees = [AllowAny]

    def register_user(self, request, *args, **kwargs):

        serializer = RegisterSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=201)


class ProfileViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny, ]

    def get_user_profile(self, request, *args, **kwargs):

        user = Token.objects.get(
            key=request.auth).user
        books = Book.objects.filter(authorname=user)
        print(user)
        serializer = ProfileSerializer(
            user)

        return Response(serializer.data, status=201)

    def edit_user(self, request, *args, **kwargs):
        token = request.data.get('token')
        user = Token.objects.get(
            key=request.auth).user
        serializer = EditSerializer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=201)

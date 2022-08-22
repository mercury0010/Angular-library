
import imp


from user.models import CustomUser
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token

from book.models import Book, UserBorrowBook
from django.db.models import Q
from book.serializer import (BookSerializer, AddBookSerializer, ViewBookSerializer,
                             EditBookSerializer, BorrowBookSerializer, BookStatusSerializer, UserBorrowBookSerializer)


class BookViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    def get_books(self, request, *args, **kwargs):
        # import pdb
        # pdb.set_trace()

        books = Book.objects.all().order_by('-registerBookDate')

        # if self.request.user.is_authenticated:
        serializer = BookSerializer(books, many=True)

        return Response(serializer.data, status=201)

    def add_books(self, request, *args, **kwargs):
        user = Token.objects.get(
            key=request.auth).user

        data = {
            'title': request.data.get('title'),
            'authorname': request.user.id,
            'plot': request.data.get('plot'),
            'type': request.data.get('type'),
            'author': request.data.get('author'),
            'status': request.data.get('status'),
            'location': request.data.get('location'),
            'image': request.data.get('image'),

        }

        serializer = AddBookSerializer(data=data)
        print(data)

        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=404)

    def edit_books(self, request, *args, **kwargs):

        data = {
            'title': request.data.get('title'),
            'plot': request.data.get('plot'),
            'type': request.data.get('type'),
            'author': request.data.get('author'),
            'status': request.data.get('status'),
            'location': request.data.get('location'),
        }
        book = Book.objects.get(id=self.kwargs.get("id"))

        serializer = EditBookSerializer(book, data=data)

        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=201)
        else:

            return Response(serializer.errors, status=404)

    def filter_edit_books(self, request, *args, **kwargs):

        book = Book.objects.filter(id=self.kwargs.get("id"))

        serializer = EditBookSerializer(book, many=True)

        return Response(serializer.data, status=201)

    def delete_book(self, request, *args, **kwargs):

        book = Book.objects.get(id=self.kwargs.get("id"))

        if book:
            book.delete()
            return Response(status=201)
        return Response(status=404)


class GetBookViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    def get_book(self, request, *args, **kwargs):
        user = Token.objects.get(
            key=request.auth).user
        books = Book.objects.filter(authorname=user)

        print(books)

        serializer = ViewBookSerializer(books, many=True)

        return Response(serializer.data, status=201)


class BorrowBookViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    def borrow_book(self, request, *args, **kwargs):

        book1 = Book.objects.get(id=self.kwargs.get("id"))

        data = {
            'borrower': request.user.id,
            'books': book1.id,
            'returnedDate': request.data.get('returnedDate'),

        }

        serializer = BorrowBookSerializer(data=data)

        if serializer.is_valid():

            serializer.save()
            return Response(serializer.data, status=201)
        else:

            return Response(serializer.errors, status=201)

    def show_borrow_books(self, request, *args, **kwargs):

        book = Book.objects.filter(id=self.kwargs.get("id"))

        serializer = BookSerializer(book, many=True)

        return Response(serializer.data, status=201)

    def if_book_status(self, request, *args, **kwargs):
        data = {
            'status': request.data.get('status'), }
        print(data)
        book = Book.objects.get(id=self.kwargs.get("id"))
        print(book)
        serializer = BookStatusSerializer(
            book, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

    def get_borrow_book(self, request, *args, **kwargs):

        borrow_book = UserBorrowBook.objects.filter(
            borrower=request.user.id)

        if borrow_book:
            serializer = UserBorrowBookSerializer(borrow_book, many=True)

            return Response(serializer.data, status=201)

    def book_status(self, request, *args, **kwargs):

        book = Book.objects.get(title=self.kwargs.get("title"))

        serializer = BookStatusSerializer(
            book, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

    def delete_borrow_book(self, request, *args, **kwargs):
        print(self.kwargs.get("id"))
        book = UserBorrowBook.objects.get(id=self.kwargs.get("id"))

        if book:
            book.delete()
            return Response(status=201)
        return Response(status=404)


class SearchBookViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    def search(self, request, *args, **kwargs):
        # book = Book.objects.filter(title=self.kwargs.get("title"))
        query = self.kwargs.get("title")
        lookup = Q(title__contains=query) | Q(
            author__contains=query)
        searched = lookup

        book = Book.objects.filter(searched)
        serializer = BookSerializer(book, many=True)

        return Response(serializer.data, status=200)

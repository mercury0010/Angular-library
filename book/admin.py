from django.contrib import admin

from .models import Book, UserBorrowBook

admin.site.register(Book)
admin.site.register(UserBorrowBook)

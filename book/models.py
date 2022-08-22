import imp
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.timezone import now
from django.contrib.auth import get_user_model
from user.models import CustomUser


class Book(models.Model):
    title = models.CharField(max_length=255)
    authorname = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE)
    plot = models.TextField()
    author = models.CharField(max_length=255, null=True)
    type = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    image = models.ImageField(upload_to="book_pics",
                              default="profile.jpg", blank=True, null=True)
    status = models.CharField(max_length=255, blank=True, null=True)
    registerBookDate = models.DateTimeField(
        auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return str(self.title)

    def author_name(self):
        return self.authorname


class UserBorrowBook(models.Model):
    borrower = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE)
    books = models.ForeignKey(
        Book, on_delete=models.CASCADE)
    checkOutDate = models.DateField(auto_now_add=True, blank=True, null=True, )
    returnedDate = models.DateField(blank=True, null=True, )

    def __str__(self):
        return str(self.books)

from book.models import Book, UserBorrowBook

from user.models import CustomUser


from rest_framework import serializers


class BookSerializer(serializers.ModelSerializer):
    authorname = serializers.CharField(
        source='authorname.email')

    class Meta:
        model = Book
        fields = ('id',
                  'title',
                  'authorname',
                  'plot',
                  'type',
                  'location',
                  'image',
                  'author',
                  'status',)


class ViewBookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = (
            'id',
            'title',
            'authorname',
            'plot',
            'type',
            'location',
            'image',
            'author',
            'status',)


class AddBookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = (
            'title',
            'authorname',
            'plot',
            'type',
            'status',
            'location',
            'author',
        )


class EditBookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = (
            'title',
            'plot',
            'type',
            'status',
            'location',
            'author',
        )


class BorrowBookSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserBorrowBook
        fields = '__all__'


class BookStatusSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = (
            'status',
        )


class UserBorrowBookSerializer(serializers.ModelSerializer):
    books = serializers.CharField(
        source='books.title')

    class Meta:
        model = UserBorrowBook
        fields = (
            'id',
            'books',
            'checkOutDate',
            'returnedDate',
        )

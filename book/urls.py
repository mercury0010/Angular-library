from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from core import urls

from . import views
from . import api

urlpatterns = [
    # API

    path("book", api.BookViewSet.as_view(
        {'get': 'get_books'})),
    path("Addbook", api.BookViewSet.as_view(
        {'post': 'add_books'})),
    path("getbook", api.GetBookViewSet.as_view(
         {'get': 'get_book'})),
    path("editbook/<int:id>", api.BookViewSet.as_view(
         {'put': 'edit_books'})),
    path("filtereditbook/<int:id>", api.BookViewSet.as_view(
         {'get': 'filter_edit_books'})),
    path("deletebook/<int:id>", api.BookViewSet.as_view(
         {'delete': 'delete_book'})),

    path("borrowbook/<int:id>", api.BorrowBookViewSet.as_view(
        {'post': 'borrow_book'})),
    path("showborrowbook/<int:id>", api.BorrowBookViewSet.as_view(
         {'get': 'show_borrow_books'})),
    path("updateborrowbook/<int:id>", api.BorrowBookViewSet.as_view(
        {'put': 'if_book_status'})),
    path("returnborrowbook/<str:title>", api.BorrowBookViewSet.as_view(
        {'put': 'book_status'})),
    path("get_borrow_book", api.BorrowBookViewSet.as_view(
        {'get': 'get_borrow_book'})),
    path("deleteborrowbook/<int:id>", api.BorrowBookViewSet.as_view(
        {'delete': 'delete_borrow_book'})),

    path("search/<str:title>", api.SearchBookViewSet.as_view(
        {'get': 'search'})),


]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

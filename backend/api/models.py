from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    book_title = models.CharField(
        'Main Title', default='Book_Title', max_length=20, help_text="M_Title")

    book_ISBN = models.CharField(
        'Main Title', default='Book_ISBN', max_length=20, help_text="M_Title")

    book_page_num = models.CharField(
        'Main Title', default='Sheet_Page_Number', max_length=20, help_text="M_Title")

    book_edition = models.CharField(
        'Main Title', default='Book_Edition', max_length=20, help_text="M_Title")

    book_weight = models.CharField(
        'Main Title', default='Book_Weight', max_length=20, help_text="M_Title")

    boook_count = models.IntegerField(
        'Cost', default='Book_Count', max_length=25, help_text="Book Cost")

    boook_cost = models.FloatField(
        'Cost', default='Book_Cost', max_length=25, help_text="Book Cost")

    pub_date = models.DateField('Pub date')

    def __str__(self):

        return self.book_title

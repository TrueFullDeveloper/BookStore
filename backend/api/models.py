from django.db import models
from django.contrib.auth.models import User


class Publisher(models.Model):
    publisher_title = models.CharField(
        'Main Title', default='Book_Title', max_length=20, help_text="M_Title")

    publisher_phone = models.CharField(
        'Main Title', default='Book_ISBN', max_length=20, help_text="M_Title")

    publisher_address = models.CharField(
        'Main Title', default='Sheet_Page_Number', max_length=20, help_text="M_Title")

    def __str__(self):

        return self.publisher_title


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

    is_available = models.BooleanField(default=True)

    pub_date = models.DateField('Pub date')

    publisher = models.ForeignKey(Publisher)

    def __str__(self):

        return self.book_title


class Author(models.Model):
    author_first_name = models.CharField(
        'Main Title', default='Book_Title', max_length=20, help_text="M_Title")

    author_second_name = models.CharField(
        'Main Title', default='Book_ISBN', max_length=20, help_text="M_Title")

    author_third_name = models.CharField(
        'Main Title', default='Sheet_Page_Number', max_length=20, help_text="M_Title")

    book = models.ManyToManyField(Book)

    def __str__(self):

        return self.author_first_name


class Genre(models.Model):
    genre_title = models.CharField(
        'Main Title', default='Book_Title', max_length=20, help_text="M_Title")

    book = models.ManyToManyField(Book)

    def __str__(self):

        return self.genre_title


class Rating(models.Model):
    rating = models.IntegerField(
        'Cost', default='Book_Cost', max_length=25, help_text="Book Cost")

    book = models.ManyToManyField(Book)

    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):

        return self.genre_title


class DeliveryCompany(models.Model):
    delivery_company_title = models.CharField(
        'Main Title', default='Book_Title', max_length=20, help_text="M_Title")

    delivery_company_phone = models.CharField(
        'Main Title', default='Book_ISBN', max_length=20, help_text="M_Title")

    delivery_cost = models.FloatField(
        'Cost', default='Book_Cost', max_length=25, help_text="Book Cost")

    def __str__(self):

        return self.delivery_company_title


class Order(models.Model):
    order_number = models.CharField(
        'Main Title', default='Book_Title', max_length=20, help_text="M_Title")

    total_cost = models.FloatField(
        'Cost', default='Book_Cost', max_length=25, help_text="Book Cost")

    is_completed = models.BooleanField(default=False)

    completed_on = models.DateTimeField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    book = models.ManyToManyField(Book)
    delivery_company = models.ForeignKey(
        DeliveryCompany, on_delete=models.CASCADE)

    def __str__(self):

        return self.order_number


class Feedback(models.Model):
    feedback_text = models.CharField(
        'Main Title', default='Book_Title', max_length=3000, help_text="M_Title")

    created_at = models.DateTimeField(auto_now_add=True)

    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):

        return self.created_at


class Basket(models.Model):
    basket_number = models.CharField(
        'Main Title', default='Book_Title', max_length=3000, help_text="M_Title")

    book = models.ManyToManyField(Book)
    creator = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):

        return self.basket_number

from django.db import models
from django.contrib.auth.models import User


class Publisher(models.Model):
    publisher_title = models.CharField(
        'Publisher Title', default='Publisher_Title', max_length=20, )
    publisher_phone = models.CharField(
        'Publisher Phone', default='Publisher_Phone', max_length=20, )
    publisher_address = models.CharField(
        'Publisher Address', default='Publisher_Address', max_length=20, )

    class Meta:
        verbose_name = 'Издательство'
        verbose_name_plural = 'Издательства'

    def __str__(self):

        return self.publisher_title


class Author(models.Model):
    author_first_name = models.CharField(
        'Author First Name', default='NULL', max_length=20, )
    author_second_name = models.CharField(
        'Author Second Name', default='NULL', max_length=20, )
    author_third_name = models.CharField(
        'Author Third Name', default='NULL', max_length=20, )

    class Meta:
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'

    def __str__(self):

        return self.author_first_name


class Genre(models.Model):
    genre_title = models.CharField(
        'Genre Title', default='NULL', max_length=20, )

    class Meta:
        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'

    def __str__(self):

        return self.genre_title


class Rating(models.Model):
    rating = models.IntegerField(
        'Rating', default=0,)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Оценка'
        verbose_name_plural = 'Оценки'

    def __str__(self):

        return 'Rating'


class Book(models.Model):
    book_title = models.CharField(
        'Book Title', default='NULL', max_length=20, )
    book_ISBN = models.CharField(
        'Book ISBN', default='NULL', max_length=20, )
    book_page_num = models.CharField(
        'Book Page Number', default='NULL', max_length=20, )
    book_edition = models.CharField(
        'Book Edition', default='NULL', max_length=20, )
    book_weight = models.CharField(
        'Book Weight', default='NULL', max_length=20, )
    book_count = models.IntegerField(
        'Book Count', default=0,)
    book_cost = models.FloatField(
        'Book Cost', default=0, )
    is_available = models.BooleanField('Is Available', default=True)
    pub_date = models.DateField('Pub date')
    author = models.ManyToManyField(Author)
    genre = models.ManyToManyField(Genre)
    rating = models.ManyToManyField(Rating)
    publisher = models.ForeignKey(
        Publisher, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = 'Книга'
        verbose_name_plural = 'Книги'

    def __str__(self):

        return self.book_title


class DeliveryCompany(models.Model):
    delivery_company_title = models.CharField(
        'Delivery Company Title', default='NULL', max_length=20, )
    delivery_company_phone = models.CharField(
        'Delivery Company Phone', default='NULL', max_length=20, )
    delivery_cost = models.FloatField(
        'Delivery Cost', default=0,)

    class Meta:
        verbose_name = 'Доставщик'
        verbose_name_plural = 'Доставщики'

    def __str__(self):

        return self.delivery_company_title


class Order(models.Model):
    order_number = models.CharField(
        'Order Number', default='NULL', max_length=20, )
    total_cost = models.FloatField(
        'Total Cost', default=0, )
    is_completed = models.BooleanField("Is Completed", default=False)
    completed_on = models.DateTimeField("Completed on", null=True, blank=True)
    created_at = models.DateTimeField("Created at", auto_now_add=True)
    book = models.ManyToManyField(Book)
    delivery_company = models.ForeignKey(
        DeliveryCompany, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):

        return self.order_number


class Feedback(models.Model):
    feedback_text = models.CharField(
        'Feedback Text', default='NULL', max_length=3000, )
    created_at = models.DateTimeField("Created at", auto_now_add=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self):

        return self.created_at


class Basket(models.Model):
    basket_number = models.CharField(
        'Basket Number', default='NULL', max_length=3000, )
    book = models.ManyToManyField(Book)
    creator = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'

    def __str__(self):

        return self.basket_number

from django.db import models
from django.contrib.auth.models import User


class Publisher(models.Model):
    publisher_title = models.CharField(
        'Название издательства', default='Publisher_Title', max_length=20, )
    publisher_phone = models.CharField(
        'Номер издательства', default='Publisher_Phone', max_length=20, )
    publisher_address = models.CharField(
        'Адрес издательства', default='Publisher_Address', max_length=20, )

    class Meta:
        verbose_name = 'Издательство'
        verbose_name_plural = 'Издательства'

    def __str__(self):

        return self.publisher_title


class Author(models.Model):
    author_first_name = models.CharField(
        'Имя автора', default='NULL', max_length=20, )
    author_second_name = models.CharField(
        'Фамилия', default='NULL', max_length=20, )
    author_third_name = models.CharField(
        'Отчество', default='NULL', max_length=20, )

    class Meta:
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'

    def __str__(self):

        return self.author_first_name


class Genre(models.Model):
    genre_title = models.CharField(
        'Жанр', default='NULL', max_length=20, )

    class Meta:
        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'

    def __str__(self):

        return self.genre_title


class Rating(models.Model):
    rating = models.IntegerField(
        'Оценка', default=0,)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Оценка'
        verbose_name_plural = 'Оценки'

    def __str__(self):

        return 'Оценка'


class Book(models.Model):
    book_title = models.CharField(
        'Название книги', default='NULL', max_length=20, )
    book_ISBN = models.CharField(
        'Номер ISBN', default='NULL', max_length=20, )
    book_page_num = models.CharField(
        'Количество страниц', default='NULL', max_length=20, )
    book_edition = models.CharField(
        'Тираж', default='NULL', max_length=20, )
    book_weight = models.CharField(
        'Вес, г', default='NULL', max_length=20, )
    book_count = models.IntegerField(
        'Количество книг', default=0,)
    book_cost = models.FloatField(
        'Стоимость книги', default=0, )
    is_available = models.BooleanField('Наличие', default=True)
    pub_date = models.DateField('Дата публикации')
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
        'Название Компании Доставки', default='NULL', max_length=20, )
    delivery_company_phone = models.CharField(
        'Номер Компании Доставки', default='NULL', max_length=20, )
    delivery_cost = models.FloatField(
        'Стоимость доставки', default=0,)

    class Meta:
        verbose_name = 'Доставщик'
        verbose_name_plural = 'Доставщики'

    def __str__(self):

        return self.delivery_company_title


class Order(models.Model):
    order_number = models.CharField(
        'Номер заказа', default='NULL', max_length=20, )
    total_cost = models.FloatField(
        'Общая Стоимость', default=0, )
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
        'Отзыв', default='NULL', max_length=3000, )
    created_at = models.DateTimeField("Оставленный", auto_now_add=True)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'

    def __str__(self):

        return "Отзыв"


class Basket(models.Model):
    basket_number = models.CharField(
        'Номер Корзины', default='NULL', max_length=3000, )
    book = models.ManyToManyField(Book)
    creator = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Корзина'
        verbose_name_plural = 'Корзины'

    def __str__(self):

        return self.basket_number


class Promo(models.Model):
    promo_cod = models.CharField(
        'Промо-код', default='NULL', max_length=3000, )
    book = models.ManyToManyField(Book)

    class Meta:
        verbose_name = 'Промо-код'
        verbose_name_plural = 'Промо-коды'

    def __str__(self):

        return self.promo_cod

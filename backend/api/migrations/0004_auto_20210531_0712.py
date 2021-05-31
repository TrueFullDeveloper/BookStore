# Generated by Django 3.2.3 on 2021-05-31 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210531_0701'),
    ]

    operations = [
        migrations.RenameField(
            model_name='book',
            old_name='NULL',
            new_name='book_ISBN',
        ),
        migrations.RemoveField(
            model_name='author',
            name='book',
        ),
        migrations.RemoveField(
            model_name='genre',
            name='book',
        ),
        migrations.RemoveField(
            model_name='rating',
            name='book',
        ),
        migrations.AddField(
            model_name='book',
            name='author',
            field=models.ManyToManyField(to='api.Author'),
        ),
        migrations.AddField(
            model_name='book',
            name='book_title',
            field=models.CharField(default='NULL', max_length=20, verbose_name='Book Title'),
        ),
        migrations.AddField(
            model_name='book',
            name='genre',
            field=models.ManyToManyField(to='api.Genre'),
        ),
        migrations.AddField(
            model_name='book',
            name='rating',
            field=models.ManyToManyField(to='api.Rating'),
        ),
    ]

# Generated by Django 4.0.5 on 2022-08-18 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.ImageField(blank=True, default='profile.jpg', null=True, upload_to='book_pics'),
        ),
    ]

# Generated by Django 3.1.2 on 2021-01-23 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_staticimages'),
    ]

    operations = [
        migrations.AddField(
            model_name='hospitals',
            name='type',
            field=models.CharField(default='multi-speciality', max_length=25),
        ),
    ]

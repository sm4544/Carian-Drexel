# Generated by Django 3.1.2 on 2021-03-01 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0016_auto_20210226_1522'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointments',
            name='date',
            field=models.DateField(),
        ),
    ]

# Generated by Django 3.1.2 on 2020-10-06 07:47

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20201006_0314'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hospitals',
            name='originally_registered_date',
            field=models.DateTimeField(blank=True, default=datetime.date(2020, 10, 6)),
        ),
        migrations.AlterField(
            model_name='hospitals',
            name='registered_date',
            field=models.DateTimeField(blank=True, default=datetime.date(2020, 10, 6)),
        ),
    ]
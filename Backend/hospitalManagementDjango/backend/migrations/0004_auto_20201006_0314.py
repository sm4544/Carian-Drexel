# Generated by Django 3.1.2 on 2020-10-06 07:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20201006_0311'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hospitals',
            name='regisrted_by',
            field=models.CharField(max_length=9),
        ),
    ]
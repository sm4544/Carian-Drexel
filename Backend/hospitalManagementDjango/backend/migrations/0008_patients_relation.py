# Generated by Django 3.0.5 on 2021-02-19 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_auto_20210219_1414'),
    ]

    operations = [
        migrations.AddField(
            model_name='patients',
            name='relation',
            field=models.TextField(default='NULL'),
        ),
    ]
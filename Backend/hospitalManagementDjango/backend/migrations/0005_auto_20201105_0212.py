# Generated by Django 3.1.2 on 2020-11-05 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_auto_20201103_1019'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lab',
            old_name='Name',
            new_name='name',
        ),
    ]

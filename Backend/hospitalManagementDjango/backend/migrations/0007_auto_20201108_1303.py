# Generated by Django 3.1.2 on 2020-11-08 18:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20201105_0748'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lab',
            old_name='Name',
            new_name='name',
        ),
    ]

# Generated by Django 3.1.2 on 2020-10-12 23:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0008_auto_20201012_1851'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profiles',
            old_name='user_name',
            new_name='username',
        ),
    ]

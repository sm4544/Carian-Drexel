# Generated by Django 3.1.2 on 2021-02-07 12:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_doctorworkinghours'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doctorworkinghours',
            old_name='doctor_id',
            new_name='doctor',
        ),
    ]
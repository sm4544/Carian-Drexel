# Generated by Django 3.0.5 on 2021-03-08 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0019_auto_20210301_1210'),
    ]

    operations = [
        migrations.AlterField(
            model_name='doctorworkinghours',
            name='working_hours',
            field=models.BinaryField(),
        ),
    ]

# Generated by Django 3.1.2 on 2021-02-01 11:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0013_profilepic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profilepic',
            name='id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='profile_pic_image', serialize=False, to='backend.profiles', unique=True),
        ),
    ]

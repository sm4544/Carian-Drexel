# Generated by Django 3.1.2 on 2020-11-30 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0010_auto_20201123_2154'),
    ]

    operations = [
        migrations.CreateModel(
            name='StaticImages',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image_title', models.CharField(max_length=20)),
                ('encoded_image', models.TextField()),
            ],
        ),
    ]
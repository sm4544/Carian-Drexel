# Generated by Django 3.1.2 on 2021-02-05 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_delete_appointmentslots'),
    ]

    operations = [
        migrations.CreateModel(
            name='AppointmentSlots',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('time_slot', models.TimeField()),
            ],
        ),
    ]
# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-26 19:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Letters',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('letter', models.CharField(max_length=1)),
                ('currrent_color', models.CharField(max_length=6)),
                ('default_color', models.CharField(max_length=6)),
            ],
        ),
    ]
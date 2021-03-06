# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-10 03:52
from __future__ import unicode_literals

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('amount', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)])),
            ],
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('balance', models.PositiveIntegerField(default=0)),
                ('create_timestamp', models.DateTimeField(auto_now_add=True)),
                ('update_timestamp', models.DateTimeField(auto_now=True)),
                ('owner', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='transaction',
            name='source_wallet',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='source_wallet', to='coin.Wallet'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='target_wallet',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='target_wallet', to='coin.Wallet'),
        ),
        migrations.AlterUniqueTogether(
            name='transaction',
            unique_together=set([('source_wallet', 'target_wallet', 'timestamp')]),
        ),
    ]

from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from django.db import models


# Create your models here.
class Wallet(models.Model):
    owner = models.OneToOneField(User, db_index=True, on_delete=models.PROTECT)
    balance = models.PositiveIntegerField(default=0)
    create_timestamp = models.DateTimeField(auto_now_add=True)
    update_timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return 'Wallet (pk={})'.format(self.pk)


class Transaction(models.Model):
    source_wallet = models.ForeignKey(
        Wallet, related_name='source_wallet', db_index=True, on_delete=models.PROTECT,
    )
    target_wallet = models.ForeignKey(
        Wallet, related_name='target_wallet', db_index=True, on_delete=models.PROTECT,
    )
    timestamp = models.DateTimeField(auto_now_add=True)
    amount = models.PositiveIntegerField(validators=[MinValueValidator(1), ])

    class Meta:
        unique_together = (('source_wallet', 'target_wallet', 'timestamp'), )

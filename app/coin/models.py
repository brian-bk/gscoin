from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from django.db import models


class Wallet(models.Model):
    """
    Wallet model to contain a user's balance. For now, one-wallet-per-user
    """
    # Explicitly show that there is a db_index. This is a common lookup.
    owner = models.OneToOneField(User, db_index=True, on_delete=models.PROTECT)
    # Balance cannot be negative
    balance = models.PositiveIntegerField(default=0)
    create_timestamp = models.DateTimeField(auto_now_add=True)
    update_timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return (f'Wallet (pk={self.pk}, '
                f'owner__username={self.owner.username})')


class Transaction(models.Model):
    """
    Transaction tracking from one wallet to another.
    """
    source_wallet = models.ForeignKey(
        Wallet, related_name='source_wallet', db_index=True, on_delete=models.PROTECT,
    )
    target_wallet = models.ForeignKey(
        Wallet, related_name='target_wallet', db_index=True, on_delete=models.PROTECT,
    )
    timestamp = models.DateTimeField(auto_now_add=True)
    # Transaction amount must be positive and at least 1
    amount = models.PositiveIntegerField(validators=[MinValueValidator(1), ])

    class Meta:
        unique_together = (('source_wallet', 'target_wallet', 'timestamp'), )

    def __str__(self):
        return (f'Transaction (pk={self.pk}, '
                f'source_wallet__pk={self.source_wallet.pk}, '
                f'target_wallet__pk={self.target_wallet.pk})')

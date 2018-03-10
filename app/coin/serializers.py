from rest_framework import serializers
from django.contrib.auth.models import User
from django.db import transaction as db_transaction
from rest_framework.exceptions import ValidationError

from .models import Transaction, Wallet


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', )


class WalletSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True, default=serializers.CurrentUserDefault())

    class Meta:
        model = Wallet
        fields = ('id', 'owner', 'balance', 'create_timestamp', 'update_timestamp')
        read_only_fields = ('balance', )


class OwnerFilteredWalletPrimaryKeyField(serializers.PrimaryKeyRelatedField):

    def get_queryset(self):
        request = self.context.get('request', None)
        if not request:
            return None
        return Wallet.objects.filter(owner=request.user)


class TransactionSerializer(serializers.ModelSerializer):
    source_wallet = WalletSerializer(read_only=True)
    target_wallet = WalletSerializer(read_only=True)
    source_wallet_id = OwnerFilteredWalletPrimaryKeyField(
        source='source_wallet',
        write_only=True
    )
    target_wallet_id = serializers.PrimaryKeyRelatedField(
        source='target_wallet',
        queryset=Wallet.objects.all(),
        write_only=True
    )
    amount = serializers.IntegerField(min_value=1)

    def validate(self, data):
        if data['source_wallet'] == data['target_wallet']:
            raise ValidationError('Target wallet cannot be source wallet')
        return data

    class Meta:
        model = Transaction
        fields = (
            'id', 'source_wallet', 'target_wallet', 'source_wallet_id',
            'target_wallet_id', 'timestamp', 'amount'
        )
        read_only_fields = (
            'id', 'source_wallet', 'target_wallet', 'timestamp',
        )

    def create(self, validated_data):
        source_wallet = validated_data['source_wallet']
        target_wallet = validated_data['target_wallet']
        amount = validated_data['amount']

        # Do operations before atomic DB transaction
        transaction = Transaction(source_wallet=source_wallet,
            target_wallet=target_wallet, amount=amount)
        source_wallet.balance -= amount
        target_wallet.balance += amount

        # Django will rollback if it fails (error still would raise)
        with db_transaction.atomic():
            source_wallet.save()
            target_wallet.save()
            transaction.save()

        return transaction

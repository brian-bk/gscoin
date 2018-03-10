from django.shortcuts import get_object_or_404
from rest_framework import filters, mixins, permissions, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Transaction, Wallet
from .serializers import TransactionSerializer, UserSerializer, WalletSerializer


class AuthUser(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, format=None):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)


class OwnedWalletDetail(APIView):
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, format=None):
        wallet = get_object_or_404(Wallet, owner=request.user)
        serializer = WalletSerializer(wallet)
        return Response(serializer.data)


class WalletViewSet(mixins.CreateModelMixin,
                    mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    viewsets.GenericViewSet):

    queryset = Wallet.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )
    serializer_class = WalletSerializer
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('balance', 'create_timestamp', 'update_timestamp', )
    ordering = ('-balance', )


class TransactionViewSet(mixins.CreateModelMixin,
                         mixins.RetrieveModelMixin,
                         mixins.ListModelMixin,
                         viewsets.GenericViewSet):

    permission_classes = (permissions.IsAuthenticated, )
    serializer_class = TransactionSerializer
    filter_backends = (filters.OrderingFilter, )
    ordering_fields = ('timestamp', 'amount', )
    ordering = ('-timestamp', )

    def get_queryset(self):
        return Transaction.objects.filter(source_wallet__owner=self.request.user) | \
                 Transaction.objects.filter(target_wallet__owner=self.request.user)

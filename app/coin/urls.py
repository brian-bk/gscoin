from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'wallets', views.WalletViewSet, base_name='wallet')
router.register(r'transactions', views.TransactionViewSet, base_name='transaction')

urlpatterns = [
    url(r'^wallet/$', views.OwnedWalletDetail.as_view(), name='owned-wallet'),
    url(r'^user/$', views.AuthUser.as_view(), name='auth-user'),
] + router.urls

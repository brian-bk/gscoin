from django.conf.urls import url

from . import views
from .apps import AuthenticationConfig


app_name = AuthenticationConfig.name

urlpatterns = [
    url(r'^login/$', views.LoginView.as_view(), name='login'),
    url(r'^logout/$', views.LogoutView.as_view(), name='logout'),
    url(r'^register/$', views.RegisterView.as_view(), name='register'),
]

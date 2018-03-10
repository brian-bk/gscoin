from django.contrib.auth import authenticate, login, views as auth_views
from django.http import HttpResponseRedirect
from django.views.generic import CreateView

from .forms import RegisterForm


class RegisterView(CreateView):
    template_name = 'authentication/register.html'
    form_class = RegisterForm
    success_url = '/'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(self.get_success_url())
        return super(RegisterView, self).dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        redirect_response = super(RegisterView, self).form_valid(form)
        username = form.cleaned_data.get('username')
        raw_password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=raw_password)
        login(self.request, user)
        return redirect_response


class LoginView(auth_views.LoginView):
    template_name = 'authentication/login.html'
    redirect_authenticated_user = True
    success_url = '/'


class LogoutView(auth_views.LogoutView):
    template_name = 'authentication/logout.html'

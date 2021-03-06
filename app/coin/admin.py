from django.contrib import admin

from .models import Wallet


@admin.register(Wallet)
class WalletAdmin(admin.ModelAdmin):
    readonly_fields = ('owner', )
    list_display = ('id', 'owner', 'balance', 'create_timestamp', 'update_timestamp', )
    list_display_links = ('owner', )

    def get_actions(self, request):
        """
        Don't show the delete_selected action for non-superusers
        :param request:
        :return:
        """
        actions = super(WalletAdmin, self).get_actions(request)
        if request.user.is_superuser:
            return actions
        if 'delete_selected' in actions:
            del actions['delete_selected']
        return actions

    def has_add_permission(self, request):
        """
        No one can add (except the current logged in user through form)
        :param request:
        :return:
        """
        return False

    def has_delete_permission(self, request, obj=None):
        """
        Limit delete to only superusers
        :param request:
        :param obj:
        :return:
        """
        if request.user.is_superuser:
            return super(WalletAdmin, self).has_delete_permission(request, obj)
        return False

from django.contrib import admin
from .models import ProductModel

# Register your models here.


@admin.register(ProductModel)
class Admin(admin.ModelAdmin):
    list_display = ["id", "name", "price", "description", "created_at"]

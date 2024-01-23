from .models import *
from rest_framework import serializers
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

from django.contrib.auth.hashers import make_password


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    # <Your other UserSerializer stuff here>
    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super().create(validated_data)

    class Meta:
        model = get_user_model()
        fields = ("email", "username", "password")

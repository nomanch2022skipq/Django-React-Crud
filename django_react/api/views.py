from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializer import *

from rest_framework import generics

# from django.contrib.auth.forms import UserCreationForm


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = ProductModel.objects.all().order_by("-created_at")
    permission_classes = [IsAuthenticated]


class CreateUserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    

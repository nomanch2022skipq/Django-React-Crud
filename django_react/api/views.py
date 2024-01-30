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


class CategoryViewSet(ModelViewSet):
    serializer_class = CategorySerializer
    queryset = CategoryModel.objects.all()
    permission_classes = [IsAuthenticated]


class ProductWithCategoryViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    # queryset = ProductModel.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        category_id = self.request.query_params.get("category_id")
        if not category_id:
            return Response({"error": "category_id is required"}, status=400)
        return ProductModel.objects.filter(category=category_id)

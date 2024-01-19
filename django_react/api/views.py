from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializer import *


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = ProductModel.objects.all().order_by("-created_at")
    permission_classes = [IsAuthenticated]

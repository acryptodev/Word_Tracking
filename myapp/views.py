from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MatchingWordsSerializer
from .models import MatchingWords
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
index = never_cache(TemplateView.as_view(template_name='index.html'))
# Create your views here.
class MatchingWordsView(viewsets.ModelViewSet):
	serializer_class = MatchingWordsSerializer
	queryset = MatchingWords.objects.all()
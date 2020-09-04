from django.urls import path
from .views import MatchingWordsView

urlpatterns = [
    path('matchingwords/', MatchingWordsView)
    # path('scores/', ScoreView)
]
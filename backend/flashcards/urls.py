from django.urls import path
from .views import flashcard_list, flashcard_detail

urlpatterns = [
    path('flashcards/', flashcard_list, name='flashcard-list'),
    path('flashcards/<int:pk>/', flashcard_detail, name='flashcard-detail'),
]
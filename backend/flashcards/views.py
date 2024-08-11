from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Flashcard
from .serializers import FlashcardSerializer

@api_view(['GET', 'POST'])
def flashcard_list(request):
    if request.method == 'GET':
        flashcards = Flashcard.objects.all()
        serializer = FlashcardSerializer(flashcards, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = FlashcardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def flashcard_detail(request, pk):
    try:
        flashcard = Flashcard.objects.get(pk=pk)
    except Flashcard.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = FlashcardSerializer(flashcard)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = FlashcardSerializer(flashcard, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        flashcard.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

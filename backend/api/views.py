from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Portfolio

@api_view(['GET'])
def portfolio(request):
    item = Portfolio.objects.first()

    if item is None:
        return Response(
            {"message": "No portfolio data found"},
            status=404
        )

    data = {
        "name": item.name,
        "headline": item.headline,
        "skills": item.skills,
        "education": item.education
    }

    return Response(data)
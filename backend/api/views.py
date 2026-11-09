from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer

@api_view(['GET'])
@renderer_classes([JSONRenderer])
def portfolio(request):
    data = {
        "name": "Cyril D. Torena",
        "headline": "IT Student & Future Network Engineer",
        "skills": ["React", "Django", "Networking", "Cybersecurity"],
        "education": "Laguna State Polytechnic University"
    }
    return Response(data)

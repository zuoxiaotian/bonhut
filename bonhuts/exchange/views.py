# Create your views here.
from django.http                import HttpResponse
from django.shortcuts           import render

def default(request):
    test = {"st": "test st"}
    return render(request, "../templates/default.html", test)
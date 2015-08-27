# Create your views here.


def default(request):
    test = {"st": "test st"}
    return render(request, "../templates/default.html", test)  # @UndefinedVariable


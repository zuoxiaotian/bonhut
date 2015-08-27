# Create your views here.


@login_required  # @UndefinedVariable
def default(request):
    test = {"st": "test st"}
    return render(request, "../templates/default.html", test)  # @UndefinedVariable


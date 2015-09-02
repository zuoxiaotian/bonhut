# Create your views here.
from django.http.response import HttpResponseRedirect


def default(request):
    test = {"st": "test st"}
    return render(request, "../templates/default.html", test) 


def register(request):
    info = request.GET
    user = User.objects.create_user(info['username'], info['email'], info['password'])
    user.first_name = info['firstname']
    user.last_name = info['lastname']
    user.save()
    
    
    #Save userinfo record
    uinfo = UsersProfile(user = user)
    uinfo.middle_name = info['middle']
    uinfo.phone_number = info['phonenumber']
    
    user = authenticate(username = info['username'], password = info['password'])
    login(request, user)

    uinfo.save()
    return HttpResponse("success")

def login_view(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        if user.is_active:
            login(request, user)
            # Redirect to a success page.
            return HttpResponse("success")
        else:
            # Return a 'disabled account' error message
            return HttpResponse("disabled account")
    else:
        # Return an 'invalid login' error message.
        return HttpResponse("invalid login")



def logout_view(request):
    logout(request)
    return HttpResponse('success')
    
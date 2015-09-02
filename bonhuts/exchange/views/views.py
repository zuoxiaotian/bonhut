import SocketServer
import os
import ast
import csv, sys

from wsgiref                            import handlers
from django.http                        import HttpResponse
from django.shortcuts                   import render
from django.contrib.auth.models         import User
from django.contrib.auth                import login
from django.contrib.auth                import logout 
from django.contrib.auth                import authenticate
from django.contrib.auth.decorators     import login_required
from exchange.models                    import *

SocketServer.BaseServer.handle_error = lambda *args, **kwargs: None
handlers.BaseHandler.log_exception = lambda *args, **kwargs: None

import_dir = os.path.dirname(os.path.realpath(__file__)) + "/"
file_to_import = [
                  "views_login_logout.py",
                  ]

for file_ in file_to_import:
    print "importing: " + file_
    code = import_dir + file_
    execfile(code)
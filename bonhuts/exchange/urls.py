from django.conf.urls   import patterns, url
from exchange           import views
from django.conf        import settings

urlpatterns = patterns( ''                                                                      ,
                        url(r'^$'       , views.default         , name = 'default'          )   ,
                        
                        
                        
                        )
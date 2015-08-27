from django.conf.urls           import patterns, url
from exchange.views             import views
from django.conf                import settings
from django.conf.urls.static    import static

urlpatterns = patterns( ''                                                                      ,
                        url(r'^$'       , views.default         , name = 'default'          )   ,  # @UndefinedVariable
                        
                        
                        
                        )+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
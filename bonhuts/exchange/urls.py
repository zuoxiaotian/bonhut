from django.conf.urls           import patterns, url
from exchange.views             import views
from django.conf                import settings
from django.conf.urls.static    import static

urlpatterns = patterns(''                                                                           ,
                        url(r'^$'               , views.default             , name='default'    )   ,
                        url(r'^register$'       , views.register            , name='register'   )   ,
                        url(r'^login$'          , views.login_view          , name='login'      )   ,
                        url(r'^logout$'         , views.logout_view         , name='logout'     )   ,
                        url(r'^index$'          , views.index               , name='index'      )   ,
                        
                        
                        
                        ) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

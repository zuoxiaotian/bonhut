from django.conf.urls import patterns, url, include
from django.contrib import admin

from exchange.views             import views

admin.autodiscover()
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'testdjango.views.home', name='home'),
    #url(r'^blog/', include('blog.urls')),
    url(r'^$'       , views.default         , name = 'default'          )   ,  # @UndefinedVariable
                       
    url(r'^admin/', include(admin.site.urls)),
    url(r'^exchange/', include('exchange.urls'))
)

from django.conf.urls import patterns, url, include
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'testdjango.views.home', name='home'),
    #url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
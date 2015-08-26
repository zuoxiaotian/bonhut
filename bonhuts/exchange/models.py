from django.db import models

from django.contrib.auth.models import User

class Instrument(models.Model):
    name    =   models.CharField( max_length = 128, null = False)
    
    def __str__(self):
        return self.name.encode("utf-8")
    
# Create your models here.

from django.db import models

from django.contrib.auth.models import User

class UsersProfile(models.Model):
    user = models.ForeignKey(User, unique=True)
    phone_number = models.CharField(max_length = 30)
    middle_name = models.CharField(max_length=30)


class Instrument(models.Model):
    name    =   models.CharField( max_length = 128, null = False)
    
    def __str__(self):
        return self.name.encode("utf-8")
    
# Create your models here.

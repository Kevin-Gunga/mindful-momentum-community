from django.utils import timezone
from django.db import models

# Create your models here.
class Booking(models.Model):
    email = models.EmailField(max_length=254, null=False)
    phone_number = models.CharField(max_length=15, null=False)
    location = models.CharField(max_length=254, null=False)
    submitted_at = models.TimeField(default=timezone.now)
    
    def __str__(self):
        return f'{self.phone_number} {self.location}'
    
from django.shortcuts import render
from .models import Booking

# Create your views here.

def index (request): 
    if request  == 'POST':
        email = request.POST.get('email')   
        phone = request.POST.get('phone') 
        location = request.POST.get('location')
        
        book = Booking(email = email, phone_number = phone, location = location) 
        book.save()   
            
    return render(request, 'myapp/index.html') 
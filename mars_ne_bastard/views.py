from django.shortcuts import render

def landing(r):
    return render(r, 'landing/mars.html', locals())
from django.shortcuts import render
from .forms import SubscriberForm

def landing(r):
    form = SubscriberForm(r.POST or None)

    if r.method == "POST" and form.is_valid():
        data = form.cleaned_data

        new_form = form.save()

    return render(r, 'landing/mars.html', locals())
from django.shortcuts import render
from django.views import View


class Init(View):

    def get(self, request):
        return render(request, template_name="index.html")
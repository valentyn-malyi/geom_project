from django.urls import path, include

urlpatterns = [
    path('api/', include([
        path("v1/", include("v1.urls"))
    ])),
]

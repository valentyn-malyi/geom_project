from django.urls import path
from v1.views import PointsView, PointsGenerate

urlpatterns = [
    path("points/", PointsView.as_view()),
    path("points/generate/", PointsGenerate.as_view()),
]

from django.urls import path
from v1.views import PointsView, PointsGenerate, PolygonsGenerate, PolygonsView

urlpatterns = [
    path("points/", PointsView.as_view()),
    path("points/generate/", PointsGenerate.as_view()),
    path("polygons/", PolygonsView.as_view()),
    path("polygons/generate/", PolygonsGenerate.as_view()),
]

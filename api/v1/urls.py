from django.urls import path
from v1.views import PointsView, PointsGenerate, PolygonsGenerate, PolygonsView, PointsInPolygon

urlpatterns = [
    path("points/", PointsView.as_view()),
    path("points/generate/", PointsGenerate.as_view()),
    path("polygons/", PolygonsView.as_view()),
    path("polygons/generate/", PolygonsGenerate.as_view()),
    path("polygon/<int:_id>/points", PointsInPolygon.as_view())
]

from django.http import JsonResponse
from django.views import View
from django.core.handlers.wsgi import WSGIRequest
from v1.services import points_array, gen_points, add_status, gen_triangles, polygons_array, list_point_in_polygon
from time import sleep


class PointsView(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest):
        data = points_array()
        return JsonResponse(data=data)


class PointsGenerate(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest):
        gen_points()
        return JsonResponse(data=add_status())


class PolygonsGenerate(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest):
        gen_triangles()
        return JsonResponse(data=add_status())


class PolygonsView(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest):
        data = polygons_array()
        return JsonResponse(data=data)


class PointsInPolygon(View):
    # noinspection PyMethodMayBeStatic
    def get(self, request: WSGIRequest, _id: int):
        data = list_point_in_polygon(_id)
        return JsonResponse(data=data, safe=False)

from v1.models import Points
from typing import Union
from django.contrib.gis.geos import Point
import random


def add_status(data: Union[dict, list] = None) -> dict:
    new_data = {"status": "ok"}
    if data:
        new_data["data"] = data
    return new_data


def points_array() -> dict:
    a = []
    points = Points.objects.all()
    for point in points:
        a.append({
            "x": point.point.x,
            "y": point.point.y
        })
    data = add_status(a)
    return data


def gen_points() -> None:
    Points.objects.all().delete()
    for _ in range(100):
        point = Point(random.randint(0, 1600), random.randint(0, 900))
        Points(point=point).save()

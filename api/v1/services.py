from v1.models import Points, Polygons
from typing import Union, Tuple
from django.contrib.gis.geos import Point, Polygon
import random
import json


def geo_point() -> Tuple[int, int]:
    return random.randint(0, 1600), random.randint(0, 900)


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
            "y": point.point.y,
            "id": point.id
        })
    data = add_status(a)
    return data


def gen_points() -> None:
    Points.objects.all().delete()
    for _ in range(10000):
        point = Point(geo_point())
        Points(point=point).save()


def gen_triangles() -> None:
    Polygons.objects.all().delete()
    for _ in range(500):
        a = (geo_point())
        b = (geo_point())
        c = (geo_point())
        triangle = Polygon((a, b, c, a), )
        Polygons(poly=triangle).save()


def polygons_array() -> dict:
    a = []
    polygons = Polygons.objects.all()
    for polygon in polygons:
        coordinates = json.loads(polygon.poly.json)["coordinates"][0]
        coordinates_str = " ".join([f"{int(x)},{int(y)}" for x, y in coordinates[:-1]])
        poly_dict = {
            "id": polygon.id,
            "coordinates": coordinates_str
        }
        a.append(poly_dict)
    data = add_status(a)
    return data


def list_point_in_polygon(_id: int):
    polygon = Polygons.objects.filter(id=_id).first()
    if polygon is not None:
        points = [point.pk for point in Points.objects.all() if point.point.within(polygon.poly)]
        return add_status(points)
    else:
        return {
            "status": "error",
            "error": "IndexError",
            "message": f"Polygon not Found with id {_id}"
        }

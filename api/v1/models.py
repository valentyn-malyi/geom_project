from django.contrib.gis.db import models


class Polygons(models.Model):
    poly = models.PolygonField(db_index=True)


class Points(models.Model):
    point = models.PointField(db_index=True)

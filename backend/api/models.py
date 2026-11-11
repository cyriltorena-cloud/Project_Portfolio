
from django.db import models

class Portfolio(models.Model):
    name = models.CharField(max_length=100)
    headline = models.CharField(max_length=200)
    skills = models.JSONField(default=list)
    education = models.CharField(max_length=200)

    def __str__(self):
        return self.name

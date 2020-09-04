from django.db import models
class IntegerRangeField(models.IntegerField):
    def __init__(self, verbose_name=None, name=None, min_value=None, max_value=None, **kwargs):
        self.min_value, self.max_value = min_value, max_value
        models.IntegerField.__init__(self, verbose_name, name, **kwargs)
    def formfield(self, **kwargs):
        defaults = {'min_value': self.min_value, 'max_value':self.max_value}
        defaults.update(kwargs)
        return super(IntegerRangeField, self).formfield(**defaults)
# Create your models here.
class Category(models.Model):
	category = models.CharField(max_length=300)
	def __str__(self):
		return self.category
class SubCategory(models.Model):
	subcategory = models.CharField(max_length=200)
	def __str__(self):
		return self.subcategory
class MatchingWords(models.Model):
    weight = IntegerRangeField(min_value=0, max_value=10)
    keywords = models.CharField(max_length=300)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    def __str__(self):
        return self.keywords

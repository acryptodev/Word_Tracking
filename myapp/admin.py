from django.contrib import admin
from .models import MatchingWords, Category, SubCategory
# Register your models here.
class MatchingWordsAdmin(admin.ModelAdmin):
	list_display = ('keywords', 'category', 'subcategory', 'weight')
admin.site.register(MatchingWords, MatchingWordsAdmin)
admin.site.register(Category)
admin.site.register(SubCategory)

from rest_framework import serializers
from .models import MatchingWords, Category, SubCategory

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ['category']
class SubCategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = SubCategory
		fields = ['subcategory']
class MatchingWordsSerializer(serializers.ModelSerializer):
	category = CategorySerializer()
	subcategory = SubCategorySerializer()
	class Meta:
		model = MatchingWords
		fields = ['keywords', 'category', 'subcategory', 'weight']
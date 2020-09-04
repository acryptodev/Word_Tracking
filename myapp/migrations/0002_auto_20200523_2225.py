# Generated by Django 3.0.6 on 2020-05-24 02:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupWords',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('groupword', models.CharField(max_length=300)),
            ],
        ),
        migrations.AlterField(
            model_name='matchingwords',
            name='groupwords',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myapp.GroupWords'),
        ),
    ]
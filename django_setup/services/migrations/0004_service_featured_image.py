# Generated by Django 4.1.3 on 2022-12-07 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0003_rename_imagepath_service_image_path'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='featured_image',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to=''),
        ),
    ]

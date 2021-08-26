from flask import Blueprint, jsonify
from app.models import YogaClass

yoga_class_routes = Blueprint('yoga_classes', __name__)


@yoga_class_routes.route('/', methods=['GET'])
def yoga_classes():
    yoga_classes = YogaClass.query.all()
    return {'yoga_classes': [yoga_class.to_dict() for yoga_class in yoga_classes]}




from flask import Blueprint, jsonify
from app.models import YogaClass, db
from flask_login import current_user, login_required

yoga_class_routes = Blueprint('yoga_classes', __name__)


@yoga_class_routes.route('/', methods=['GET'])
def yoga_classes():
    yoga_classes = YogaClass.query.all()
    return {'yoga_classes': [yoga_class.to_dict() for yoga_class in yoga_classes]}


@yoga_class_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_class(id):
    yoga_class = YogaClass.query.get(id)
    return yoga_class.to_dict()
    # db.session.delete(yoga_class)
    # db.session.commit()

    return jsonify('delete succesful')

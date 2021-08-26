from flask import Blueprint, jsonify
from app.models import Teacher

teacher_routes = Blueprint('teachers', __name__)

@teacher_routes.route('/', methods=['GET'])
def teachers():
    teachers = Teacher.query.all()
    return {'teachers': [teacher.to_dict() for teacher in teachers]}




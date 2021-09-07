from flask import Blueprint, jsonify, request
from app.models.teacher import Teacher, db
from flask_login import current_user, login_required
from ..forms.teacher_form import YogaTeacher
from .auth_routes import validation_errors_to_error_messages

teacher_routes = Blueprint('teachers', __name__)


@teacher_routes.route('/', methods=['GET'])
def teachers():
    teachers = Teacher.query.all()
    return {'teachers': [teacher.to_dict() for teacher in teachers]}


@teacher_routes.route('/new', methods=['POST'])
def create_teacher(): 
    user = current_user
  
    form = YogaTeacher() 

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data

        yoga_teacher = Teacher(
           userId=data['userId']
           
        )
       
        db.session.add(yoga_teacher)
        db.session.commit()
        return yoga_teacher.to_dict()
  
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    


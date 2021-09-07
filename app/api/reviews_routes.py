from flask import Blueprint, jsonify, request
from app.models import Review, Teacher, db
from flask_login import current_user, login_required
from ..forms.review_form import ReviewForm
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime

reviews_routes = Blueprint('reviews', __name__)


@reviews_routes.route('/', methods=['GET'])
def reviews():
    reviews = Review.query.all()
    return {'reviews': [reviews.to_dict() for review in reviews]}


# @yoga_class_routes.route('/<int:id>/', methods=['GET'])
# @login_required
# def yoga_class(id):
#     yoga_class = YogaClass.query.get(id)
   
#     # db.session.delete(yoga_class)
#     # db.session.commit()
#     return yoga_class.to_dict()
#     # return jsonify('delete succesful')


# @yoga_class_routes.route('/<int:id>/', methods=['DELETE'])
# @login_required
# def delete_class(id):
#     yoga_class = YogaClass.query.get(id)
   
#     db.session.delete(yoga_class)
#     db.session.commit()

#     return jsonify('delete succesful')


# @yoga_class_routes.route('/new/', methods=['POST'])
# @login_required
# def create_class():
#     user = current_user


#     # teacher = Teacher.to_dict()
#     # teacher = Teacher.query.filter({'userId': {user.id}})
#     # teacher = Teacher.query.all()
#     # for teach in teacher: 
    
#     form = YogaClassForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         data = form.data
       
#         yoga_class = YogaClass(
#             taughtBy=data['taughtBy'],
#             classDate=data['classDate'],
#             pic=data['pic'],
#             title=data['title'],
#             description=data['description'],
#             price=data['price'],
#             address=data['address'],
#             city=data['city'],
#             state=data['state'],
#             postal_code=data['postalCode'],
#             created_at=datetime.now()
#         )
#         print(yoga_class)

#         db.session.add(yoga_class)
#         db.session.commit()
#         return yoga_class.to_dict()
  
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @yoga_class_routes.route('/update/<int:id>/', methods=['PUT'])
# @login_required
# def update_caption(id):
#     print('XXXXXXXXXXXXXXX', id)
#     form = YogaClassForm()
    
#     form['csrf_token'].data = request.cookies['csrf_token']
    
#     if form.validate_on_submit():
#         yoga_class = YogaClass.query.get_or_404(id)
#         data = form.data
#         yoga_class.taughtBy = data['taughtBy'],
#         yoga_class.classDate = data['classDate'],
#         yoga_class.pic = data['pic'],
#         yoga_class.title = data['title'],
#         yoga_class.description = data['description']
#         yoga_class.price = data['price'],
#         yoga_class.address = data['address'],
#         yoga_class.city = data['city'],
#         yoga_class.state = data['state'],
#         yoga_class.postal_code = data['postalCode'],
#         db.session.commit()
#         return {'updated_yoga_class' : yoga_class.to_dict()}
#     return {'errors': validation_errors_to_error_messages(form.errors)}
  

from flask import Blueprint, jsonify, request
from app.models.yoga_class_booking import YogaClassBooking, db
from flask_login import current_user, login_required
from ..forms.yoga_class_booking import YogaClassBookingForm
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime

yoga_class_booking_routes = Blueprint('yoga_class_bookings', __name__)


@yoga_class_booking_routes.route('/', methods=['GET'])
def yoga_class_bookings():
    yoga_class_bookings = YogaClassBooking.query.all()
    return {'yoga_class_bookings': [yoga_class_booking.to_dict() for yoga_class_booking in yoga_class_bookings]}


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


@yoga_class_booking_routes.route('/new/', methods=['POST'])
@login_required
def create_class_booking():
    user = current_user
    form = YogaClassBookingForm()
   
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
    
        yoga_class_booking = YogaClassBooking(
           userId=data['userId'],
           classId=data['classId']
        )
        print(yoga_class_booking)
        db.session.add(yoga_class_booking)
        db.session.commit()
        return yoga_class_booking.to_dict()
  
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# @yoga_class_routes.route('/update/<int:id>/', methods=['PUT'])
# @login_required
# def update_caption(id):
#     yoga_class = YogaClass.query.get(id)
#     form = YogaClassForm()

#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         data = form.data
#         yoga_class.description = data['description']

#     db.session.commit()
#     return yoga_class.to_dict()

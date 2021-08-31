from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import DateField, IntegerField
from wtforms.fields.simple import FileField
from wtforms.validators import DataRequired, Email, Regexp, ValidationError


# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')


class YogaClassForm(FlaskForm):
    class_date = StringField(u'Class Date')
    print('XXXXXXXXXXXXXX',  class_date)
    class_pic = StringField(u'Class Pic')
    title = StringField(u'Title')
    print('XXXXXXXXXXXXXX', title)
    description = StringField(u'Description')
    price = StringField(u'Price')
    address = StringField(u'Address')
    city = StringField(u'City')
    state = StringField(u'State')
    postalCode = StringField(u'Postal Code')
 
    def updateYogaForm(self, newDescription):
        self.description = newDescription

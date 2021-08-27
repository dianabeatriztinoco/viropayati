from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import IntegerField
from wtforms.fields.simple import FileField
from wtforms.validators import DataRequired, Email, ValidationError


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
    class_date = StringField('classDate', validators=[DataRequired()])
    title = StringField('title', validators=[DataRequired()])
    class_pic = StringField('classPic', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
    price = StringField('price', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    postalCode = StringField('postalCode', validators=[DataRequired()])
 

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import DateField, IntegerField
from wtforms.fields.html5 import URLField
from wtforms.fields.simple import FileField
from wtforms.validators import DataRequired, Email, Regexp, ValidationError, URL


# def user_exists(form, field):
#     # Checking if user exists
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email address is already in use.')


# def proper_url_format(form, field):
#     # checking url format
#     pic = field.data
#     if pic:
#         raise ValidationError('Please Enter A Valid URL Format')


class YogaClassForm(FlaskForm):
    taughtBy = IntegerField('Teacher Id',  validators=[DataRequired()])
    classDate = StringField('classDate', validators=[DataRequired()])
    pic = StringField('pic',  validators=[DataRequired(), URL(message='Please Enter A Valid URL Format for Upload Image')])
    title = StringField('Title')
    description = StringField('description',  validators=[DataRequired()])
    price = StringField('Price',   validators=[DataRequired()])
    address = StringField('Address',  validators=[DataRequired()])
    city = StringField('City',  validators=[DataRequired()])
    state = StringField('State',  validators=[DataRequired()])
    postalCode = StringField('postalCode',  validators=[DataRequired()])
 
    def updateYogaForm(self, newDescription):
        self.description = newDescription


# Regexp('\d{4}[--]\d{2}[--]\d{2}', message=('Enter Proper Date Format mm/dd/yyyy'
from flask_wtf import FlaskForm
from sqlalchemy.sql.sqltypes import Boolean
from wtforms import StringField
from wtforms.fields.core import BooleanField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User



def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')



class SignUpForm(FlaskForm):
    isTeacher = BooleanField('isTeacher', validators=[DataRequired()])
    fullname = StringField('fullname', validators=[DataRequired()])
    username = StringField('username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists, Email()])
    password = StringField('password', validators=[DataRequired()]) 
    isteacher = BooleanField('isteacher')



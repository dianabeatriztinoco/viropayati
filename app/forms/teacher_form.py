from flask_wtf import FlaskForm
from werkzeug import datastructures
from wtforms import StringField
from wtforms.fields.core import DateField, IntegerField
from wtforms.fields.simple import FileField
from wtforms.validators import DataRequired, Email, Regexp, ValidationError


class YogaTeacher(FlaskForm):

    userId = IntegerField('userId', validators=[DataRequired()])
    

      

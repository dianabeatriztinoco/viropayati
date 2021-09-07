from flask_wtf import FlaskForm
from werkzeug import datastructures
from wtforms import StringField
from wtforms.fields.core import DateField, IntegerField
from wtforms.fields.simple import FileField
from wtforms.validators import DataRequired, Email, Regexp, ValidationError


class ReviewForm(FlaskForm):
    teacher_id = IntegerField('teacher_id', validators=[DataRequired()])
    content = IntegerField('content', validators=[DataRequired()])
    
    def updateYogaForm(self,content):
        self.content = content

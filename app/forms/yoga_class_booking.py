from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.fields.core import DateField, IntegerField
from wtforms.fields.simple import FileField
from wtforms.validators import DataRequired, Email, Regexp, ValidationError


class YogaClassBookingForm(FlaskForm):
    userId = IntegerField('userId')
    classId = IntegerField('classId')
    
    def updateYogaForm(self, userId, classId):
        self.userId = userId,
        self.classId = classId

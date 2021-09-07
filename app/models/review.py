from .db import db
from datetime import datetime, timedelta
from flask_login import UserMixin
# from .teacher import teachers


class Review(db.Model, UserMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    content = db.Column(db.String(500), nullable=False)

    teachers = db.relationship('Teacher', back_populates='reviews')
   
    def to_dict(self):
        return {
            'id': self.id,
            'teacher_id': self.teacher_id,
            'content': self.content,
        }

from .db import db
from datetime import datetime, timedelta
from flask_login import UserMixin
# from .teacher import teachers


class Teacher(db.Model, UserMixin):
    __tablename__ = 'teachers'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    bio = db.Column(db.String(100))

    users = db.relationship('User', back_populates='teachers')
    reviews = db.relationship('Review', back_populates='teachers')
    yogaClasses = db.relationship('YogaClass', back_populates='yogaTeachers')
    # users = db.relationship('User', back_populates="yogaClasses")
    
    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'bio': self.bio,
        }

from .db import db
from datetime import datetime, timedelta
from flask_login import UserMixin
from .teacher import teachers


class YogaClass(db.Model, UserMixin):
    __tablename__ = 'yogaClasses'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Integer, nullable=False, unique=True)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.yogaClassId'))
    created_at = db.Column(db.DateTime, default=datetime.now)

    # users = db.relationship('User', back_populates="yogaClasses")
    yogaTeachers = db.relationship('User', secondary=teachers, back_populates='userTeachers')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'postal_code': self.postal_code,
            'teacher_id': self.teacher_id,
            'created_at': self.created_at
        }

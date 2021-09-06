from .db import db
from datetime import datetime, timedelta
from flask_login import UserMixin


class YogaClass(db.Model, UserMixin):
    __tablename__ = 'yogaClasses'

    id = db.Column(db.Integer, primary_key=True)
    taughtBy = db.Column(db.Integer, db.ForeignKey('teachers.id'))
    classDate = db.Column(db.String(40), nullable=False)
    pic = db.Column(db.String(255), nullable=False)
    title = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)

    yogaTeachers = db.relationship('Teacher', back_populates='yogaClasses')
    yogaClasses = db.relationship('YogaClassBooking', back_populates='yogaClasses')


    
    # yogaTeachers = db.relationship('User', secondary=teachers, back_populates='userTeachers')
    # users = db.relationship('User', back_populates="yogaClasses")
    
    def to_dict(self):
        return {
            'id': self.id,
            'pic': self.pic,
            'classDate': self.classDate,
            'title': self.title,
            'description': self.description,
            'price': self.price,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'postal_code': self.postal_code,
            'teacher_id': self.taughtBy,
            'created_at': self.created_at
        }


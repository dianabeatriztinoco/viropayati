from .db import db
from datetime import datetime, timedelta
from flask_login import UserMixin
# from .teacher import teachers


class YogaClassBooking(db.Model, UserMixin):
    __tablename__ = 'classBookings'

    id = db.Column(db.Integer, primary_key=True)
    classId = db.Column(db.Integer, db.ForeignKey('yogaClasses.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, default=datetime.now)

    users = db.relationship('User', back_populates='classBookings')
    yogaClasses = db.relationship('YogaClass', back_populates='yogaClasses')
    # users = db.relationship('User', back_populates="yogaClasses")
    
    def to_dict(self):
        return {
            'id': self.id,
            'classId': self.classId,
            'userId': self.userId,
            'created_at': self.created_at
        }

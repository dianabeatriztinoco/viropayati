from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from flask_login import UserMixin


# Teachers = db.Table(
#     "",
#     db.Column("followerId", db.Integer, db.ForeignKey("users.id")),
#     db.Column("followingId", db.Integer, db.ForeignKey("users.id")),
#     db.Column("timestamp", db.DateTime, default=datetime.now)
# )


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(40), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    isTeacher = db.Column(db.Boolean, default=True, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.now,)

    # yogaClasses = db.relationship('YogaClass', back_populates="users")
    teachers = db.relationship('Teacher', back_populates='users')
    classBookings = db.relationship('YogaClassBooking', back_populates='users')
    # userTeachers = db.relationship('YogaClass', secondary=teachers, back_populates='yogaTeachers')
    
    
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'fullname': self.fullname,
            'username': self.username,
            'email': self.email,
            'isTeacher': self.isTeacher,
            'created_at': self.created_at
        }


# User.userTeachers.append(YogaClass)
# db.session.add(User)
# db.session.commit()
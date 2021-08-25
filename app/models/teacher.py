from .db import db

teachers = db.Table(
    "teachers",
    db.Model.metadata,
    db.Column('userId', db.Integer, db.ForeignKey('users.id')),
    db.Column('yogaClassId', db.Integer, db.ForeignKey('yogaClasses.id'))
)
    # users = db.relationship('User', back_populates='teachers')
    # yoga_classes = db.relationship('YogaClass', back_populates='teachers')

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'user_id': self.fullname,
    #         'bio': self.username,
    #         'class_id': self.email,
    #     }

 
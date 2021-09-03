from app.models.yoga_class_booking import YogaClassBooking, db


def seed_YogaClassBookings():
    book1 = YogaClassBooking(
        classId=1, userId=1)
    book2 = YogaClassBooking(
        classId=2, userId=3)
    book3 = YogaClassBooking(
       classId=3, userId=4)
    book4 = YogaClassBooking(
        classId=4, userId=1)
    
    db.session.add(book1)
    db.session.add(book2)
    db.session.add(book3)
    db.session.add(book4)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the Classs table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_YogaClassBookings():
    db.session.execute('TRUNCATE Classs RESTART IDENTITY CASCADE;')
    db.session.commit()

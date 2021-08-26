from app.models import db, Teacher


def seed_teachers():
    teacher1 = Teacher(
        userId=2, bio='biobiobiobio')
    teacher2 = Teacher(
         userId=5, bio='biobiobiobio')
    teacher3 = Teacher(
        userId=6, bio='biobiobiobio')
    teacher4 = Teacher(
        userId=7, bio='biobiobiobio')
    
    db.session.add(teacher1)
    db.session.add(teacher2)
    db.session.add(teacher3)
    db.session.add(teacher4)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the Classs table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_teachers():
    db.session.execute('TRUNCATE Classs RESTART IDENTITY CASCADE;')
    db.session.commit()

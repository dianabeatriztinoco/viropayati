from app.models import db, Teacher


def seed_teachers():
    teacher1 = Teacher(
        user_id=2, bio='biobiobiobio', class_id=1)
    teacher2 = Teacher(
         user_id=5, bio='biobiobiobio', class_id=2)
    teacher3 = Teacher(
        user_id=6, bio='biobiobiobio', class_id=3)
    teacher4 = Teacher(
        user_id=7, bio='biobiobiobio', class_id=4)
    
    db.session.add(teacher1)
    db.session.add(teacher2)
    db.session.add(teacher3)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the Classs table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_teachers():
    db.session.execute('TRUNCATE Classs RESTART IDENTITY CASCADE;')
    db.session.commit()

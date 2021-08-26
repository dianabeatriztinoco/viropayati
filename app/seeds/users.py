from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo_student = User(
        fullname='Demo Student', username='demo_student', email='demoStudent@aa.io', password='password', isTeacher=False)
    demo_teacher = User(
        fullname='Demo Teacher', username='demo_teacher', email='demoTeacher@aa.io', password='password', isTeacher=True)    
    student1 = User(
        fullname='marnie student', username='marnie_student', email='marnieStudent@aa.io', password='password', isTeacher=False)
    student2 = User(
        fullname='bobbie student', username='bobbie_student', email='bobbieStudent@aa.io', password='password', isTeacher=False)
    teacher1 = User(
        fullname='marnie teacher', username='marnie_teacher', email='marnieTeacher@aa.io', password='password', isTeacher=True)
    teacher2 = User(
        fullname='bobbie teacher', username='bobbie_teacher', email='bobbieTeacher@aa.io', password='password', isTeacher=True)
    teacher3 = User(
        fullname='carlie teacher', username='carlie_teacher', email='carlieTeacher@aa.io', password='password', isTeacher=True)

    db.session.add(demo_student)
    db.session.add(demo_teacher)
    db.session.add(student1)
    db.session.add(student2)
    db.session.add(teacher1)
    db.session.add(teacher2)
    db.session.add(teacher3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

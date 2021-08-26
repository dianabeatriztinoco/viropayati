from app.models import db, YogaClass


def seed_classes():
    class1 = YogaClass(
        title='Vynasa Power Flow', description='description', price=20, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=1)
    class2 = YogaClass(
        title='Gentle Yoga',  description='description', price=10, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=2)
    class3 = YogaClass(
        title='Heart Opening Hatha', description='description', price=5, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=3)
    class4 = YogaClass(
        title='Self Love Yoga',  description='description', price=0, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=4)
    
    db.session.add(class1)
    db.session.add(class2)
    db.session.add(class3)
    db.session.add(class4)
    
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the Classs table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_classes():
    db.session.execute('TRUNCATE Classs RESTART IDENTITY CASCADE;')
    db.session.commit()

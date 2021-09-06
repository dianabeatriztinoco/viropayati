from app.models import db, YogaClass


def seed_classes():
    class1 = YogaClass(
        title='Vinyasa Flow Yoga', description="Vinyasa Flow yoga emphasizes the sequential movement between postures, coordinated with and guided by deliberate breath. The Vinyasa practice becomes a moving meditation that creates strength, freedom and fluidity in the body and mind. As we ride the waves of breath in our Yoga practice, we learn to ride the waves of change in our lives with more ease. This class moves from pose to pose with each held for no more than five to eight breaths. Expect a fully balanced class of forward bending, twists, backbends with opportunity for inversions. All levels are welcome to join this vigorous practice in finding one's state of flow!", price=20, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=1, pic='https://i.imgur.com/VzSYqfi.png', classDate='10/25/2021')
    class2 = YogaClass(
        title='Gentle Yoga',  description='Gentle Flow Yoga is geared specifically for those new to yoga or those who are interested in a gentle practice.  This class incorporates simple flowing sequences to warm up the body, as well as slower paced movements focusing on alignment, strength, balance, and flexibility.  Each class will end with an extended period of relaxation.  This class is appropriate for anyone of any age, shape or size. No experience or flexibility required.', price=10, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=2, pic='https://i.imgur.com/GKR2l89.png', classDate='10/15/2021')
    class3 = YogaClass(
        title='Hatha Yoga', description='Most forms of yoga in the West can be classified as Hatha Yoga. Hatha simply refers to the practice of physical yoga postures, meaning your Ashtanga, vinyasa, Iyengar and Power Yoga classes are all Hatha Yoga. The word “hatha” can be translated two ways: as “willful” or “forceful,” or the yoga of activity, and as “sun” (ha) and “moon” (tha), the yoga of balance. Hatha practices are designed to align and calm your body, mind, and spirit in preparation for meditation.', price=5, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=3, pic='https://i.imgur.com/AlZ7yZd.jpg', classDate='10/05/2021')
    class4 = YogaClass(
        title='Kundalini Yoga',  description='Kundalini yoga is most associated with Yogi Bhajan, a yoga teacher from Pakistan. He’s credited with introducing the practice to Western countries in the 1960s.The term “Kundalini” comes from the Sanskrit word “kundal,” which means “circular.” It also refers to a coiled snake. And according to practitioners, Kundalini energy is like that coiled snake: It sits at the base of your spine, sleeping and unaroused.Kundalini yoga is practiced to activate this energy, which allows it to move up and through the chakras along your spine.', price=0, address='123 Main st.', city='New Orleans', state='LA', postal_code=70114, taughtBy=4, pic='https://i.imgur.com/AzLZApV.jpg', classDate='09/8/2021')
    
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

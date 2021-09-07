from flask.cli import AppGroup
from .users import seed_users, undo_users
from .yoga_classes import seed_classes, undo_classes
from .teachers import seed_teachers, undo_teachers
from .class_bookings import seed_YogaClassBookings, undo_YogaClassBookings
from .reviews import seed_Reviews, undo_Reviews


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_teachers()
    seed_classes()
    seed_YogaClassBookings()
    seed_Reviews()
    
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_teachers()
    undo_classes()
    undo_YogaClassBookings()
    undo_Reviews()
    # Add other undo functions here

from flask.cli import AppGroup
from .users import seed_users, undo_users
from .yoga_classes import seed_classes, undo_classes
from .teachers import seed_teachers, undo_teachers


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_teachers()
    seed_classes()
    
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_teachers()
    undo_classes()
    # Add other undo functions here

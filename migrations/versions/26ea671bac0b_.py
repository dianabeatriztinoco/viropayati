"""empty message

Revision ID: 26ea671bac0b
Revises: 6be52f278533
Create Date: 2021-09-06 23:57:20.185266

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '26ea671bac0b'
down_revision = '6be52f278533'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('yogaClasses', 'taughtBy',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('yogaClasses', 'taughtBy',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###

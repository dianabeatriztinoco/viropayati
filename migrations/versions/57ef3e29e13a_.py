"""empty message

Revision ID: 57ef3e29e13a
Revises: 26ea671bac0b
Create Date: 2021-09-07 00:04:23.767395

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '57ef3e29e13a'
down_revision = '26ea671bac0b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('teachers', 'bio',
               existing_type=sa.VARCHAR(length=100),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('teachers', 'bio',
               existing_type=sa.VARCHAR(length=100),
               nullable=False)
    # ### end Alembic commands ###

"""added designs table

Revision ID: 23a1537bd97d
Revises: 8e050c391a73
Create Date: 2021-12-24 12:40:28.372347

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23a1537bd97d'
down_revision = '8e050c391a73'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('design',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('des_name', sa.String(length=64), nullable=True),
    sa.Column('des_description', sa.Text(), nullable=True),
    sa.Column('price', sa.String(length=20), nullable=True),
    sa.Column('preview_path', sa.String(length=256), nullable=True),
    sa.Column('imgs_path', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_unique_constraint(None, 'user', ['login'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_table('design')
    # ### end Alembic commands ###

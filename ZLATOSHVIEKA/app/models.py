from app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(64), unique=True)
    email = db.Column(db.String(64), unique=True)
    password = db.Column(db.String(128))
    isAdmin = db.Column(db.Integer, default=0)

    def set_pswrd(self, password):
        self.password = generate_password_hash(password)

    def check_pswrd(self, password):
        return check_password_hash(self.password, password)


class Design(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    des_name = db.Column(db.String(64))
    des_description = db.Column(db.Text)
    price = db.Column(db.String(20))
    preview_path = db.Column(db.String(256))
    imgs_path = db.Column(db.Text)


class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type_of_design = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
    design_id = db.Column(db.Integer)


#class CustomDesign(db.Model):
 #   id = db.Column(db.Integer, primary_key=True)

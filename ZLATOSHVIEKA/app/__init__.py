from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from os import path

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+(path.abspath(path.dirname(__file__)))[:-3]+'database\zlatoshvieka.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '092440b1caefd2f44ec50b458a8d567f'
db = SQLAlchemy(app)

migrate = Migrate(app, db)

login_manager = LoginManager(app)
login_manager.login_view = 'login'

from app import routes, models

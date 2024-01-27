# from fastapi import FastAPI
from pydantic import BaseModel
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import json

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)

    def __repr__(self):
        return
    def set_password(self, password):
        self.password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password, password)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return 'Wassup yall B)'

@app.route('/add_user', methods=['GET','POST'])
def add_user():
    user_info = request.get_json()
    u_username = user_info["username"]
    u_password = user_info["password"]

    #check if user_info entries are full
    if not u_username or not u_password:
        return jsonify({'message': 'Username and password are required'}), 400
    
    #check if user exists
    existing_user = User.query.filter_by(username=u_username).first()
    if existing_user:
        return jsonify({'message': 'Username already exists'}), 409
    
    #set username and password
    new_user = User(username=u_username)
    new_user.set_password(u_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Account successfully created!'}), 201

    # , 'username': u_username ,'password': u_password
@app.route("/get_user", methods=['GET', 'POST'])
def get_user():
    if request.method == 'POST':
        user_info = request.get_json()
        u_username = user_info["username"]
        u_password = user_info["password"]
        if not u_username or not u_password:
            return jsonify({'credentials_match': False, 'message': 'Insert fields for Username and Password'}), 400
        
        db_username = User.query.filter_by(username=u_username).first()
        
        if db_username and db_username.check_password(u_password):
            return jsonify({'credentials_match': True, 'food':'dumplings'}), 201
        else: 
            return jsonify({'credentials_match': False, 'message': 'Username or password is invalid'}), 200

  
    else:
        return jsonify({'message': 'Post request recieved'}), 201



if __name__ == '__main__':
    app.run(debug=True)  # Change the port as needed

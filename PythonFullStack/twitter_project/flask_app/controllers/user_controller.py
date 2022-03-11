from flask_app import app
from flask import render_template, request, session, redirect, flash, url_for
from flask_app.models.user import User
from authlib.integrations.flask_client import OAuth
# from flask_dance.contrib.google import make_google_blueprint, google
# from authlib.integrations.flask_client import OAuth
from flask_bcrypt import Bcrypt
import os

bcrypt = Bcrypt(app)
oauth = OAuth(app)
CONF_URL = 'https://accounts.google.com/.well-known/openid-configuration'
oauth = OAuth(app)
oauth.register(
    name='google',
    server_metadata_url=CONF_URL,
    client_kwargs={
        'scope': 'openid email profile'
    }
)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sign_up', methods=['POST'])
def sign_up():
    # check to validate if the user entered the right information
    if not User.validate_register(request.form):
        return redirect('/')
    #check to see if the user email is in db
    #first create dictionary to store data
    email_data = {
        "email": request.form['email']
    }
    if User.find_email(email_data):
        flash("An account with this email address already exists. Please try logging in instead.")
        return redirect('/sign-up-second')

    data = {
        "name": request.form['name'],
        "email": request.form['email'],
        "month": request.form['month'],
        "day": request.form['day'],
        "year": request.form['year']
    }
    user_info = User.add_user(data)
    # create session
    session['user_id'] = user_info

    return render_template('sign_up.html')

@app.route('/sign_up2', methods=['POST'])
def sign_up2():
    # check to validate if the user entered the right information
    if not User.validate_register(request.form):
        return redirect('/sign-up-second')
    #check to see if the user email is in db
    #first create dictionary to store data
    email_data = {
        "email": request.form['email']
    }

    # hash password of user
    pwhash = bcrypt.generate_password_hash(request.form['password'])
    print(pwhash)

    data = {
            "id" : session['user_id'],
            "name": request.form['name'],
            "email": request.form['email'],
            "month": request.form['month'],
            "day": request.form['day'],
            "year": request.form['year'],
            "username": request.form['username'],
            "password": pwhash
        }
    user_info = User.add_user_all(data)
    # create session
    session['user_id'] = user_info

    return redirect('/dashboard')


@app.route('/finish_signup', methods=['POST'])
def finish_signup():
    if "user_id" not in session:
        return redirect('/')
    # check to validate if the user entered the right information
    if not User.validate_signup(request.form):
        return redirect('/sign_up')
    
    # hash password of user
    pwhash = bcrypt.generate_password_hash(request.form['password'])
    print(pwhash)

    #check to see if the user email is in db
    #first create dictionary to store data
    email_data = {
        "email": request.form['email']
    }
    if User.find_email(email_data):
        data = {
            "id" : session['user_id'],
            "name": request.form['name'],
            "email": request.form['email'],
            "month": request.form['month'],
            "day": request.form['day'],
            "year": request.form['year'],
            "username": request.form['username'],
            "password": pwhash
        }
        # data2 = {
        #     "email": request.form['email'],
        #     "password": pwhash
        # }
        User.update_user(data)
        # User.add_password(data2)
    return redirect('/dashboard')

@app.route('/login-page')
def login_page():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    data = {
        "userinput": request.form['user_input']
    }
    user_in_db = User.find_all(data)
    if not user_in_db:
        flash("Sorry, we cannot find an account with that email or username. Please try again.")
        return redirect('/login-page')
    # if not bcrypt.check_password_hash(user_in_db.password, request.form['password-login']):
    #     flash("Password is incorrect. Please try again.")
    #     return redirect('/')
    
    session['user_id'] = user_in_db.id
    return redirect('/login-next')

@app.route('/login-next')
def login_next():
    if "user_id" not in session:
        return redirect('/')
    data = {
        "id" : session['user_id'],
    }
    user = User.find_id(data)
    return render_template('login-next.html', user=user)

@app.route('/login-final', methods=['POST'])
def login_final():
    if "user_id" not in session:
        return redirect('/')
    data = {
        "id" : session['user_id'],
    }
    user = User.find_id(data)

    if not bcrypt.check_password_hash(user.password, request.form['password']):
        flash("Password is incorrect. Please try again.")
        return redirect('/login-next')
    
    return redirect('/dashboard')


@app.route('/sign-up-second')
def sign_up_second():
    return render_template('sign_up2.html')


@app.route('/dashboard')
def dashboard():
    if "user_id" in session:
        data = {
            "id": session['user_id']
        }
    user = User.find_id(data)
    return render_template('dashboard.html', user=user)


@app.route('/destroy')
def destroy_session():
    session.clear()
    return redirect('/')
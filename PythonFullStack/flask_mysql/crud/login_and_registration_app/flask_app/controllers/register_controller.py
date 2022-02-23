from flask_app import app
from flask import render_template, request, redirect, session, flash
from flask_app.models.register import User
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    if "user_id" in session:
        data = {
            'id' : session["user_id"]
        }
        user = User.find_user_id(data)
    return render_template('dashboard.html', user=user)

@app.route('/register', methods=['POST'])
def register():
    # if the values in the form are not valid, redirect to home page
    if not User.validate_register(request.form):
        return redirect('/')
    
    email_data = {
        "email": request.form['email']
    }
    if User.find_email(email_data):
        email = request.form['email']
        flash("An account with the email address already exists. Please try logging in.")
        return redirect('/')
    # else do this

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        "first_name": request.form['first_name'],
        "last_name" : request.form['last_name'],
        "email": request.form['email'],
        "password" : pw_hash
    }
    user_info = User.add_user(data)
    session['user_id'] = user_info
    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():
    # if not User.validate_register(request.form):
    #     return redirect('/')
    
    email_data = {
        "email": request.form['email']
    }
    user_in_db = User.find_email(email_data)
    if not user_in_db:
        flash("An account with the email address already exists. Please try logging in.")
        return redirect('/')
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        flash("Password is incorrect. Please try again.")
        return redirect('/')
    
    session['user_id'] = user_in_db.id
    return redirect('/dashboard')

@app.route('/destroy')
def delete_session():
    session.clear()
    return redirect('/')
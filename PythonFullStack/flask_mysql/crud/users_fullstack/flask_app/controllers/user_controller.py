from flask_app import app
from flask import render_template, request, redirect
from flask_app.models.user import User

# home page route
@app.route('/')
@app.route('/users')
def index():
    users = User.all_users()
    return render_template('index.html', users = users)

# create user page 
@app.route('/create_user')
def create_user():
    return render_template('create.html')

# add user route to retrieve form info
@app.route('/add_user', methods = ['POST'])
def add_user():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email']
    }
    User.add_user(data)
    return redirect ('/users')

# action 1 from home page - show user info
@app.route('/show/<int:user_id>')
def show_user(user_id):
    data = {
        "id" : user_id
    }
    user_info = User.show_user(data)
    return render_template('show_user.html', user_info=user_info)

# action 2- edit user info
@app.route('/edit/<int:user_id>')
def edit_user(user_id):
    data = {
        "id" : user_id
    }
    user = User.show_user(data)
    return render_template('edit_user.html', user=user)

@app.route('/update/<int:user_id>', methods=['post'])
def update_user(user_id):
    data = {
        "user_id" : user_id,
        "first_name" : request.form['first_name'],
        "last_name" : request.form['last_name'],
        "email" : request.form['email']
    }
    edit_user = User.edit_user(data)
    return redirect('/users')


@app.route('/delete/<int:user_id>')
def delete_user(user_id):
    data = {
        "user_id" : user_id
    }
    delete_user = User.delete_user(data)
    return redirect('/users')
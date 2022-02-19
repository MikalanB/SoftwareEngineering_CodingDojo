from flask import Flask, redirect, request, render_template
from user import User
app = Flask(__name__)

@app.route('/')
def index():
    users = User.all_users()
    return render_template('index.html', users = users)

@app.route('/create_user')
def create_user():
    return render_template('create.html')

@app.route('/add_user', methods = ['POST'])
def add_user():
    data = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "email": request.form['email']
    }
    User.add_user(data)
    return redirect ('/')

if __name__ == '__main__':
    app.run(debug=True)
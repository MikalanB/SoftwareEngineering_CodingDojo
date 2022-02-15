from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # set a secret key for security 

count = 0

def counter():
    if 'count' in session:
        session['count'] = session.get('count') + 1
        print('key exists!')
    else:
        session['count'] = 1
        print("key 'count' does NOT exist")

@app.route('/')
def index():
    counter()
    return render_template('index.html', count=session.get('count'))

@app.route('/destroy_session')
def delete_session():
    session.clear()
    return redirect('/')

@app.route('/addTwo')
def add_two():
    if 'count' in session:
        session['count'] = session.get('count') + 2
        return render_template('index.html', count= session.get('count'))

if __name__ == '__main__':
    app.run(debug=True, port =5006)
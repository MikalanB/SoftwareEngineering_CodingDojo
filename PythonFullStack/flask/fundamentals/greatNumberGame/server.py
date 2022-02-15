from flask import Flask, render_template, redirect, session, request
import random

app = Flask(__name__)
app.secret_key = "odSSgOYcEUgucjUSSS8s56RY6gH03fSb"

@app.route('/')
def index():
    session['number'] = random.randrange(1, 100)
    print(session['number'])
    return render_template('index.html')

@app.route('/checkNumber', methods=['POST'])
def checkNumber(height = "30px"):
    guess_number = int(request.form['guess_number'])
    if (int(request.form['guess_number']) < session['number']):
        response = "Too Low!"
        color_1 = "red"
        height = "250px"
        return render_template('index.html', response=response, color_1=color_1, height=height)
    elif (int(request.form['guess_number']) > session['number']):
        response = "Too High!"
        color_1 = "red"
        height = "250px"
        return render_template('index.html', response=response, color_1=color_1, height=height)
    else:
        response = f"{int(request.form['guess_number'])} was the number!"  
        color_1 = "green"
        height = "250px"
        return render_template('index.html', response=response, color_1=color_1, guess_number=guess_number, height=height)


@app.route('/destroy')
def destroy():
    session.clear()
    return redirect("/")

if __name__=="__main__":
    app.run(debug=True, port=5002)


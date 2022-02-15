from flask import Flask, render_template, redirect, session, request
app = Flask(__name__)
app.secret_key = "secretsecret"

@app.route('/')
def index():
    locations = ["Arlington", "Berkeley", "Boise", "Chicago", "Dallas", "Los Angeles",
    "Orange County", "San Jose", "Seattle", "Tulsa", "online"]
    fav_lang = ["Python", "Java", "JavaScript", "Ruby On Rails", "C#"]
    return render_template('index.html', locations=locations, fav_lang=fav_lang)

@app.route('/process', methods=['GET', 'POST'])
def process():
    print(request.form)
    return render_template("result.html")

@app.route('/destroy')
def destroy():
    session.clear()
    return redirect("/")

if __name__ == '__main__':
    app.run(debug=True, port = 5002)
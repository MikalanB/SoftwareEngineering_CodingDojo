from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/<int:x>')
def change(x):
    return render_template('changes.html', x = x)

@app.route('/<int:x>/<int:y>')
def change2(x, y):
    return render_template('changes2.html', x = x, y=y)

@app.route('/<int:x>/<int:y>')
def change3(x, y):
    return render_template('changes3.html', x = x, y=y)

@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def change4(x, y, color1="tan", color2="red"):
    return render_template('changes4.html', x = x, y=y, color1=color1, color2=color2)

if __name__ == '__main__':
    app.run(debug=True, port=5004)
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<string:name>')
def say(name):
    return f"Hi {name}!"

@app.route('/repeat/<int:num>/<string:word>')
def repeat(num, word):
    combo = word + "\n"
    return f"{combo*num}"

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port = 5001)    # Run the app in debug mode.
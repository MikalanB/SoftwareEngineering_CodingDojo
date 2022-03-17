from flask import Flask, render_template  # Import Flask to allow us to create our app || Flask 
app = Flask(__name__)    # Create a new instance of the Flask class called "app"

@app.route('/')          # The "@" decorator associates this route with the function immediately following
def index():
    return render_template("index.html")  # Return the string 'Hello World!' as a response

@app.route('/success')
def success():
    return "Successful!"

@app.route('/hello/<string:name>/<int:num>') # this is the use of a path variable. Path variables default to strings. You can cast things to have a string or variable. EG. /hello/<int: 81>
def hello(name, num):
    return render_template("hello.html", name=name, num=num)

@app.route('/lists')
def render_lists():
    # Soon enough, we'll get data from a database, but for now, we're hard coding data
    student_info = [
        {'name' : 'Michael', 'age' : 35},
        {'name' : 'John', 'age' : 30 },
        {'name' : 'Mark', 'age' : 25},
        {'name' : 'KB', 'age' : 27}
    ]
    return render_template("lists.html", random_numbers = [3,1,5], students = student_info)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port = 5002)    # Run the app in debug mode.


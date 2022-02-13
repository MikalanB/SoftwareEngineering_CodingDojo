from flask import Flask, render_template
app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/play')
def play():
    return render_template('play.html')


@app.route('/play/<int:times>')
def play_1(times):
    return render_template('play2.html', times=times)

@app.route('/play/<int:times>/<string:color_input>')
def play_2 (times, color_input):
    return render_template('play3.html', times=times, color_input=color_input)

# @app.route('/play/<int:times>/<string:color_input>')
# def play_times(times = None, color_input):
#     return render_template('play.html', times=times, color_input=color_input)


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True, port = 5003)    # Run the app in debug mode.

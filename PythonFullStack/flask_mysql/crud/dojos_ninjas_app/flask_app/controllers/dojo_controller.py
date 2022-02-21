from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/')
@app.route('/dojos')
def index():
    dojos = Dojo.show_all_dojos()
    return render_template('index.html', dojos=dojos)

@app.route('/add_dojo', methods=['POST'])
def add_dojo():
    data = {
        'name' : request.form['dojo_name']
    }
    Dojo.add_dojo(data)
    return redirect('/dojos')

# @app.route('/show_dojo/<int:dojo_id>')
# def show_dojo(dojo_id):
#     data = {
#         'id' : dojo_id
#     }
#     ninja_info = Dojo.show_dojo_with_all_ninjas(data)
#     all_ninjas = Ninja.all_ninjas()
#     return render_template('show_dojo.html', ninja=ninja_info, all_ninjas=all_ninjas)
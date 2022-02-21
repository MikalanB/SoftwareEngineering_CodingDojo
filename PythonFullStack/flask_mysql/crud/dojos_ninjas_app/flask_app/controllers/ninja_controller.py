from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja

@app.route('/show_dojo/<int:dojo_id>')
def show_dojo(dojo_id):
    data = {
        'id' : dojo_id
    }
    ninja_info = Ninja.all_ninjas_for_dojo(data)
    one_dojo = Dojo.one_dojo(data)
    return render_template('show_dojo.html', ninja_info=ninja_info, one_dojo = one_dojo)

@app.route('/add_ninja')
def add_ninja():
    all_dojos = Dojo.show_all_dojos()
    return render_template('new_ninja.html', all_dojos=all_dojos)


@app.route('/create_ninja', methods=['POST'])
def create_ninja():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form["last_name"],
        "age": request.form["age"],
        "dojo_id": request.form["dojo_location"]
    }
    Ninja.add_ninja(data)
    return redirect('/dojos')
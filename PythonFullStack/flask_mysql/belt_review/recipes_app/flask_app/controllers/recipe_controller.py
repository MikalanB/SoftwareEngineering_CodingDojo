from flask_app import app
from flask import render_template, request, session, redirect, flash
from flask_app.models.user import User
from flask_app.models.recipe import Recipe

@app.route('/create_recipe', methods=['POST'])
def create_recipe():
    if "user_id" not in session:
        return redirect('/')
    if not Recipe.validate_recipe(request.form):
        return redirect('/new')
    data = {
        'name' : request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'date_made' : request.form['date_made'],
        'under_30': request.form['under_30'],
        'user_id' : session['user_id']
    }
    Recipe.add_recipe(data)
    return redirect('/dashboard')

@app.route('/new')
def new():
    if "user_id" in session:
        return render_template("create_recipe.html")
    return redirect("/")

@app.route('/show/<int:recipe_id>')
def show(recipe_id):
    if "user_id" not in session:
        return redirect('/')
    data = {
        "id": session['user_id']
        }
    data2 = {
        "id": recipe_id
    }
    user = User.find_id(data)
    recipe = Recipe.view_recipe(data2)
    return render_template("show.html", user=user, recipe=recipe)

@app.route('/edit/<int:recipe_id>')
def edit(recipe_id):
    if "user_id" in session:
        data = {
            "id": recipe_id
        }
        recipe = Recipe.view_recipe(data)
        return render_template("edit.html", recipe=recipe)
    return redirect("/")

@app.route('/edit_recipe/<int:recipe_id>', methods=['POST'])
def edit_recipe(recipe_id):
    if "user_id" not in session:
        return redirect('/')
    if not Recipe.validate_recipe(request.form):
        return redirect('/edit')
    data = {
        'id': recipe_id,
        'name' : request.form['name'],
        'description': request.form['description'],
        'instructions': request.form['instructions'],
        'date_made' : request.form['date_made'],
        'under_30': request.form['under_30'],
    }
    Recipe.update_recipe(data)
    return redirect('/dashboard')

@app.route('/delete/<int:recipe_id>')
def delete_recipe(recipe_id):
    if "user_id" not in session:
        return redirect('/')
    data = {
        'id': recipe_id
        }
    Recipe.delete_recipe(data)
    return redirect('/dashboard')

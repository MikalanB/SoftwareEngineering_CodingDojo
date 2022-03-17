from flask_app import app
from flask import render_template, request, session, redirect, flash
from flask_app.models.user import User
from flask_app.models.show import Show

@app.route('/new_show')
def new_show():
    if "user_id" in session:
        data = {
            "id": session['user_id']
        }
    user = User.find_id(data)
    return render_template('new_show.html', user=user)

@app.route('/add_show', methods=['POST'])
def add_show():
    if "user_id" not in session:
        return redirect('/')
    if not Show.validate_show(request.form):
        return redirect('/new_show')
    data = {
        'title' : request.form['title'],
        'network': request.form['network'],
        'release_date': request.form['release_date'],
        'description': request.form['description'],
        'user_id': session['user_id']
    }
    Show.add_show(data)
    return redirect('/dashboard')

@app.route("/show/<int:show_id>")
def view_show(show_id):
    if "user_id" not in session:
        return redirect('/')
    data = {
        "id": session['user_id']
        }
    data2 = {
        "id": show_id
    }
    user = User.find_id(data)
    show = Show.view_show(data2)
    post_creator = Show.who_posted(data2)
    likes = Show.count_likes(data2)
    return render_template("view_show.html", user=user, show=show, post = post_creator, likes = likes)


@app.route('/delete/<int:show_id>')
def delete_show(show_id):
    if "user_id" not in session:
        return redirect('/')
    data = {
        'id': show_id
        }
    Show.delete_show(data)
    return redirect('/dashboard')


@app.route('/edit/<int:show_id>')
def edit(show_id):
    if "user_id" in session:
        data = {
            "id": show_id
        }
        show = Show.view_show(data)
        return render_template("edit_show.html", show=show)
    return redirect("/")

@app.route('/edit_show/<int:show_id>', methods=['POST'])
def edit_show(show_id):
    if "user_id" not in session:
        return redirect('/')
    if not Show.validate_show(request.form):
        return redirect(f'/edit/{show_id}')
    data = {
        'id' : show_id,
        'title' : request.form['title'],
        'network': request.form['network'],
        'release_date': request.form['release_date'],
        'description': request.form['description'],
    }
    Show.update_show(data)
    return redirect('/dashboard')

@app.route('/like/<int:show_id>')
def add_like(show_id):
    if "user_id" not in session:
        return redirect('/')
    data = {
        'user_id' : session['user_id'],
        'show_id' : show_id,
    }
    Show.add_likes(data)
    return redirect('/dashboard')

@app.route('/unlike/<int:show_id>')
def delete_like(show_id):
    if "user_id" not in session:
        return redirect('/')
    data = {
        'user_id' : session['user_id'],
        'show_id' : show_id,
    }
    Show.delete_like(data)
    return redirect('/dashboard')
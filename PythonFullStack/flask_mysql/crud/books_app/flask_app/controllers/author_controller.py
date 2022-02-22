from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.author import Author
from flask_app.models.book import Book

@app.route('/')
@app.route('/authors')
def index():
    authors = Author.all_authors()
    return render_template('index.html', authors=authors)

@app.route('/add_author', methods=['POST'])
def add_author():
    data = {
        "name": request.form['author_name'],
    }
    Author.add_author(data)
    return redirect('/')

@app.route('/show_author/<int:author_id>')
def show_author(author_id):
    data = {
        'id': author_id
    }
    author = Author.one_author(data)
    author_fav = Author.show_author_favorite_books(data)
    books = Book.all_books()
    return render_template("show_author.html", author=author, books=books, author_fav=author_fav)

@app.route('/add_favBook/<int:author_id>')
def add_favBook(author_id):
    data = {
        "book_id": request.form['fav_book'],
        "author_id": author_id
    }
    Author.add_favBook(data)
    return redirect(f'/show_author/{author_id}')
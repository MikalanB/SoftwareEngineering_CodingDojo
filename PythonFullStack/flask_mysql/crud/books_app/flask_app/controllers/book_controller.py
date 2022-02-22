from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.book import Book
from flask_app.models.author import Author

@app.route('/books')
def books():
    books = Book.all_books()
    return render_template("books.html", books=books)

@app.route('/add_book', methods=['POST'])
def add_book():
    data = {
        'title': request.form['book_title'],
        'num_of_pages': request.form['num_of_pages']
    }
    Book.add_book(data)
    return redirect('/books')

@app.route('/show_book/<int:book_id>')
def show_book(book_id):
    data = {
        'id': book_id
    }
    book = Book.one_book(data)
    author_favs = Book.show_authors_favorite(data)
    all_authors = Author.all_authors()
    return render_template("book_show.html", book=book, author_favs=author_favs, authors = all_authors)

@app.route('/add_authorFav/<int:book_id>', methods=['POST'])
def add_authorFav(book_id):
    data = {
        'author_id': request.form['author_id'],
        'book_id': book_id
    }
    Author.add_fav_book(data)
    return redirect(f'/show_book/{book_id}')
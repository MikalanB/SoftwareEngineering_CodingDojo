from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.book import Book

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

# @app.route('/add_favBook')
# def add_favBook():
#     data = {

#     }
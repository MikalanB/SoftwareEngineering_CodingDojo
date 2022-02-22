from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import author

class Book:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def all_books(cls):
        query = "SELECT * FROM books;"
        results = connectToMySQL("books_schema").query_db(query)
        all_books = []
        for book in results:
            all_books.append(cls(book))
        return all_books

    @classmethod
    def add_book(cls, data):
        query = "INSERT INTO books (title, num_of_pages, created_at) VALUES (%(title)s, %(num_of_pages)s, NOW());"
        result = connectToMySQL("books_schema").query_db(query,data)
        return result
    
    @classmethod
    def one_book(cls,data):
        query = "SELECT * FROM books WHERE id = %(id)s;"
        result = connectToMySQL("books_schema").query_db(query, data)
        return cls(result[0])

    @classmethod
    def show_authors_favorite(cls,data):
        query = "SELECT * FROM books LEFT JOIN favorites ON favorites.book_id = books.id LEFT JOIN authors ON favorites.author_id = authors.id WHERE books.id = %(id)s"
        result = connectToMySQL("books_schema").query_db(query,data)
        all_fav_authors = []
        for row in result:
            one_book = cls(row)
            author_data = {
                'id' : row['authors.id'],
                'name' : row['name'],
                'created_at': row['authors.created_at'],
                'updated_at': row['authors.updated_at']
            }
            one_book.bookFav = author.Author(author_data)

            all_fav_authors.append(one_book)
        return all_fav_authors
    
    @classmethod
    def add_author_fav(cls, data):
        query = "INSERT INTO favorites (book_id, author_id,) SELECT authors.id, books.id FROM books INNER JOIN authors WHERE books.id = %(book_id)s AND authors.id = %(author_id)s;"
        result = connectToMySQL("books_schema").query_db(query, data)
        return result
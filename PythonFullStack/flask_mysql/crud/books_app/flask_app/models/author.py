from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import book

class Author:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def add_author(cls, data):
        query = "INSERT INTO authors (name, created_at) VALUES (%(name)s, NOW());"
        results = connectToMySQL("books_schema").query_db(query,data)
        return results
    
    @classmethod
    def all_authors(cls):
        query = "SELECT * FROM authors;"
        results = connectToMySQL("books_schema").query_db(query)

        all_authors = [] # empty list to store authors
        for author in results:
            all_authors.append(cls(author))
        return all_authors
    
    @classmethod
    def one_author(cls,data):
        query = "SELECT * FROM authors WHERE id = %(id)s;"
        result = connectToMySQL("books_schema").query_db(query, data)
        return cls(result[0])
    
    #author favorite books
    @classmethod
    def show_author_favorite_books(cls,data):
        query = "SELECT * FROM authors LEFT JOIN favorites ON favorites.author_id = authors.id LEFT JOIN books ON favorites.book_id = books.id WHERE authors.id = %(id)s"
        result = connectToMySQL("books_schema").query_db(query,data)
        all_fav_books = []
        for row in result:
            one_author = cls(row)
            book_data = {
                'id' : row['books.id'],
                'title' : row['title'],
                'num_of_pages': row['num_of_pages'],
                'created_at': row['books.created_at'],
                'updated_at': row['books.updated_at'],
            }
            one_author.bookFav = book.Book(book_data)

            all_fav_books.append(one_author)
        return all_fav_books

    @classmethod
    def add_favBook(cls,data):
        query = cls.query_db("INSERT INTO favorites (author_id,book_id) SELECT authors.id, books.id FROM authors INNER JOIN books WHERE authors.id = %(author_id)s AND books.id = %(book_id)s;")
        result = connectToMySQL("books_schema").query(query,data)
        return result

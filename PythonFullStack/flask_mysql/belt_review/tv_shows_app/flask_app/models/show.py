from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

class Show:
    def __init__(self,data):
        self.id = data['id']
        self.title = data['title']
        self.network = data['network']
        self.release_date = data['release_date']
        self.description = data['description']
        # foreign key
        self.user_id = data['user_id']
    
    # get all shows
    @classmethod
    def all_shows(cls):
        query = "SELECT * FROM shows;"
        result = connectToMySQL('tvshows_schema').query_db(query)
        shows = []
        for show in result:
            shows.append(cls(show))
        return shows
    
    # add a show 
    @classmethod
    def add_show(cls,data):
        query = "INSERT INTO shows (title, network, release_date, description, user_id, created_at) VALUES (%(title)s, %(network)s, %(release_date)s, %(description)s, %(user_id)s, NOW());"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        return result
    
    @classmethod
    def shows_by_user_id(cls, data):
        query = "SELECT * FROM shows WHERE user_id= %(id)s"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        # return cls(result[0])
        user_shows = []
        for show in result:
            user_shows.append(cls(show))
        return user_shows

    @classmethod
    def view_show(cls, data):
        query = "SELECT * FROM shows WHERE id = %(id)s" 
        result = connectToMySQL('tvshows_schema').query_db(query, data)   
        return cls(result[0])

    @classmethod
    def delete_show(cls,data):
        query = "DELETE FROM shows WHERE id = %(id)s"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        return result

    @classmethod
    def who_posted(cls,data):
        query = "SELECT * FROM shows JOIN users ON users.id = shows.user_id WHERE shows.id = %(id)s"
        result = connectToMySQL('tvshows_schema').query_db(query,data) 
        user_post = []
        for row in result:
            one_post = cls(row)
            user_data = {
                "id" : row['users.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'email': row['email'],
                'password': row['password'],
                'created_at': row['users.created_at'],
                'updated_at': row['users.updated_at']
            }
            one_post.user = user.User(user_data)

            user_post.append(one_post)
        return user_post

    @classmethod
    def update_show(cls, data):
        query = "UPDATE shows SET title = %(title)s, network = %(network)s, release_date = %(release_date)s, description = %(description)s, updated_at = NOW() WHERE id = %(id)s"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        return result
    
    #select all likes
    @classmethod
    def show_likes(cls):
        query = "SELECT * FROM likes;"
        result = connectToMySQL("tvshows_schema").query_db(query)
        all_likes = []
        for like in result:
            all_likes.append(like)
        return all_likes
    

    #find likes by show id
    @classmethod
    def find_likes_by_show(cls, data):
        query = "SELECT * FROM likes WHERE show_id = %(id)s;"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        return result
    
    @classmethod
    def find_likes_by_user(cls, data):
        query = "SELECT * FROM likes WHERE user_id = %(user_id)s;"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        return result
    
    # add likes by show for each show by a user
    @classmethod
    def add_likes(cls, data):
        query = "INSERT INTO likes (user_id, show_id) VALUES (%(user_id)s, %(show_id)s);"
        result = connectToMySQL("tvshows_schema").query_db(query, data)
        return result

    # show all likes for a show
    @classmethod
    def all_show_likes(cls, data):
        query = "SELECT * FROM shows LEFT JOIN likes ON likes.show_id = show_id LEFT JOIN users ON likes.user_id = user_id WHERE show_id = %(show_id)s"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        all_likes = []
        for row in result:
            one_like = cls(row)
            user_data = {
                "id" : row['users.id'],
                'first_name': row['first_name'],
                'last_name': row['last_name'],
                'email': row['email'],
                'password': row['password'],
                'created_at': row['users.created_at'],
                'updated_at': row['users.updated_at']
            }
            one_like.show = user.User(user_data)

            all_likes.append(one_like)
        return all_likes

    # delete like
    @classmethod
    def delete_like(cls, data):
        query = "DELETE FROM likes WHERE show_id = %(show_id)s AND user_id = %(user_id)s"
        result = connectToMySQL("tvshows_schema").query_db(query,data)
        return result

    # COUNT LIKES
    @ classmethod
    def count_likes(cls, data):
        query = "SELECT * FROM likes WHERE show_id = %(id)s;"
        result = connectToMySQL("tvshows_schema").query_db(query, data)
        return len(result)

    @staticmethod
    def validate_show(show):
        is_valid = True
        if len(show['title']) < 3:
            flash("Title must be at least 3 alphabetic characters")
            is_valid = False
        if len(show['network']) < 3:
            flash("Network name must be at least 3 alphabetic characters")
            is_valid = False
        if len(show['description']) < 3:
            flash("Description must be at least 3 alphabetic characters")
            is_valid = False
        return is_valid

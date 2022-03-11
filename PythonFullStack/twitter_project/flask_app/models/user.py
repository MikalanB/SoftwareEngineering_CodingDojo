from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['name']
        self.email = data['email']
        self.username = data['username']
        self.month = data['month']
        self.day = data['day']
        self.year = data['year']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def add_user(cls,data):
        query = "INSERT INTO users (name, email, month, day, year, created_at) VALUES (%(name)s, %(email)s, %(month)s, %(day)s, %(year)s, NOW());"
        result = connectToMySQL("twitter_schema").query_db(query,data)
        return result
    
    @classmethod
    def add_user_all(cls,data):
        query = "INSERT INTO users (name, email, month, day, year, username, password, created_at) VALUES (%(name)s, %(email)s, %(month)s, %(day)s, %(year)s, %(username)s, %(password)s, NOW());"
        result = connectToMySQL("twitter_schema").query_db(query,data)
        return result
    
    @classmethod
    def update_user(cls,data):
        query = "UPDATE users SET name = %(name)s, email = %(email)s, month = %(month)s, day = %(day)s, year = %(year)s, username = %(username)s, password = %(password)s, updated_at = NOW() WHERE id = %(id)s;"
        result = connectToMySQL("twitter_schema").query_db(query,data)
        return result

    @classmethod
    def find_username (cls,data):
        query = "SELECT * FROM users WHERE username = %(username)s"
        result = connectToMySQL('twitter_schema').query_db(query,data)
        return cls(result[0])

    @classmethod
    def find_email (cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = connectToMySQL('twitter_schema').query_db(query,data)
        if (len(result) < 1):
            return False
        return cls(result[0])
    
    @classmethod
    def find_id (cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = connectToMySQL('twitter_schema').query_db(query,data)
        return cls(result[0])

    @classmethod
    def find_all (cls,data):
        query = "SELECT * FROM users WHERE %(userinput)s IN (email, username)"
        result = connectToMySQL("twitter_schema").query_db(query,data)
        if (len(result) < 1):
            return False
        return cls(result[0])

    @staticmethod
    #validate user
    def validate_register(user):
        is_valid = True
        if len(user['name']) < 1:
            flash("What's your name?")
            is_valid = False
        if len(user['email']) < 1:
            flash("What's your email?")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("This is an invalid email address!")
            is_valid = False
        return is_valid
    
    @staticmethod
    #validate user
    def validate_signup(user):
        is_valid = True
        if len(user['name']) < 1:
            flash("What's your name?")
            is_valid = False
        if len(user['email']) < 1:
            flash("What's your email?")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("This is an invalid email address!")
            is_valid = False
        if len(user['username']) < 1:
            flash("What's your username?")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters")
            is_valid= False
        if user['password'] != user['confirm_password']:
            flash("Passwords do no match! Please re-enter password.")
            is_valid = False
        return is_valid
    
    # @staticmethod
    # #validate user
    # def validate_login(user):
    #     is_valid = True
    #     if len(user['email']) < 1:
    #         flash("What's your email?")
    #         is_valid = False
    #     if not EMAIL_REGEX.match(user['email']):
    #         flash("This is an invalid email address!")
    #         is_valid = False
    #     if len(user['password']) < 8:
    #         flash("Password must be at least 8 characters")
    #         is_valid= False
    #     if user['password'] != user['confirm_password']:
    #         flash("Passwords do no match! Please re-enter password.")
    #         is_valid = False
    #     return is_valid
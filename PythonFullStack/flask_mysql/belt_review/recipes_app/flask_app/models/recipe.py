from types import ClassMethodDescriptorType
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Recipe:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.under_30 = data['under_30']
        self.date_made = data['date_made']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # user foreign key
        self.user_id = data['user_id']

    #add recipe
    @classmethod
    def add_recipe(cls, data):
        query = "INSERT INTO recipes (name, description, instructions, under_30, date_made, user_id, created_at) VALUES (%(name)s, %(description)s, %(instructions)s, %(under_30)s, %(date_made)s, %(user_id)s, NOW());"
        result = connectToMySQL("recipes_schema").query_db(query,data)
        return result
    
    #select all recipes
    @classmethod
    def all_recipes(cls):
        query = "SELECT * FROM recipes"
        result = connectToMySQL("recipes_schema").query_db(query)
        recipes = []
        #iterate through results to grab each row of data
        for recipe in result:
            recipes.append(cls(recipe)) # append the data in the form of an instance of the user class
        return recipes
    
    @classmethod
    def find_recipes_by_userid(cls, data):
        query = "SELECT * FROM recipes WHERE user_id = %(id)s"
        result = connectToMySQL("recipes_schema").query_db(query,data)
        user_recipes = []
        for recipe in result:
            user_recipes.append(cls(recipe)) # append the data in the form of an instance of the user class
        return user_recipes
    
    @classmethod
    def view_recipe(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s"
        result = connectToMySQL("recipes_schema").query_db(query,data)
        return cls(result[0])

    @classmethod
    def update_recipe(cls, data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s, under_30 = %(under_30)s, updated_at = NOW() WHERE id = %(id)s"
        result = connectToMySQL("recipes_schema").query_db(query,data)
        return result
    
    @classmethod
    def delete_recipe(cls,data):
        query = "DELETE FROM recipes WHERE id = %(id)s"
        result = connectToMySQL("recipes_schema").query_db(query,data)
        return result

    @staticmethod
    def validate_recipe(recipe):
        is_valid = True
        if len(recipe['name']) < 2:
            flash("Recipe name must be at least 2 characters")
            is_valid = False
        if len(recipe['description']) < 2:
            flash("Recipe description must be at least 2 characters")
            is_valid = False
        if len(recipe['instructions']) < 2:
            flash("Recipe instructions must be at least 2 characters")
            is_valid = False
        return is_valid
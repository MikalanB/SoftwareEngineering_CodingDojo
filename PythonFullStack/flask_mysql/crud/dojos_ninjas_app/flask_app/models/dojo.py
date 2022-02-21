from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import ninja

class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.ninjas = []

    @classmethod
    def show_all_dojos(cls):
        query = "SELECT * FROM dojos;"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query)

        dojos =[]
        for i in result:
            dojos.append(cls(i))
        return dojos

    @classmethod
    def add_dojo(cls, data):
        query = "INSERT INTO dojos (name, created_at) VALUES (%(name)s, NOW());"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return result
    
    @classmethod
    def one_dojo(cls, data):
        query = "SELECT * from dojos WHERE id = %(id)s";
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return cls(result[0])

    
    # @classmethod
    # def show_dojo_with_all_ninjas(cls, data):
    #     query = "SELECT * FROM dojos LEFT JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = %(id)s;"
    #     result = connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
        
    #     dojo = cls(result[0])
    #     for row_in_db in result:
    #         #parse the ninja data to get ninja instances
    #         ninja_data = {
    #             "id" : row_in_db["ninjas.id"],
    #             "first_name": row_in_db["first_name"],
    #             "last_name": row_in_db["last_name"],
    #             "age": row_in_db["age"],
    #             "created_at": row_in_db["ninjas.created_at"],
    #             "updated_at": row_in_db["ninjas.updated_at"]
    #         }
    #         dojo.ninjas.append(ninja.Ninja(ninja_data))
    #         return dojo
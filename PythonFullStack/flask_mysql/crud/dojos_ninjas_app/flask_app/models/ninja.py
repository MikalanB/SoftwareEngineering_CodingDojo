from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import dojo

class Ninja:
    def __init__(self,data):
        self.id= data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def all_ninjas(cls):
        query = "SELECT * FROM ninjas;"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query)

        ninjas =[]
        for i in result:
            ninjas.append(cls(i))
        return ninjas
    
    @classmethod
    def all_ninjas_for_dojo(cls, data):
        query = "SELECT * FROM ninjas WHERE dojo_id = %(id)s;"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query, data)
        return result
    
    @classmethod
    def show_all_ninjas(cls, data):
        query = "SELECT * FROM ninjas JOIN dojos ON dojos.id = ninjas.dojo_id WHERE dojo_id = %(id)s ;"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
        ninjas_list = []
        for row in result:
            one_ninja = cls(row)

            dojo_data = {
                "id" : row["dojos.id"],
                "name": row["name"],
                "created_at": row["created_at"],
                "updated_at": row["updated_at"]
            }
        
        one_ninja.student = dojo.Dojo(dojo_data)

        ninjas_list.append(one_ninja)
        return ninjas_list

    @classmethod
    def add_ninja(cls,data):
        query = "INSERT into NINJAS (first_name, last_name, age, dojo_id, created_at) VALUES (%(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s, NOW());"
        result = connectToMySQL('dojos_and_ninjas_schema').query_db(query,data)
        return result

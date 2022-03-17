from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import friend

class Pet:
    def __init__(self, data):
        self.id = data['id']

        self.name = data['name']
        self.age = data['age']
        self.type = data['type']

        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

        self.owner_id = data['owner_id'] # foreign key field name
    
    @classmethod
    def save_pet(cls, data):
        query = "INSERT INTO pets (name, age, type, owner_id, created_at) VALUES (%(name)s, %(age)s, %(type)s, %(owner_id)s, NOW());"
        new_pet_id = connectToMySQL("fullstack_schema").query_db(query, data)
        return new_pet_id # will return a new pet_id

    @classmethod
    def all_pets(cls):
        query = "SELECT * FROM pets"
        results = connectToMySQL("fullstack_schema").query_db(query)

        pets = []
        for one_pet in results:
            pets.append(cls(one_pet))
        return pets

    @classmethod
    def get_pets_and_owners(cls):
        query = "SELECT * FROM pets LEFT JOIN friends on friends.id = pets.owner_id;"
        results = connectToMySQL("fullstack_schema").query_db(query)
        all_pets_with_owners = []

        for row in results:
            # create primary instance, in this case is the Pet instance
            one_pet = cls(row)
            #2 - collects the data for the second instance
            owner_data = {
                "id" : row["friends.id"],
                "first_name" : row["first_name"],
                "last_name" : row["last_name"],
                "occupation" : row["occupation"],
                "created_at" : row["friends.created_at"],
                "updated_at" : row["friends.updated_at"],
            }

            #3 - create instance of secondary class and attach it to the primary instance
            # create instance of friend and attach it to the second instance

            one_pet.owner = friend.Friend(owner_data)

            all_pets_with_owners.append(one_pet)
        return all_pets_with_owners
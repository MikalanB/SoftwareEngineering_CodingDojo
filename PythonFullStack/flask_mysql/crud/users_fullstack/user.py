from mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def all_users(cls):
        query = "SELECT * FROM users;"
        # query the information from the database and store the information in results
        result = connectToMySQL('users_schema').query_db(query)
        # create an empty list that will be used to store each row of Information
        users = []
        #iterate through results to grab each row of data
        for user in result:
            users.append(cls(user)) # append the data in the form of an instance of the user class
        return users

    @classmethod
    def add_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, created_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, NOW());"
        result = connectToMySQL('users_schema').query_db(query,data)
        return result
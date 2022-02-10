class User: # create name of class and don't forget Camel Casing!!
    # initialize the class and set the attributes (descriptors of the class). Remember that at this point, even though instance is initialized, it cannot do anything
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0; # attributes can be created at any point and does not have to be all on one line when being initialized at the beginning
    # Here is where we make the instance start to do something
    def make_deposit(self, amount):
        self.account_balance += amount # will add any amount deposited to the account balance of the specific user

    # add another functionality to make a withdrawl
    def make_withdrawl(self, amount):
        self.account_balance -= amount # will subtract any amount withdrawn by the user from the current balance of the user
    
    # displays user name and balance
    def display_user_balance(self):
        print(f'User: {self.name}, Balance: ${self.account_balance}')

    #bonuse to transfer money to another user
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        if (isinstance(other_user, User)): # checks to see if the other user inputed is an instance of the user class
            other_user.account_balance += amount

user1 = User('Mikalan Ballentine', 'mikalanballentine@gmail.com')
user2 = User('Jane Marry', 'jane@hotmail.com')
user3 = User('Luke', 'Luke@yahoo.com')

print(user1.name)
print(user2.name)
print(user3.name)

#set user's account balance (not ideal way though. This is just a test for understanding purposes)
# user1.account_balance = 300
# user2.account_balance = 250
# print(user1.account_balance)
# print(user2.account_balance)

# make users make a deposit in their accounts
user1.make_deposit(500)
user2.make_deposit(300)
user3.make_deposit(450)

# test to display_user_balance
user1.display_user_balance()
user2.display_user_balance()
user3.display_user_balance()

# test to make a withdrawl
user1.make_withdrawl(100)
user2.make_withdrawl(130)
user3.make_withdrawl(80)

# test display_user_balance
user1.display_user_balance()
user2.display_user_balance()
user3.display_user_balance()

# transfer balance to another user test
user1.transfer_money(user3.name, 40)
user2.transfer_money(user1.name, 100)
user3.transfer_money(user1.name, 120)

# test display_user_balance
user1.display_user_balance()
user2.display_user_balance()
user3.display_user_balance()


from bankAccount import BankAccount 
class User: # create name of class and don't forget Camel Casing!!
    total_accounts = 0
    account_info = []
    # initialize the class and set the attributes (descriptors of the class). Remember that at this point, even though instance is initialized, it cannot do anything
    def __init__(self, name, email, account_name, interest, bal):
        self.name = name
        self.email = email
        # self.account_number = account_number
        self.account = BankAccount(account_name, interest, bal); # attributes can be created at any point and does not have to be all on one line when being initialized at the beginning
        # User.account_info.append({'userName': name, 'userEmail': email, 'userAccount': account_name, 'userBalance': self.account.balance})
    # Here is where we make the instance start to do something
    def make_deposit(self, amount):
        self.account.balance += amount
        # self.account += amount # will add any amount deposited to the account balance of the specific user
        return self # if we want to chain methods, we return self so that the instance can call on itself in each chain

    # add another functionality to make a withdrawl
    def make_withdrawl(self, amount):
        self.account.balance -= amount # will subtract any amount withdrawn by the user from the current balance of the user
        return self
    
    # displays user name and balance
    def display_user_balance(self):
        print(f'User: {self.name}, {self.account.account_name}, Balance: ${self.account.balance}')
        return self

    #bonus to transfer money to another user
    def transfer_money(self, other_user, amount):
        self.account.balance -= amount
        if (isinstance(other_user, User)): # checks to see if the other user inputed is an instance of the user class
            other_user.account.balance += amount
        return self

user1 = User('Mikalan Ballentine', 'mikalanballentine@gmail.com', 'Checkings', 4.4, 500)
user1.make_deposit(500).make_deposit(250).make_deposit(300).make_withdrawl(100)
user1.display_user_balance()
user1 = User('Mikalan Ballentine', 'mikalanballentine@gmail.com', 'Savings', 4.5, 2000)
user1.account.yield_interest()
user1.display_user_balance()
# user1.display_user_balance()
# user2 = User('Jane Marry', 'jane@hotmail.com', 4.5, 600)
# user3 = User('Luke', 'Luke@yahoo.com')

# user1.display_user_balance()
# user1.display_user_balance()

# print(user2.name)
# print(user3.name)

#set user's account balance (not ideal way though. This is just a test for understanding purposes)
# user1.account_balance = 300
# user2.account_balance = 250
# print(user1.account_balance)
# print(user2.account_balance)

# make users make a deposit in their accounts
# user1.make_deposit(500).make_deposit(250).make_deposit(300).make_withdrawl(100).display_user_balance()
# # check user 1 balance
# user1.display_user_balance()
# #user1 makes a withdrawl
# user1.make_withdrawl(100)
# # check user 1 balance
# user1.display_user_balance()

# user2 2 deposits deposits and is displayed by chaining methods
#user2.make_deposit(300).make_deposit(299).make_withdrawl(130).make_withdrawl(80).display_user_balance()
# test to display_user_balance
# user2.display_user_balance()
# # user2 2 withdrawls
# user2.make_withdrawl(130)
# user2.make_withdrawl(80)
# # test to display_user_balance
# user2.display_user_balance()


# other user deposit
#user3.make_deposit(450).make_withdrawl(100).make_withdrawl(30).make_withdrawl(80).display_user_balance()
# user3 3 withdrawls
# user3.make_withdrawl(100)
# user3.make_withdrawl(30)
# user3.make_withdrawl(80)
# # test to display_user_balance
# user3.display_user_balance()

# test to make a withdrawl
# user1.make_withdrawl(100)
# user2.make_withdrawl(230)
# user3.make_withdrawl(80)

# test display_user_balance
# user1.display_user_balance()
# user2.display_user_balance()
# user3.display_user_balance()

# transfer balance to another user test
# user1.transfer_money(user2, 100).display_user_balance()
# user2.transfer_money(user1.name, 100)
# user3.transfer_money(user1.name, 120)

# test display_user_balance
# user1.display_user_balance()
# user2.display_user_balance()
#user3.display_user_balance()

# user1.account.yield_interest().display_account_info()
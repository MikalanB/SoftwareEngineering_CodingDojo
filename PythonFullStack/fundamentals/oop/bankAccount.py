class BankAccount:
    # don't forget to add some default values for these parameters!
    start_balance = 0
    interest_rate = 0
    allAccounts = []
    def __init__(self, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
        if (int_rate == 0 or int_rate is None):
            self.int_rate = BankAccount.interest_rate
        else:
            self.int_rate = float(int_rate / 100)
        if (balance == 0 or balance is None or balance == " "):
            self.balance = BankAccount.start_balance
        else:
            self.balance = BankAccount.start_balance + balance
        BankAccount.allAccounts.append(self)

    @classmethod 
    def total_instances(cls):
        count = 0
        for i in cls.allAccounts:
            count += 1
        return count

    def deposit(self, amount):
        # your code here
        self.balance += amount
        return self

    def withdraw(self, amount):
        # your code here
        if (amount > self.balance):
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def display_account_info(self):
        # your code here
        print(f'Balance: ${self.balance}')
        return self
    
    def yield_interest(self):
        # your code here
        if (self.balance > 0):
            self.balance += (self.balance * self.int_rate)
        return self

account1 = BankAccount(4,200)
account1.deposit(400).deposit(200).deposit(121).withdraw(210).yield_interest().display_account_info()

account2 = BankAccount(2.2, None)
account2.deposit(400).deposit(500).withdraw(100).withdraw(70).withdraw(120).withdraw(150).yield_interest().display_account_info()

print(BankAccount.total_instances())
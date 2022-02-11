local_val = "magical unicorns"
def square(x):
    return x * x
class User:
    def __init__(self, name):
        self.name = name
    def say_hello(self):
        return "hello"

print(square(5))
user = User("Anna")
print(user.name)
print(user.say_hello())
print(__name__) # A built-in variable that evaluates to the name of the current module. Based on where it is placed, it will print the location. Printing here will print __main__ but in printing it in the child.py, it will 'parent' this is because child is importing the parent class and parent is it's "main"/where it is getting it's information

if __name__ == "__main__":  # checks to see if __name__ is called anywhere within this file or in any other modules that imported this file
    print("the file is being executed directly")
else:
    # will print this if found in other modules
    print("The file is being executed because it is imported by another file. The file is called: ", __name__)
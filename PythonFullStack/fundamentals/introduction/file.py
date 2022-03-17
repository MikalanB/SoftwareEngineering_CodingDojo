num1 = 42 #variable declaration, initialize an integer
num2 = 2.3 #variable declaration, initialize a float
boolean = True # primitive type - boolean
string = 'Hello World' # intialize string variable
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] # initialize list
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} # initialize dictionary
fruit = ('blueberry', 'strawberry', 'banana') #tuple
print(type(fruit)) #type check to see if fruit is a tuple
print(pizza_toppings[1]) #access pizza_toppings list and locate the value at index 1 which is sausage
pizza_toppings.append('Mushrooms') # add value to the end of the list
print(person['name']) # access the dictionary person and print the value at key 'name'
person['name'] = 'George' # set key name to the value 'George'
person['eye_color'] = 'blue' # adds the key 'eye color' and value 'blue' to the person dictionary
print(fruit[2]) # prints the value 'banana' that is located at index 2 of the tuple fruit

if num1 > 45: # if num1 > 45 (currently not), it would print the following response
    print("It's greater") 
else:
    # if num1 is less than 45 (which it currently is), it will print the following response
    print("It's lower")

if len(string) < 5: # if the length of the string is less than 4, print the following response
    print("It's a short word!")
elif len(string) > 15: # if the first condition is not met, check to see if the length of the string is greater than 15 and print the following response
    print("It's a long word!")
else: # is none of the conditions above are met, print this response
    print("Just right!")

# for x in range 0 - 5 (EXCLUDING 5), print all the values up to that point
for x in range(5):
    print(x)

#for x in the range starting from 2 to 5 (excluding 5), print all the values up to that point
for x in range(2,5): 
    print(x)

#for x in the range starting from 2 to 10 (excluding 10), increment each x value by 3 within this range and print the numbers
for x in range(2,10,3):
    print(x)
x = 0  #set variable x to the value 

# while x is less that 5. 
while(x < 5): 
    print(x) # print the value of x
    x += 1 # increment the value of x by 1 after printing the value. The while loop will eventually break out when x = 5

pizza_toppings.pop() # this will remove the last element in the list of pizza_toppings which is 'Olives'
pizza_toppings.pop(1) # remove the value at index 1 in the list pizza_toppings which is 'Sausage'

print(person) # print the dictionary person
person.pop('eye_color') # remove the key 'eye_color'  from the dictionary. It will also remove the value with it
print(person) # print the person dictionary which will no longer have the 'eye_color' key

# for loop that will iterate though each value in the pizza_toppings list
for topping in pizza_toppings:
    if topping == 'Pepperoni': # if the value of the element is 'Pepperoni' continue iterating through the list
        continue
    print('After 1st if statement') # print this statement after finding the value 'Pepperoni' in the list
    if topping == 'Olives': # if the value equals 'Olives', break out of the for loop
        break

# function that does not take a parameter
def print_hello_ten_times():
    for num in range(10): # for loop that iterates through each number from 0 to 10. 
        print('Hello') # for each number, it will print the value 'Hello' until it gets to 10

print_hello_ten_times() # calls the function to be executed

# function that accepts a parameter to be passed through by the user
def print_hello_x_times(x):
    for num in range(x): # for num in the range of 0 to the number specified by the user
        print('Hello') # print 'Hello' until the frequency equals x

print_hello_x_times(4) # calls the function to be executed passing the value 4 into the function

# function that accepts a parameter to be passed through by the user which by default is set to 10
def print_hello_x_or_ten_times(x = 10): 
    for num in range(x): # for num in the range of 0 to the number specified by the user. If number is not specified, the default will be 10
        print('Hello') # print 'Hello' 10 times as default until the user passes a parameter to specify how many times they would want it to be printed

print_hello_x_or_ten_times() # call the function to print the default values as a parameter is not passed
print_hello_x_or_ten_times(4) # call the function passing a parameter, which will ignore the default, 


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)
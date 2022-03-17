#1
def number_of_food_groups():
    return 5
print(number_of_food_groups())
# prediction: will return the value 5

#2
def number_of_military_branches():
    return 5
print(number_of_days_in_a_week_silicon_or_triangle_sides() + number_of_military_branches())
# prediction: function number_of_military_branches() will return the value 5. first function in print statement is undefined so it will throw an error when trying to add the results from both functions

#3
def number_of_books_on_hold():
    return 5
    return 10
print(number_of_books_on_hold())
#prediction: will return value 5 and ignore 10 as it is the first in the order of statements


#4
def number_of_fingers():
    return 5
    print(10)
print(number_of_fingers())
# prediction: will ignore print statement as it is after return statement so it will only return 5


#5
def number_of_great_lakes():
    print(5)
x = number_of_great_lakes()
print(x)
# prediction: will print 5 as function is being called when it is used as the value of x


#6
def add(b,c):
    print(b+c)
print(add(1,2) + add(2,3))
# prediction: will add (1 + 2) + (2 + 3) = 8

#7
def concatenate(b,c):
    return str(b)+str(c)
print(concatenate(2,5))
#prediction: will print: "25" as the parameters are being casted as a string when being returned 


#8
def number_of_oceans_or_fingers_or_continents():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(number_of_oceans_or_fingers_or_continents())
# prediction: will print 100 and return 10. Will ignore the return 7 statement as it is outside of the if statement


#9
def number_of_days_in_a_week_silicon_or_triangle_sides(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3 # function will ignore this statement
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3)) # prediction: function will return 7
print(number_of_days_in_a_week_silicon_or_triangle_sides(5,3)) # prediction: function will return 14
print(number_of_days_in_a_week_silicon_or_triangle_sides(2,3) + number_of_days_in_a_week_silicon_or_triangle_sides(5,3))
# prediction: the last print statement will add 7 + 14 = 21 as they are adding both return statements

#10
def addition(b,c):
    return b+c
    return 10 # prediction: this will be ignored
print(addition(3,5))
#predicition: will print the value 8


#11
b = 500
print(b) # print the value 500
def foobar():
    b = 300 #resets value of b
    print(b) # print reset value
print(b) # prints 500
foobar() # prints 300
print(b) # prints 500


#12
b = 500
print(b)
def foobar():
    b = 300 # resets value of b to 300
    print(b) # prints the new value of b
    return b # returns new value of b
print(b) # prints 500
foobar() # returns value 300 from function
print(b) # prints 500


#13
b = 500
print(b)
def foobar():
    b = 300 # resets value of b to 300
    print(b) # prints the new value of b
    return b # returns new value of b
print(b) #prints 500
b=foobar() #b is now set to the value of 300 that is returned from the function
print(b) # will print the value 300


#14
def foo():
    print(1) # prints the integer 1
    bar() # calls bar function
    print(2) # prints number 2
def bar(): 
    print(3) # prints value 3
foo() 
# prediction: will print 1, 3, 2 as foo() function is called after bar function is called so python can find it.


#15
def foo():
    print(1) # print value 1
    x = bar() # sets x to the returned value of bar function
    print(x) # prints value of x
    return 10 # returns 10 when function is called
def bar():
    print(3) # prints value 3
    return 5 # returns value 5
y = foo() # y = 10, will also print other values from print statement but the return statement is the value that will be stored
print(y) # will print 10
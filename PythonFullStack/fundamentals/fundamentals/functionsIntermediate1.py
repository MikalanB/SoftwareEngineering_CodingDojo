#1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
x[1][0] = 15
print(x)

students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]

students[0]['last_name'] = 'Bryant'
print(students)

z = [ {'x': 10, 'y': 20} ]
z[0]['y'] = 30
print(z)

#2. Iterate Through a List of Dictionaries
"""
Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:
"""

students = [
        {'first_name' :  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]


# print on separate lines
def iterateDictionary(some_list):
    for i in some_list: # iterates through each dictionary in the list
        for key, value in i.items(): # grabs the keys and values for each item(dictionary) in the list
            print(f'{key} - {value}')

iterateDictionary(students)

#bonus
def iterateDictionary(some_list):
    new_list = []
    for i in some_list: # iterates through each dictionary in the list
        for key, value in i.items(): # grabs the keys and values for each item(dictionary) in the list
            new_list.append(key + ' - ' + value)
    for i in range(len(new_list)):
        print(new_list[i] + ' , ' + new_list[1])

        # print()
        # for j in i.keys():
        #     for x in i.values():
        #         print(j, x)


iterateDictionary(students)

"""
Get Values From a List of Dictionaries
Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:
"""
students = [
        {'first_name' :  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary2(key_name, some_list):
    for i in some_list:
        if key_name in i:
            print(i[key_name])

iterateDictionary2('first_name', students)   
iterateDictionary2('last_name', students)

"""
Iterate Through a Dictionary with List Values
Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:
"""
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(some_dict):
    for i in some_dict:
        print(f'{len(some_dict[i])} {i.upper()} /n ')
        for j in some_dict[i]:
            print(j)

printInfo(dojo)

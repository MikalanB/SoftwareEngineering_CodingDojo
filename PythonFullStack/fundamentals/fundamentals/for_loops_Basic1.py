# Basic - Print all integers from 0 to 150.
for x in range(0,150):
    print(x)

# Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for i in range(5, 1000): 
    if (i % 5 == 0): 
        print(i)

# Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
for num in range(1, 100):
    if (num % 10 == 0):
        print('Coding Dojo')
    elif (num % 5 == 0):
        print('Coding')
    else:
        print(num)

# Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
sum = 0
for num1 in range(0,500000):
    if (num1 % 2 !=0):
        sum += num1

print(sum)

# Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
for a in range(2018, 0, -4):
    print(a)

# Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)

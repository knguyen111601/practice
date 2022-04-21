import re


first_names = ["Goop", "Buh", "Po"]

names = first_names * 2

print(names)

total = 0

def main():
    global total
    total += 1

main()
print(total)

result = ""
values = [1,2,3,4,5]
for i in range(len(values)):
    if i > 0:
        print("-")
        result = result + str(values[i])

print(result)
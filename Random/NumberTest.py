num = 10

input = 51

count = 0

for i in str(num):
    for j in str(input): 
        if i == j:
            count += 1
        
print(count)
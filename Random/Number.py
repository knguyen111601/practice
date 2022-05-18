class Number:
    def __init__(self, num = 1): 
        self.__num = num

    def getNum(self):
        return self.__num

    def setNum(self, newNum):
        self.__num = newNum


num = Number()


print(num.getNum())


num.setNum(2)
print(num.getNum())

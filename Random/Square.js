const match = (str1, str2) => {
  
    let frequency = {}
    const matching = []
    
    const first = str1.split(" ")
    const second = str2.split(" ")

   
    for (let i = 0; i < first.length; i++) {
       const current = first[i]
       
       if (!(current in frequency) && current !== " ") {
         frequency[current] = 0
       }

    }
    
    console.log(frequency)

    for (let i = 0; i < second.length; i++) {
        const current = second[i]

        if (current in frequency) {
          matching.push(current)
        }
    }  
   
   
     if (matching.length == 0) {
       return null
     } else {
       return matching
     }
 }

console.log(match("1 2 3 4 5 6 7 8 9 0", "A B C D E F G"))
let count = 0
let bet = ""

const cc = (card) => {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count += 1
            break;
        case 7:
        case 8:
        case 9:
            count -= 0
            break;
        default: 
            count -= 1
            break;
    }

    if (count <= 0) {
        bet = "Hold"
    } else {
        bet = "Bet"
    }
    console.log(`${count} ${bet}`) 
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A")
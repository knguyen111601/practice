const end = "2022-08-16T13:00:00"

// const js = [{
//     "id": 1,
//     "eventName": "Event 1",
//     "start": "2022-08-16T10:30:00",
//     "end": "2022-08-16T13:00:00",
//     "note": "Lunch with Jack."
// }]

//     console.log(js[0].start.split("T")[1].split(":").join(""))

// const newNum = date.split("T")[1].split(":").join("")
// const newEnd = end.split("T")[1].split(":").join("")

// const times = [80000,83000,90000,93000,100000,103000,110000,113000,120000,123000,130000,133000,140000,143000,150000,153000,160000,163000,170000,173000,180000,183000,190000,193000,200000]

// const render = () => {

//     let timesBefore = 0
//     let timesAfter = 0

//     for (let i = 0; i < times.length; i++) {
//         if (times[i] < newNum) {
//             timesBefore++
//         } else if (times[i] > newEnd) {
//             timesAfter++
//         }
//     }
//     console.log(timesBefore)
//     console.log(newNum, newEnd)
//     console.log(timesAfter)
// }

// // render()

// const map = () => {
//     return times.map((time)=>{
//         if (time < newNum) {
//             return "blank"
//         } else if (time > newEnd) {
//             return "blank"
//         } else {
//             return newNum
//         }
//     })
// }

// console.log(map())

const date = "2022-08-16T10:00:00"

console.log(new Date().toLocaleTimeString() < new Date(date).toLocaleTimeString())
console.log(new Date(date).toLocaleTimeString())


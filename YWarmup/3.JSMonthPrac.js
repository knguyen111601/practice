let days = ""
date = new Date()

currentMonth = date.getMonth() + 1 // returns 6 (months are in array so it would be 5 first)
year = date.getFullYear() // gives year

const getDaysInMonth = (month, year) => {

    let date = new Date(year, month, 1) // year, month, day
    const days = []

    while (date.getMonth() === month) { // loop until the month changes
        // days.push(new Date(date)) if we wanted to push the whole day information
        const currentDate = new Date(date)
        days.push(currentDate.getDate()) // grabs just the date number (1-31)

        date.setDate(date.getDate() + 1) // increment date
    }

    return days // returns array of every day
}

console.log(getDaysInMonth(0, 2022)) // Janurary 2022 Dates
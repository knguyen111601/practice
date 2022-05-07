// Similar Problems

// Problem 1: Given a set of intervals, find out if any two intervals overlap.

class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }

    get_interval() {
      return "[" + this.start + ", " + this.end + "]";
    }
}


const merge = (intervals) => {

    if (intervals.length < 2) {
        return false
    }
    
    intervals.sort((a,b) => a.start - b.start)

    let start = intervals[0].start
    let end = intervals[0].end

    for (let i = 0; i < intervals.length; i++) {

        const interval = intervals[i]

        if (interval.start <= end) {
            end = Math.max(interval.end, end)
            return true
        } else {
            start = interval.start
            end = interval.end
        }
    }
    return false
}

console.log(merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]))

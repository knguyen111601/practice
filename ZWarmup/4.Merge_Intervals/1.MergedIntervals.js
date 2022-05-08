// Merge Intervals (medium)

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

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

    let merged = []    

    intervals.sort((a,b) => a.start-b.start) // sort the intervals by start

    let start = intervals[0].start // initialize with first interval
    let end = intervals[0].end // initialize with first interval

    for (let i = 0; i < intervals.length; i++) {
        // c.start = a.start
        // c.end = max(a.end, b.end)
        if (end >= intervals[i].start) { // if the ending point is > than the next start means they overlap
            end = Math.max(intervals[i].end, end) // set the end point to the furthest end between the two
        } else {
            merged.push(new Interval(start, end)) // if end < than the start of the next interval
            start = intervals[i].start // set start to the next intervals
            end = intervals[i].end // set end to next intervals
        }
    }
    merged.push(new Interval(start, end)) // put in the last intervals
    return merged
}

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for(i=0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)




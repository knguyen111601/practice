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
//////////////////////////////////////////////////////////////////////////////////////////
// For when a.start <= b.start there are 4 possible scenarios
    // 1. 'a' and 'b' do not overlap
    // 2. some parts of 'b' overlaps with 'a'
    // 3. 'a' fully overlaps 'b'
    // 4. 'b' full overlaps 'a' but both have same start
// For this question, we are trying to merge the intervals where they overlap, so 2,3, and 4 scenarios

// Algorithm will look like: 
    // 1. Sort the intervals on the start time to ensure a.start <= b.start
    // 2. If 'a' overlaps 'b' (i.e. b.start <= a.end), we need to merge them into a new interval 'c':
        // c.start = a.start
        // c.end = max(a.end, b.end)
    // 3. We will keep repeating the above two steps to merge 'c' with the next interval if it overlaps with 'c'

const merge = (intervals) => {
    if (intervals.length < 2) {
        return intervals // meaning that there is a single interval 
    }

    // sort the intervals on start time
    intervals.sort((a,b) => a.start - b.start)

    const mergedIntervals = []

    let start = intervals[0].start
    let end = intervals[0].end

    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i]
        if (interval.start <= end) { // overlapping intervals, adjust the 'end'
            end = Math.max(interval.end, end) // furthest end among the two
        } else { // not overlapping interval, add the previous interval and reset
            mergedIntervals.push(new Interval(start, end))
            start = interval.start
            end = interval.end
        }
    }   
    mergedIntervals.push(new Interval(start, end))
    return mergedIntervals
}

// TIME COMPLEXITY 
    // O(N * logN)
// SPACE COMPLEXITY 
    // O(N) we need to return list containing merged intervals 

//////////////////////////////////////////////////////////////////////////////////////////
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

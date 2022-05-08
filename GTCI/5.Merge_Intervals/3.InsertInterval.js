// Insert Interval (medium)

// Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  
    print_interval() {
      process.stdout.write(`[${this.start}, ${this.end}]`);
    }
}

const insert = (intervals, new_interval) => {

    intervals.push(new_interval)

    intervals.sort((a,b)=> a.start - b.start)

    const merged = []

    let start = intervals[0].start
    let end = intervals[0].end

    for (let i = 0; i < intervals.length; i++) {

        const current = intervals[i]

        if (current.start <= end) {
            end = Math.max(end, current.end)
        } else {
            merged.push(new Interval(start, end))
            start = current.start
            end = current.end
        }
    }
    merged.push(new Interval(start, end))
    return merged
}

//////////////////////////////////////////////////////////////////////////////
// ALTERNATE METHOD
//////////////////////////////////////////////////////////////////////////////

// If the given list was not sorted, we could have simply appended the new interval to it and used the merge() function from Merge Intervals. But since the given list is sorted, we should try to come up with a solution better than O(N * logN)














//////////////////////////////////////////////////////////////////////////////
process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
  new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

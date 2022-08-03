class MyCalendar {
    constructor() {
        this.calendar = {start: -1, end: -1, next: {start: Infinity, end: Infinity}}
    }
    book = function(start, end) {
        let current = this.calendar, last = current
        while (start >= current.end)
            last = current, current = current.next
        if (current.start < end)
            return false
        last.next = {start: start, end: end, next: current}
        return true
    };
}
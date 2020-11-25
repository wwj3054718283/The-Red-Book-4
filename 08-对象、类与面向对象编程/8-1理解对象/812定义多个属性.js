let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017,
        configurable:false,
        enumerable:false,
        writable:false
    },
    edition: {
        value: 1,
        enumerable:true
    },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});
delete book.year_
console.log(book.year_);
for (const b in book) {
    console.log(b);
}
book.year_=1988
console.log(book.year_);



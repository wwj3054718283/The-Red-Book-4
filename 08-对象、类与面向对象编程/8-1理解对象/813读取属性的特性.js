/**
 * 使用 Object.getOwnPropertydesc() 方法可以取得指定属性的属性描述符
 * 两个参数：属性所在的对象和要取得其描述符的属性名
 * 对于访问器属性包含configurable 、 enumerable 、 get 和 set 属性
 * 对于数据属性包含 configurable 、 enumerable 、writable 和 value 属性
 */
let book = {};
Object.defineProperties(book, {
    year_: {
        value: 2017
    },
    edition: {
        value: 1
    },
    year: {
        get: function () {
            return this.year_;
        },
        set: function (newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});
let desc1 = Object.getOwnPropertyDescriptor(book, "year_");
console.log(desc1.value); // 2017
console.log(desc1.configurable); // false
console.log(typeof desc1.get); // "undefined"
let desc2 = Object.getOwnPropertyDescriptor(book, "year");
console.log(desc2.value); // undefined
console.log(desc2.enumerable); // false
console.log(typeof desc2.get); // "function"

// ECMAScript 2017 新增了 Object.getOwnPropertyDescriptors() 静态方法
// 这个方法实际上会在每个自有属性上调用 Object.getOwnPropertyDescriptors() 并在一个新对象中返回它们
console.log(Object.getOwnPropertyDescriptors(book));
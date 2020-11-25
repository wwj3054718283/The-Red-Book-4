// 1.数据属性
// [[Configurable]] ：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为访问器属性。
// 默认情况下，所有直接定义在对象上的属性的这个特性都是 true ，如前面的例子所示。 
// [[Enumerable]] ：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true ，如前面的例子所示。
// [[Writable]] ：表示属性的值是否可以被修改。默认情况下，所有直接定义在对象上的属性的这个特性都是 true ，如前面的例子所示。
// [[Value]] ：包含属性实际的值。这就是前面提到的那个读取和写入属性值的位置。这个特性的默认值为 undefined 。  

// ★要修改属性的默认特性，就必须使用 Object.defineProperty() 方法。
let person = {};
Object.defineProperty(person, "name", { writable: false, value: "Nicholas", configurable: true });
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas"
delete person.name
console.log(person.name);

let persons = { name: "nix", age: 18 };
for (const p in persons) {
    console.log("第一次", p)
}
Object.defineProperty(persons, "name", { enumerable: false, value: "Joy" })
for (const p in persons) {
    console.log("第二次", p)
}
console.log(persons.name);

// 在调用 Object.defineProperty() 时， configurable 、 enumerable 和 writable 的值如果不指定，则都默认为 false 。

// 2.访问器属性
// 访问器属性有 4 个特性描述它们的行为。
/**
 * [[Configurable]] ：表示属性是否可以通过 delete 删除并重新定义，是否可以修改它的特性，以及是否可以把它改为数据属性。默认情况下，所有直接定义在对象上的属性的这个特性都是 true 。
 * [[Enumerable]] ：表示属性是否可以通过 for-in 循环返回。默认情况下，所有直接定义在对象上的属性的这个特性都是 true 。
 * [[Get]] ：获取函数，在读取属性时调用。默认值为 undefined 。
 * [[Set]] ：设置函数，在写入属性时调用。默认值为 undefined 。
 */
// 访问器属性是不能直接定义的，必须使用 Object.defineProperty() 。

// 定义一个对象，包含伪私有成员 year_和公共成员 edition
let book = {
    year_: 2017,
    edition: 1
};
Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set(newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017;
        }
    }
});
book.year = 2020;
console.log(book.year_,book.edition); // 2
//  year_ 中的下划线常用来表示该属性并不希望在对象方法的外部被访问。
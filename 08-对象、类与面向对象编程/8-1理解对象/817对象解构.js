// 使用对象解构
let person = {
    name: 'Matt',
    age: 27
};
let { name, age } = person; // 方式一：解构赋值+属性简写
let { name: personName, age: personAge } = person;// 方式二
console.log(name); // Matt
console.log(age); // 27
console.log(personName); // Matt
console.log(personAge); // 27

// 赋值的时候可以忽略某些属性，而如果引用的属性不存在，则该变量的值就是 undefined ：
let { num } = person
console.log(num);

// 也可以在解构赋值的同时定义默认值，这适用于前面刚提到的引用的属性不存在于源对象中的情况
let { job = 'Software engineer' } = person
console.log(job);

// 解构在内部使用函数 ToObject() （不能在运行时环境中直接访问）把源数据结构转换为对象
let { length } = 'foobar';
console.log(length);
let { constructor: c } = 4;
console.log(c === Number);

//  null和 undefined 不能被解构,会抛出错误
// let { _ } = null;
// let { _ } = undefined;

// 1.嵌套解构
let person1 = {
    name: 'Matt',
    age: 27,
    job: {
        title: 'Software engineer'
    }
};
let personCopy = {};
({
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job
} = person1);
// 因为一个对象的引用被赋值给 personCopy，所以修改
// person.job 对象的属性也会影响 personCopy
person1.job.title = 'Hacker'
console.log(person1);
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }
console.log(personCopy);
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }

// 解构赋值可以使用嵌套结构，以匹配嵌套的属性：
// 声明 title 变量并将 person.job.title 的值赋给它
let { job: { title } } = person1;
console.log("------" + title); // Software engineer

// 在外层属性没有定义的情况下不能使用嵌套解构。无论源对象还是目标对象都一样
// foo 在源对象上是 undefined
// ({
//     foo: {
//         bar: personCopy.bar
//     }
// } = person);
// TypeError: Cannot destructure property 'bar' of 'undefined' or 'null'.
// job 在目标对象上是 undefined
// ({
//     job: {
//         title: personCopy.job.title
//     }
// } = person);
// TypeError: Cannot set property 'title' of undefined

// 2.部分结构
// 涉及多个属性的解构赋值是一个输出无关的顺序化操作
// 开始的赋值成功而后面的赋值出错，则整个解构赋值只会完成一部分
let person2 = {
    name: 'Matt',
    age: 27
};
let person2Name, person2Bar, person2Age;
try {
    // person.foo 是 undefined，因此会抛出错误
    ({ name: person2Name, foo: { bar: person2Bar }, age: person2Age } = person2);
} catch (e) { }
console.log(person2Name, person2Bar, person2Age);
// Matt, undefined, undefined

// 3.参数上下文匹配
// 在函数参数列表中也可以进行解构赋值，对参数的解构赋值不会影响 arguments 对象
// 可以在函数签名中声明在函数体内使用局部变量
let person3 = {
    name: 'Matt',
    age: 27
};
function printPerson(foo, { name, age }, bar) {
    console.log(arguments);
    console.log(name, age);
}
function printPerson2(foo, { name: personName, age: personAge }, bar) {
    console.log(arguments);
    console.log(personName, personAge);
}
printPerson('1st', person3, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd']
// 'Matt', 27
printPerson2('1st', person3, '2nd');
    // ['1st', { name: 'Matt', age: 27 }, '2nd']
    // 'Matt', 27
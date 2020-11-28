// 1.属性简写
let name = "Matt"
let person = { name }
console.log(person.name)

// 2.可计算属性
const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
let persons = {};
persons[nameKey] = 'Matt';
persons[ageKey] = 27;
persons[jobKey] = 'Software engineer';
console.log(nameKey, persons); // { name: 'Matt', age: 27, job: 'Software engineer' }

let uniqueToken = 0;
function getUniqueKey(key) {
    return `${key}_${uniqueToken++}`;
}
let persones = {
    [nameKey]: 'Matt',
    [getUniqueKey(ageKey)]: 27,
    [getUniqueKey(jobKey)]: 'Software engineer'
};
console.log(persones); // { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' }

// 3.简写方法名
person = {
    sayName(name) {
        console.log(`My name is ${name}`);
    }
};
person.sayName('Matt'); // My name is Matt
// 简写方法名与可计算属性键相互兼容
const methodKey = 'sayName';
person = {
    [methodKey](name) {
        console.log(`My name is ${name}`);
    }
}
person.sayName('Matt'); // My name is Matt

console.log(true === 1);
console.log({} === {});
console.log("2" === 2);
console.log(+0 === -0);
console.log(+0 === 0);
console.log(-0 === 0);
console.log(NaN === NaN);
console.log(isNaN(NaN));

console.log(Object.is(true, 1));
console.log(Object.is({}, {}));
console.log(Object.is("2", 2));
console.log(Object.is(+0, -0));
console.log(Object.is(+0, 0));
console.log(Object.is(-0, 0));
console.log(Object.is(NaN, NaN));

// 要检查超过两个值，递归地利用相等性传递即可：
function recursivelyCheckEqual(x, ...rest) {
    return Object.is(x, rest[0]) &&
        (rest.length < 2 || recursivelyCheckEqual(...rest));
}
console.log(recursivelyCheckEqual(1,"1",true));
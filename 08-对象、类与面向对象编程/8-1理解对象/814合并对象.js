/**
 * 合并对象:Object.assign()方法
 * 接收一个目标对象和一个或多个源对象作为参数
 * 然后将每个源对象中可枚举（ Object.propertyIsEnumerable() 返回 true ）和自有（ Object.hasOwnProperty() 返回 true ）属性复制到目标对象
 * 
 */
let dest, src, result;
/**
* 简单复制
*/
dest = {};
src = { id: 'src' };
result = Object.assign(dest, src);
// Object.assign 修改目标对象
// 也会返回修改后的目标对象
console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); // { id: src }
console.log(dest); // { id: src }
/**
* 多个源对象
*/
dest = {};
result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });
console.log(result); // { a: foo, b: bar }
/**
* 获取函数与设置函数
*/
dest = {
    set a(val) {
        console.log(`Invoked dest setter with param ${val}`);
    }
};
src = {
    get a() {
        console.log('Invoked src getter');
        return 'foo';
    }
};
Object.assign(dest, src);
// 调用 src 的获取方法
// 调用 dest 的设置方法并传入参数"foo"
// 因为这里的设置函数不执行赋值操作
// 所以实际上并没有把值转移过来
console.log(dest); // { set a(val) {...} }
console.log("----------------------------");

/**
 * Object.assign() 实际上对每个源对象执行的是浅复制。
 * 多个源对象都有相同的属性，则使用最后一个复制的值
 * 不能在两个对象间转移获取函数和设置函数
 */


let des, sr, re;
/**
* 覆盖属性
*/
des = { id: 'des' };
re = Object.assign(des, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
// Object.assign 会覆盖重复的属性
console.log(re); // { id: src2, a: foo, b: bar }
// 可以通过目标对象上的设置函数观察到覆盖的过程：
des = {
    set id(x) {
        console.log(x);
    }
};
Object.assign(des, { id: 'first' }, { id: 'second' }, { id: 'third' });
// first
// second
// third
/**
* 对象引用
*/
des = {};
sr = { a: {} };
Object.assign(des, sr);
// 浅复制意味着只会复制对象的引用
console.log(des); // { a :{} }
console.log(des.a === sr.a); // true
console.log("---------------------------------");
// 赋值期间出错，则操作会中止并退出，同时抛出错误
let ts1,ts2
ts1 = {}
ts2 ={
    a:'foo',
    get b(){
        // Object.assign()在调用这个获取函数时会抛出错误
        throw new Error();
    },
    c:'bar'
}
try{
    Object.assign(ts1,ts2)
}catch(e){}
// Object.assign()没办法回滚已经完成的修改
// 因此在抛出错误之前，目标对象上已经完成的修改会继续存在：
console.log(ts1);
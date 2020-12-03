Web 浏览器只是 ECMAScript 实现可能存在的一种宿主环境
他宿主环境还有服务器端 JavaScript 平台 Node.js和即将被淘汰的 Adobe Flash

# ECMA-262定义了如下内容
* 1.语法
* 2.类型
* 3.语句
* 4.关键字
* 5.保留字
* 6.操作符
* 7.全局对象
# 1.ECMAScript版本
* ECMA-262 的第 1 版本质上跟网景的 JavaScript 1.1 相同
* ECMA-262 第 2 版只是做了一些编校工作
* ECMA-262 第 3 版第一次真正对这个标准进行更新，更新了字符串处理、错误定义和数值输出。此外还增加了对正则表达式、新的控制语句、try / catch 异常处理的支持，以及为了更好地让标准国际化所做的少量修改。
* ECMA-262 第 4 版是对这门语言的一次彻底修订。第 4 版包
括强类型变量、新语句和数据结构、真正的类和经典的继承，以及操作数据的新手段。因为跳跃太大，ECMA-262 第 4 版在正式发布之前被放弃。
* ECMAScript 3.1 变成了 ECMA-262 的第 5 版。第 5 版致力于厘清第 3 版存在的歧义，也增加了新功能。新功能包括原生的解析和序列化 JSON 数据的 JSON 对象、方便继承和高级属性定义的方法，以及新的增强 ECMAScript 引擎解释和执行代码能力的严格模式。
* ECMA-262 第 6 版，俗称 ES6、ES2015 或 ES Harmony（和谐版），于 2015年 6月发布。这一版包含了大概这个规范有史以来最重要的一批增强特性。ES6 正式支持了类、模块、迭代器、生成器、箭头函数、期约、反射、代理和众多新的数据类型。
* ECMA-262 第 7 版，也称为 ES7 或 ES2016，于 2016 年 6 月发布。这次修订只包含少量语法层面的增强，如 Array.prototype.includes 和指数操作符。
* ECMA-262 第 8 版，也称为 ES8、ES2017，完成于 2017 年 6 月。这一版主要增加了异步函数（async/await）、SharedArrayBuffer 及 Atomics API，以及 Object.values()/ Object.entries() / Object.getOwnPropertyDescriptors()和字符串填充方法，另外明确支持对象字面量最后的逗号。
* ECMA-262 第 9 版，也称为 ES9、ES2018，发布于 2018 年 6 月。这次修订包括异步迭代、剩余和扩展属性、一组新的正则表达式特性、 Promise finally() ，以及模板字面量修订。
* ECMA-262第 10版，也称为 ES10、ES2019，发布于 2019年 6月。这次修订增加了 Array.prototype.flat() / flatMap() 、 String.prototype.trimStart() / trimEnd() 、 Object.fromEntries() 方法，以及 Symbol.prototype.description 属性，明确定义了 Function.prototype.toString()的返回值并固定了 Array.prototype.sort() 的顺序。另外，这次修订解决了与 JSON 字符串兼容的问题，并定义了 catch 子句的可选绑定。
# 2. ECMAScript 符合性是什么意思
**ECMA-262 阐述了什么是 ECMAScript 符合性。要成为 ECMAScript 实现，必须满足下列条件：**
* 支持 ECMA-262 中描述的所有“类型、值、对象、属性、函数，以及程序语法与语义”
* 支持 Unicode 字符标准
**此外，符合性实现还可以满足下列要求**
* 增加 ECMA-262 中未提及的“额外的类型、值、对象、属性和函数”。ECMA-262 所说的这些额
外内容主要指规范中未给出的新对象或对象的新属性
* 支持 ECMA-262 中没有定义的“程序和正则表达式语法”（意思是允许修改和扩展内置的正则表达式特性）
# 3. 浏览器对 ECMAScript 的支持
|  浏览器   | ECMAScript 符合性  |
|  ----  | ----  |
| Netscape Navigator 2  | — |
| Netscape Navigator 3   | — |
| Netscape Navigator 4~4.05   | — |
| Netscape Navigator 4.06~4.79  | 第 1版 |
| Netscape 6+（Mozilla 0.6.0+） | 第 3版 |
| IE3   | — |
| IE4   | — |
| IE5   | 第 1版 |
| IE5.5~8    | 第 3版 |
| IE9  | 第 5版（部分） |
| IE10~11   | 第 5版 |
| Edge 12+    | 第 6版 |
| Opera 6~7.1   | 第 2版 |
| Opera 7.2+   | 第 3版 |
| Opera 15~28  | 第 5版 |
| Opera 29~35  | 第 6版（部分） |
| Opera 36+    | 第 6版 |
| Safari 1~2.0.x  | 第 3版（部分） |
| Safari 3.1~5.1   | 第 5版（部分） |
| Safari 6~8    | 第 5版 |
| Safari 9+    | 第 6版 |
| iOS Safari 3.2~5.1  | 第 5版（部分） |
| iOS Safari 6~8.4  | 第 5版 |
| iOS Safari 9.2+    | 第 6版 |
| Chrome 1~3   | 第 3版 |
| Chrome 4~22  | 第 5版（部分） |
| Chrome 23+  | 第 5版 |
| Chrome 42~48    | 第 6版（部分） |
| Chrome 49+    | 第 6版 |
| Firefox 1~2    | 第 3版 |
| Firefox 3.0.x~20    | 第 5版（部分） |
| Firefox 21~44    | 第 5版 |
| Firefox 45+   | 第 6版 |

// 除了 <script> 标签，还有其他方式可以加载脚本。因为 JavaScript 可以使用 DOM API，所以通过
// 向 DOM 中动态添加 script 元素同样可以加载指定的脚本。只要创建一个 script 元素并将其添加到DOM 即可。
let script = document.createElement('script');
script.src = 'gibberish.js';
// 默认情况下，这种方式创建的 <script> 元素是以异步方式加载的，相当于添加了 async 属性

// 所有浏览器都支持 createElement() 方法，但不是所有浏览器都支持 async 属性
// so,如果要统一动态脚本的加载行为，可以明确将其设置为同步加载
script.async = false;
document.head.appendChild(script);  

/**
 * 以这种方式获取的资源对浏览器预加载器是不可见的。这会严重影响它们在资源获取队列中的优先
级。根据应用程序的工作方式以及怎么使用，这种方式可能会严重影响性能。要想让预加载器知道这些
动态请求文件的存在，可以在文档头部显式声明它们：
 * <link rel="preload" href="gibberish.js">
 */

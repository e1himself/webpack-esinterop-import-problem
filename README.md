# [RESOLVED]

**See https://github.com/webpack/webpack/issues/14836#issuecomment-979654419**

### Steps to reproduce

1. Checkout
  ```
  git clone https://github.com/e1himself/webpack-esinterop-import-problem
  cd webpack-esinterop-import-problem
  ```
2. `npm ci`
3. `npm run build`
4. Open `index.html` with your browser

### Expected behavior

~It outputs "hello" to the console.~

**This behavior is not a bug, but is fully aligned with how ECMAScript Modules are handled natively by Node.**

**See https://github.com/webpack/webpack/issues/14836#issuecomment-979654419**

### Actual behavior

It fails with the following error:

```
Uncaught TypeError: mock_module_1__WEBPACK_IMPORTED_MODULE_0__ is not a function
    sayHello webpack:///./node_modules/mock-module-2/index.js?:9
    <anonymous> webpack:///./src/index.js?:4
    js file:///home/ivan/workspace/sandbox/webpack-esinterop-import-problem/build/main.js:19
    __webpack_require__ file:///home/ivan/workspace/sandbox/webpack-esinterop-import-problem/build/main.js:63
    <anonymous> file:///home/ivan/workspace/sandbox/webpack-esinterop-import-problem/build/main.js:103
    <anonymous> file:///home/ivan/workspace/sandbox/webpack-esinterop-import-problem/build/main.js:105
```

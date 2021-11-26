### Steps to reproduce

1. Checkout
   ```
   git clone https://github.com/e1himself/webpack-harmony-import-problem
   cd webpack-harmony-import-problem
   ```
2. `npm ci`
3. `npm run build`
4. Open `index.html` with your browser

### Expected behavior

It outputs "hello" to the console.

### Actual behavior

It fails with the following error:

```
Uncaught TypeError: mock_module_1__WEBPACK_IMPORTED_MODULE_0__ is not a function
    sayHello webpack:///./node_modules/mock-module-2-es/index.js?:9
    <anonymous> webpack:///./src/index.js?:4
    js file:///home/ivan/workspace/sandbox/webpack-import-bug/build/main.js:19
    __webpack_require__ file:///home/ivan/workspace/sandbox/webpack-import-bug/build/main.js:63
    <anonymous> file:///home/ivan/workspace/sandbox/webpack-import-bug/build/main.js:103
    <anonymous> file:///home/ivan/workspace/sandbox/webpack-import-bug/build/main.js:105
```
var hello = require('mock-module-1');

function sayHello() {
    hello();
}

module.exports = { sayHello };
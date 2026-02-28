# assert-fn-throw-typeerror
Wrapper for assert that throws TypeError instead of AssertionError
```js
var assert = require("assert-fn")
// or
var assert = require("node:assert")

var TE = require("assert-fn-throw-typeerror")

TE(() => assert(false, "Assertion failed blabla")) // Uncaught TypeError: Assertion failed blabla
```
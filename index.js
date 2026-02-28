var { attempt, ErrorType, immediateError } = require("immediate-error")
var noop = require("blank-space").noop

module.exports = function(throws) {
  attempt(throws).rescue(threw => {
    immediateError(threw.message, ErrorType.TypeError)
  }).else(noop).ensure(noop).end()

}
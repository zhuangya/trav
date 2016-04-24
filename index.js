'use strict';

module.exports = function (guest, key, fixer) {
  var value = guest[key];
  guest[key] = fixer(value);
  return guest
}

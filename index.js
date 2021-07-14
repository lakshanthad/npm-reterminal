const InputEvent    = require('./lib');
/**
 * [devices]
 */
InputEvent.Button = require('./lib/button');
InputEvent.Accel   = require('./lib/accel');
InputEvent.Touch   = require('./lib/touch');
/**
 * [exports InputEvent]
 * @type {[type]}
 */
module.exports = InputEvent;

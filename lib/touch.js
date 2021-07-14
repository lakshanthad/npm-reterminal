const util        = require('util');
const InputEvent  = require('.');

function Touch(){
  var self = this;
  InputEvent.apply(this, arguments);
  this.on('data', function(ev){
    // filting key event
    if(InputEvent.EVENT_TYPES.EV_ABS == ev.type){
      if (ev.code == 0){
        self.emit('x-axis', ev.value);
      }
      else if(ev.code == 1){
        self.emit('y-axis', ev.value);
      }
    }
  });
};

util.inherits(Touch, InputEvent);

module.exports = Touch;
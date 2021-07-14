const util        = require('util');
const InputEvent  = require('.');

function Accel(){
  var self = this;
  InputEvent.apply(this, arguments);
  this.on('data', function(ev){
    // filting key event
    if(InputEvent.EVENT_TYPES.EV_ABS == ev.type){
      if (ev.code == 0){
        self.emit('A1', ev.value);
      }
      else if(ev.code == 1){
        self.emit('A2', ev.value);
      }
      else if(ev.code == 2){
        self.emit('A3', ev.value);
      }
    }
  });
};

util.inherits(Accel, InputEvent);

module.exports = Accel;



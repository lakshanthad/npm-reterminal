const util        = require('util');
const InputEvent  = require('.');

function Button(){
  var self = this;
  InputEvent.apply(this, arguments);
  this.on('data', function(ev){
    // filting key event
    if(InputEvent.EVENT_TYPES.EV_KEY == ev.type){
      if (ev.code == 30){
        if (ev.value == 1) {
          self.emit('F1ON', 1);
        }
        else {
          self.emit('F1OFF', 0);
        }
      }
      else if(ev.code == 31){
        if (ev.value == 1) {
          self.emit('F2ON', 1);
        }
        else {
          self.emit('F2OFF', 0);
        }
      }
      else if(ev.code == 32){
        if (ev.value == 1) {
          self.emit('F3ON', 1);
        }
        else {
          self.emit('F3OFF', 0);
        }
      }
      else if(ev.code == 33){
        if (ev.value == 1) {
          self.emit('OON', 1);
        }
        else {
          self.emit('OOFF', 0);
        }
      }
    }
  });
};

util.inherits(Button, InputEvent);

module.exports = Button;
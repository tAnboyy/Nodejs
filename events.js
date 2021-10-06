//7
const events = require('events');
const eventEmitter = new events.EventEmitter();

let ringbell = function(){
   console.log("Ring Ring Ring!");
   eventEmitter.emit('bellrings', "Welcome!");
}

eventEmitter.on('dooropen', ringbell);
eventEmitter.on('bellrings', function(message){
    console.log(message);
})
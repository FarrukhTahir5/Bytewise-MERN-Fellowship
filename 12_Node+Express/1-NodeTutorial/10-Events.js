const eventEmitter=require('events')
const customEmitter=new eventEmitter()
customEmitter.on('hello',(x,y)=>{
    console.log(`hello Mr.${x}, i guess ur age is ${y}`);
})
customEmitter.emit('hello')
customEmitter.emit('hello','farrukh','21')

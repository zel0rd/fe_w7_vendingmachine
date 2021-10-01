function Subject(){
    this.observers = [] // array of observer functions
}
Subject.prototype = {
    subscribe:function(fn)
    {
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove)
    {
        this.observers = this.observers.filter( fn => {
            if(fn != fnToRemove){
                return fn
            }
        })
    },
    fire: function()
    {
        this.observers.forEach( fn => {
            fn.call()
        })
    }
}
function Observer1(){
    console.log("Ovserver 1 Firing");
}
function Observer2(){
    console.log("Ovserver 2 Firing");
}
const subject = new Subject()
subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire()
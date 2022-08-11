function StopWatch() {
    let duration = 0;
    let status = 0;
    let interval;
    Object.defineProperty(this,`duration`,{
        get:function(){
            return duration;
        }
    })
    this.reset = function () {
        duration = 0;
    };
    this.start = function () {
        if (status) throw new Error(`StopWatch has already started`);
        status = 1;
        interval = setInterval(() => {
            duration += 1;
        }, 1);
    };
    this.stop = function () {
        if (!status) throw new Error(`Stopwatch is not started`);
        status = 0;
        clearInterval(interval);
        console.log(duration);
    };
}

const s = new StopWatch();
s.start();
s.reset();
setTimeout(()=>{
    s.stop()
},5000)
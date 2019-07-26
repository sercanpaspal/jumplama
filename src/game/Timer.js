export default class Timer {
    constructor(callback, milisecond){
        this.counter = 0;
        this.stopped = false;

        this.timer = milisecond;
        this.callback = callback;
    }

    update(){
        if(!this.stopped){
            if(this.counter > this.timer){
                this.counter = 0;
                this.callback();
            }
            this.counter++;
        }
    }
    stop(){
        this.stopped = true;
    }
    start(){
        this.stopped = false;
    }
}
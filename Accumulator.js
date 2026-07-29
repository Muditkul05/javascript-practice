function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function() {
        this.value = this.value + +prompt("Enter a number",0);
    };    
};
let accumulator = new Accumulator(10);
accumulator.read();
alert(accumulator.value);

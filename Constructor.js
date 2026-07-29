function Calculator(){
  this.read = function() {
    this.a = +prompt("Give first number", 0);
    this.b = +prompt("Give second number", 0);
  };
   this.sum = function(){
        return this.a + this.b;
    };
   this.mul = function(){
        return this.a * this.b ;
    };
}
let calc = new Calculator();
let calculator = new Calculator();
calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

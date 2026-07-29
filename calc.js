let calc = {
   read(){
    this.a = +prompt("give me first Number",0);
    this.b = +prompt("give me second Number",0);
   },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b ;
    },

}
calc.read()
alert(calc.sum());
alert(calc.mul());

function Calculator(){
    this.add = function(){
        return this.a + this.b;
    }
    this.sub = function(){
        return this.a - this.b;
    }
    this.calculate = function(str) {
        if(str.includes('+')){
        const parts = str.split('+');
        this.a = Number(parts[0].trim());
        this.b = Number(parts[1].trim());
        return this.add();
        }else if(str.includes('-')){
        const parts = str.split('-');
        this.a = Number(parts[0].trim());
        this.b = Number(parts[1].trim());
        return this.sub();
        }
    }
    this.addMethod = function(name, func){

    }

}
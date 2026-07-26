let range = {
    text : "Hello",
};
range[Symbol.iterator] = function(){
    return{
        currentindex : 0,
        text : "Hello",
        current : this.text[this.currentindex],    //current : Hello[0],
        last : this.text.length,                   //last : 5
        next(){
            if(this.currentindex < this.last ){
                return{done : false , value : this.text[this.currentindex++]};
                 
            }else{
                return{done : true , value : "failed"};
            }
        }
    }
}
for(let result of range){
    console.log(result)
}

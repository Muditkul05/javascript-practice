let sumInput = () =>{
   let arr = [];
    do{
        value = prompt("Enter a number",);
        if( value != null && value.trim() != "" && isFinite(value)){
        arr.push(+value);
        }
    }while(value != null && value.trim() != "" && isFinite(value))
    let sum = 0;
    for(let number of arr){
        sum = sum + number;
    }
    return sum;
}
alert(sumInput());

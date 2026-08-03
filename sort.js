let sort = (arr) => {
    arr.sort(function compare (a,b){
        if(a == b){
            return 0;
        }else if(a > b){
            return -1;
        }else{
            return 1;
        }
    })
    return arr;
}
console.log(sort([2,3,4,5,6,7]))
function pow(a,b){
    let product = 1;
    for (i = 1 ; i <= b ; i++){
        product = product * a ;
    }
    return product;
}
let result = pow(3,3);
console.log(result);
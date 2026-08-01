let camelize = (str) => {
   let arr =  str.split('-');
    arr.map(function item (){
        arr[0] = arr[0];
        arr[1] = arr[0].toUpperCase() + arr.slice(1);
        arr[2] = arr[0].toUpperCase() + arr.slice(1);
        return arr;
    })
}
console.log(camelize("my-short-string"));
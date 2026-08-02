let filterRange = (arr,a,b) => {
    let newArr = arr.filter(function(item, index, array){
        return item < b && item > a ;
    })
    return newArr;
}
console.log(filterRange([5,4,3,2,1] , 1 ,5))
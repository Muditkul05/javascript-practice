let camelize = (str) => {
   let arr =  str.split('-');
   let result = arr.map(function item (word,index , array){
    if(index == 0){
        return word;
    }
       return word[0].toUpperCase() + word.slice(1);
    }
    )
    return result.join('');
}
console.log(camelize("my-short-string"));
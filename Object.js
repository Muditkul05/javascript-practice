let user = {};
let key;
let isEmpty = (obj) => {
    for(key in obj){
        break;
    }
    if(key == undefined){
        return false;
    }else{
        return true;
    }
} 
let result = isEmpty(user);
console.log(result)
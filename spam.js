let checkSpam = (str) => {
    let Str = str.toUpperCase()
    return Str.includes('Viagra'.toUpperCase()) || Str.includes('xxx'.toUpperCase()) ; 
}
console.log(checkSpam("viaGRa"));
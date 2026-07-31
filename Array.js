let styles = ["jazz" , "blues",];
styles.push("Rock-n-Roll");
let middle = (arr) => {
   return Math.floor(arr.length/2);
};
let mid = middle(styles);
styles[mid] = "Classics";
console.log(styles.shift(0));
styles.unshift("Rap","Reggae");
console.log(styles)

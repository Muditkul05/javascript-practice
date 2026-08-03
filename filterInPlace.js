let filterInPlace = (arr, a, b) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
  
  return arr;
};

console.log(filterInPlace([5, 4, 3, 2, 1], 1, 3));
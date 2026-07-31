let maxSubSum = (arr) => {
    let currentSum = 0;
    let maxSum = -Infinity;
    for(let number of arr){
            currentSum = currentSum + number;
            if(currentSum > maxSum){
                maxSum = currentSum;
            }
            if(currentSum < 0){
                currentSum = 0;
            }
        }
        return (maxSum < 0) ? 0 : maxSum ;
}
console.log(maxSubSum([-2, -5, -1, -3])); 
console.log(maxSubSum([-5, 10, -3, 100]));
console.log(maxSubSum([100, -9, 2, -3, 5]) );

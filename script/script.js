let arr = [0, true, 1, true, 5, true];//array
let truthyCount = arr.filter(x => x === true).length;// the arrow function is used as a calback function for filter
console.log(truthyCount); // Output: 3
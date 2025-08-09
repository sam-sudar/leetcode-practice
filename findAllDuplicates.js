function findAllDuplicates(arr) {
  //   console.log(arr);
  let freqCounter = {};
  let result_arr = [];
  for (let val of arr) {
    freqCounter[val] = (freqCounter[val] || 0) + 1;
  }
  for (let val in freqCounter) {
    // console.log(val, freqCounter[val]);
    if (freqCounter[val] == 2) {
      result_arr.push(Number(val));
    }
  }
  console.log(result_arr);
  return result_arr;
}
findAllDuplicates([1, 2, 3, 3]);

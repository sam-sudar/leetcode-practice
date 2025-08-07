function countUniqueValues(arr) {
  //   console.log(arr.length);
  let i = 0;
  if (arr.length == 0) return i;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
      //   console.log("This i value", i, arr[i]);
    }
  }
  console.log(arr);
  //   console.log(i + 1);
  return arr;
}
countUniqueValues([1, 1, 1, 2, 2, 3, 3, 4]);

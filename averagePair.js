//Multiple Pointers

function averagePair(arr, target) {
  //   console.log(arr, target);
  let left = 0;
  let right = arr.length - 1;
  let avg = 0;
  while (left <= arr.length - 2) {
    // console.log(arr.length);
    avg = (arr[left] + arr[right]) / 2;
    // console.log("This is the left element: ", arr[left]);
    // console.log("This is the right element: ", arr[right]);
    if (avg == target) {
      //   console.log("Boom, we got it", avg);
      return true;
    }
    if (avg > target) {
      right--;
    }
    if (avg < target) {
      left++;
    }
  }
  //   console.log("There are no avg matching");
  return false;
}

averagePair([1, 2, 5, 4, 5, 6, 2], 4);

// Tricky but got it

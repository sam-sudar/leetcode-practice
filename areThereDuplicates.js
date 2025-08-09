//  Frequency counter method:
// function areThereDuplicates(...arr) {
//   //   console.log(arr);
//   let freqCounter1 = {};
//   for (let val of arr) {
//     // console.log(val);
//     freqCounter1[val] = (freqCounter1[val] || 0) + 1;
//     if (freqCounter1[val] > 1) {
//       //   console.log(val, "is more");
//       return true;
//     }
//   }
//   return false;
//   console.log(freqCounter1);
// }

// Multiple Pointers method
function areThereDuplicates(...arr) {
  arr.sort(); // Sorting groups duplicates together
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      return true; // found duplicate
    }
    i++;
    j++;
  }
  return false; // no duplicates after full pass
}

areThereDuplicates(1, 2, 3, 3);

// Need to work more on the logic building of MP as my code was shortcircuiting early.

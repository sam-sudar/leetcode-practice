// Multiple Pointers

function isSubsequence(a, b) {
  //   console.log(a, b);
  let left = 0;
  let right = 1;
  for (let val in a) {
    // console.log(a[val]);
    if (a[val] == b[left]) {
      right++;
    }
    
  }
}
isSubsequence("sing", "sting");

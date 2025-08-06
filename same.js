function same(a, b) {
  var check = a.map((item) => item * item);
  let bool = false;
  check.sort();
  b.sort();
  for (let i = 0; i <= b.length; i++) {
    if (check[i] !== b[i]) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}

same([1, 2, 3], [4, 1, 9]);

// Time complexity: O(nlogn) ---- The worst one bro
// Next time use - Frequency counter pattern

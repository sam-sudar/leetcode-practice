function anagram(input1, input2) {
  let arr1 = input1.split("");
  let arr2 = input2.split("");
  if (arr1.length != arr2.length) return false;
  //   console.log(arr1, arr2);
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  //   console.log(freqCounter1, freqCounter2);
  for (let key in freqCounter2) {
    if (freqCounter1[key] != freqCounter2[key]) return false;
  }
  return true;
}

anagram("sam", "mas");

// TimeComplexity - O(n)
// SpaceComplexity - O(n)

// Good job but we can optimize more but using only one freqCounter.

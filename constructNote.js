function constructNote(m, n) {
  //   console.log(m, n);
  let freqCounter1 = {};
  for (let val of n) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of m) {
    // console.log(val);
    // console.log(freqCounter1[val]);
    if (!freqCounter1[val]) {
      //   console.log("lost");
      return false;
    }
    freqCounter1[val]--;
    // console.log(freqCounter1);
  }
  //   console.log("Message can be formed");
  return true;
}
constructNote("aa", "abc");

// Greatly Optimized

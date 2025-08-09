// function sameFrequency(a, b) {
//   let val1 = String(a).split("");
//   let val2 = String(b).split("");

//   let freqCounter1 = {};
//   let freqCounter2 = {};
//   for (let i of val1) {
//     freqCounter1[i] = (freqCounter1[i] || 0) + 1;
//   }
//   for (let i of val2) {
//     freqCounter2[i] = (freqCounter2[i] || 0) + 1;
//   }
//   //   console.log(freqCounter1, freqCounter2);
//   //   console.log(val1, val2);
//   return JSON.stringify(freqCounter1) == JSON.stringify(freqCounter2);
// }
function sameFrequency(a, b) {
  let val1 = String(a).split("");
  let val2 = String(b);

  let freqCounter1 = {};
  //   let freqCounter2 = {};
  for (let i of val1) {
    freqCounter1[i] = (freqCounter1[i] || 0) + 1;
  }
  for (let i of val2) {
    if (!freqCounter1[i]) {
      //   console.log("Its there", freqCounter1[i], i);
      return false;
    }
    freqCounter1[i]--;
  }
  return true;
  //   console.log(freqCounter1);
  //   return JSON.stringify(freqCounter1) == JSON.stringify(freqCounter2);
}

sameFrequency(1223, 3212);

// Frequency Counter

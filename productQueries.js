function productQueries(n, queries) {
  //   console.log(n.toString(2));
  let binary = n.toString(2);
  let power_num = 0;
  let arr = [];
  let length = binary.length - 1;

  // To get the power of n
  for (let i in binary) {
    // console.log(binary[i]);
    power_num = 2 ** length;
    // console.log(binary, power_num);
    if (binary[i] == 1) {
      arr.push(power_num);
      //   console.log("There is a match", power_num);

      length--;
    } else {
      //   console.log("There is not a match", power_num);
      length--;
    }
  }

  //   console.log("This is the power", arr.reverse());
  let reverse = arr.reverse();
  console.log("This is the reverse", reverse);

  //
  //   console.log(arr.reverse());
  let pointer = 0;
  let result = 1;
  let output = [];

  for (let val in queries) {
    let temp = queries[val];
    console.log("This the temp: ", temp[0], temp[1]);
    // console.log("This is arr: ", reverse);
    let sliced = reverse.slice(temp[0], temp[1] + 1);
    console.log(sliced);
    while (pointer < sliced.length) {
      result = result * sliced[pointer];
      console.log("This is the sliced bruh: ", sliced[pointer]);
      console.log("This is the result bruh: ", result);
      pointer++;
    }
    output.push(result);
    pointer = 0;
    result = 1;
  }
  console.log("This is the result", output);

  // Multiply
}

productQueries(15, [
  [0, 1],
  [2, 2],
  [0, 3],
]);

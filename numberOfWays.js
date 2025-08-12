function numberOfWays(n, x) {
  const MOD = 1000000007;

  // 1) Build list of powers i^x that are <= n
  const powers = [];
  for (let i = 1; i ** x <= n; i++) {
    powers.push(i ** x);
  }

  // 2) dp[s] = number of ways to make sum s using the powers considered so far
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; // one way to make sum 0: choose nothing

  // 3) Iterate each power once; to avoid reusing the same power multiple times,
  //    update sums in descending order (classic 0/1 knapsack trick).
  for (const p of powers) {
    for (let s = n; s >= p; s--) {
      dp[s] = (dp[s] + dp[s - p]) % MOD;
    }
  }

  return dp[n];
}

// Example outputs
console.log(numberOfWays(10, 2)); // 1
console.log(numberOfWays(4, 1)); // 2
console.log(numberOfWays(160, 3)); // 1

const addUpToOne = n => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}


const addUpToTwo = n => {
  return n * (n + 1) / 2;
}


console.log(addUpToOne(6));
console.log(addUpToTwo(6));

const t1 = performance.now();
addUpToOne(1000000000);
const t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

const t3 = performance.now();
addUpToTwo(1000000000);
const t4 = performance.now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`)

// TIME COMPLEXITY EXAMPLES

// O(n)
const addUpToOne = n => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1)

const addUpToTwo = n => {
  return n * (n + 1) / 2;
}

// possible way to track time.. but not the best as it's not always the same

const t1 = performance.now();
addUpToOne(1000000000);
const t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

const t3 = performance.now();
addUpToTwo(1000000000);
const t4 = performance.now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds`)

// O(n)

const countUpAndDown = n => {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top! \nGoing down...');
  for (let j = n -1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down, bye!');
}

// O(n^2)

const printAllPairs = n => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}


// O(n)

const logAtLeast5 = n => {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

console.log(logAtLeast5(10));


// O(1)

const logAtMost5 = n => {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}


// SPACE COMPLEXITY EXAMPLES

// O(1) space - only has two numbers (total & i)

const sum = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

//O(n) space - new array that is dependent on arr.length (n)

const double = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

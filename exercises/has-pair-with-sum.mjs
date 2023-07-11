const hasPairWithSum = (sequence, sum) => {
  const set = new Set();

  for (const item of sequence) {
    if (set.has(item)) return true;

    set.add(sum - item);
  }

  return false;
};

const digits = [6, 4, 3, 2, 1, 7];
const sum = 9;

const start = performance.now();
const sumExists = hasPairWithSum(digits, sum);
const end = performance.now();

console.log({ sumExists, time: end - start });

const firstRecurringCharacter = (sequence) => {
  const hashTable = {};

  for (const item of sequence) {
    if (hashTable[item]) return item;
    else hashTable[item] = 1;
  }
};

const sequence = [2, 1, 2, 1, 3, 4, 5];

const start = performance.now();
const recurringChar = firstRecurringCharacter(sequence);
const end = performance.now();

console.log({ recurringChar, time: end - start });

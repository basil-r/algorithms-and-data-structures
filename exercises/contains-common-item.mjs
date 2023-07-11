const containsCommonItem = (arrayA, arrayB) => {
  const hashTable = {};

  for (const item of arrayA) {
    if (!hashTable[item]) {
      hashTable[item] = 1;
    }
  }

  for (const item of arrayB) {
    if (hashTable[item]) return true;
  }

  return false;
};

const containsCommonItemVer2 = (arrayA, arrayB) =>
  arrayA.some((item) => arrayB.includes(item));

const digitsA = [0, 0, 1, 2, 5, 7, 7, 8, 9, 9];
const digitsB = [0, 1, 1, 3, 4, 5, 6, 7, 8, 9];

const start = performance.now();
const commonItemExists = containsCommonItem(digitsA, digitsB);
const end = performance.now();

console.log({ commonItemExists, time: end - start });

const start2 = performance.now();
const commonItemExists2 = containsCommonItemVer2(digitsA, digitsB);
const end2 = performance.now();

console.log({ commonItemExists2, time: end2 - start2 });

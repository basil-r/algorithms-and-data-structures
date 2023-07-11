const mergeSortedArrays = (arrayA, arrayB) => {
  let indexA = 0;
  let indexB = 0;
  let itemA = arrayA[indexA];
  let itemB = arrayB[indexB];

  if (itemA === undefined) return arrayB.slice();
  if (itemB === undefined) return arrayA.slice();

  const mergedArray = [];

  while (itemA !== undefined || itemB !== undefined) {
    if (itemB === undefined || itemA < itemB) {
      mergedArray.push(itemA);
      itemA = arrayA[++indexA];
    } else {
      mergedArray.push(itemB);
      itemB = arrayB[++indexB];
    }
  }

  return mergedArray;
};

const mergeSortedArraysVer2 = (arrayA, arrayB) => arrayA.concat(arrayB).sort();

const digitsA = [0, 0, 1, 2, 5, 7, 7, 8, 9, 9];
const digitsB = [0, 1, 1, 3, 4, 5, 6, 7, 8, 9];

const start = performance.now();
const mergedArray = mergeSortedArrays(digitsA, digitsB);
const end = performance.now();

console.log({ mergedArray, time: end - start });

const start2 = performance.now();
const mergedArray2 = mergeSortedArraysVer2(digitsA, digitsB);
const end2 = performance.now();

console.log({ mergedArray2, time: end2 - start2 });

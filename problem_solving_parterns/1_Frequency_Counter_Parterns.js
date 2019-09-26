// Write a function call same(), which accepts 2 arrays. The function should return true if
// every value in the array has it's corresponding value squared in the second array.
// The frequency of the values must be the same.

// Example:
// same([1, 2, 3], [1, 9, 4]) should return true
// same([1, 2, 3], [1, 9]) should return false
// same([1, 2, 1], [1, 4, 4]) should return false (must be the same frequency)

//////////////// Naive Solution ////////////////
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const hasCorrespondingIndex = arr2.indexOf(arr1[i] ** 2);
    if (hasCorrespondingIndex === -1) {
      return false;
    }
    arr2.splice(hasCorrespondingIndex, 1);
  }

  return true;
}

const result = same([1, 2, 3], [1, 9, 4]);
console.log("result ", result);

//////////////// Frequency Counter Partern ////////////////
function objSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj1 = arr1.reduce(
    (acc, e) => ({ ...acc, [e]: (acc[e] || 0) + 1 }),
    {}
  );
  const obj2 = arr2.reduce(
    (acc, e) => ({ ...acc, [e]: (acc[e] || 0) + 1 }),
    {}
  );

  for (let i = 0; i < arr1.length; i++) {
    const number = arr1[i];

    if (obj1[number] !== obj2[number ** 2]) {
      return false;
    }
  }

  return true;
}

const objResult = same([1, 2, 3], [1, 9, 4]);
console.log("objResult ", objResult);

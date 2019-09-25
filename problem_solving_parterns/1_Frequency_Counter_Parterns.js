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
    const hasCorrespondingValue = arr2.indexOf(arr1[i] ** 2);
    if (hasCorrespondingValue === -1) {
      return false;
    }
    arr2.splice(hasCorrespondingValue, 1);
  }

  return true;
}

const result = same([1, 2, 3], [1, 9, 4]);
console.log("result ", result);

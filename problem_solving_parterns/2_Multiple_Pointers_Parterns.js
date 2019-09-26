// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exit.

// Example
// sumZero([-3, -2, -1, 0, 1, 2, 3]) should return [-3, 3]
// sumZero([1, 2, 3]) should return undefined

//////////////// Naive Solution ////////////////
function naiveSumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(
  "naiveSumZero([-3, -2, -1, 0, 1, 2]) ",
  naiveSumZero([-3, -2, -1, 0, 1, 2])
);

console.log("naiveSumZero([1, 2, 3]) ", naiveSumZero([1, 2, 3]));

//////////////// Multiple Poiters Partern ////////////////
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log("sumZero([-3, -2, -1, 0, 1, 2])", sumZero([-3, -2, -1, 0, 1, 2]));
console.log("sumZero([1, 2, 3])", sumZero([1, 2, 3]));

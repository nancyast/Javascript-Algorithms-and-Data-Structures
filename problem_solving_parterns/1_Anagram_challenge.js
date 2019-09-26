// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.
// validAnagram('azz','zaz') true
// validAnagram('anagram','nagaram') true
// validAnagram('cat','car') false

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};
  for (let i = 0; i < str1.length; i++) {
    frequency1 = {
      ...frequency1,
      [str1[i]]: (frequency1[str1[i]] || 0) + 1
    };
  }

  for (let i = 0; i < str2.length; i++) {
    frequency2 = {
      ...frequency2,
      [str2[i]]: (frequency2[str2[i]] || 0) + 1
    };
  }

  for (let key of Object.keys(frequency1)) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }

  return true;
}

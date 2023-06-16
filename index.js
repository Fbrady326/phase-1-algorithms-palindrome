function isPalindrome(word) {
  if (word === word.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

/* 
  function isPalindrome takes a string as an argument. If the string is a palindrome then return true. If the string is not a palindrome return false.
*/

/*
  The function takes the word and splits each letter in to an array, then the word is reversed and joined back into a word. If the word is the same backwards as it is forwards then it returns true. If not then it is returned false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

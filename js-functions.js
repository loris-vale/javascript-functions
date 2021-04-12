let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string"
  } else if (string.length < 2 ){
    return string
  }

  let permutationsArray = [] 
   
  for (let i = 0; i < string.length; i++){
    let char = string[i]

    if (string.indexOf(char) !== i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) }
  }
  return permutationsArray
}

console.log(findPermutations("abc"));
console.log(findPermutations("ab"));
console.log(findPermutations("abcd"));

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
}

console.log("Is 'otto' a palindrome? " + palindrome("otto"));
console.log("Is 'level' a palindrome? " + palindrome("level"));
console.log("Is 'A man, a plan, a canal. Panama' a palindrome? " + palindrome("A man, a plan, a canal. Panama"));
console.log("Is 'automatic' a palindrome? " + palindrome("automatic"));
console.log("Is 'palindrome' a palindrome? " + palindrome("palindrome"));
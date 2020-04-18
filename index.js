// solution 1
// this function replaces all the vowels within a string
// replace - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
// regular expressions RegExp - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
function disemvowel(str) {
    let regex = /[aeiou]/gi
      str = str.replace(regex, "");  // used regex and replace to remove the vowels
      return str;
    }
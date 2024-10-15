function isPalindrome(str) {
    const texto = str.split(" ").join('');
    const ePalindromo = texto.split("").reverse().join('');

    return texto.toLowerCase() === ePalindromo.toLowerCase();
}
  
  console.log(isPalindrome("A man a plan a canal Panama")); // true
  console.log(isPalindrome("hello")); // false

console.log(isPalindrome("Osso"))
console.log(isPalindrome("Anna"))
console.log(isPalindrome("Radar"))
console.log(isPalindrome("Roma"))
  
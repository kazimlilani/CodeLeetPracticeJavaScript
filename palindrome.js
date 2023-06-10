

console.log(isPalindrome('ccccccc'))

function isPalindrome(str) {
  
  for(i=0; i<str.length / 2; i++){
    if(str[i] !== str[str.length-1 -i]){
      return 'It is not a palindrome';
    }
    else {
      return 'It is a palindrome';
    }
  }
  //console.log(str.length)
}

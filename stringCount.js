function compressString(str) {
  let result = "";
  let count = 1; // Initialize count to 1 for the first character
  
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is the same as the next character
    if(str.charAt(i) == str.charAt(i+1)){
      count++;
    }else {
      // Append the count and the current character to the result string
      result += count + str.charAt(i);
      count = 1; // Reset the count for the next character
    }
  }
  return result;
}

let input = "aaabbbccccca";
let output = compressString(input);
console.log(output); // should output "3a3b5c1a"



///////////////////



input ='aaabbbcccazzz';
result="";
count=1;

for(i=0; i < input.length; i++){
    
   if(input[i] == input[i + 1]){
       count++;
   }else {
       result += count+input[i];
       count=1;
   }
   
}

console.log(result)


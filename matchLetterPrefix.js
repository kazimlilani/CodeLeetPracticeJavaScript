// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

input = ['flower','floor','flago'];
//arr = [];
/*
console.log(input[0])
console.log(input[0].length)
console.log(input[1])
console.log(input[2])
*/

for(j=0; j<input[0].length; j++){
    count=0;
   // console.log(input[i])
    for(i=1; i<input.length; i++){
        if(input[0][j] == input[i][j]){
        count++;
        //arr.push(input[0][j]);
           // console.log(input[0][j]);
        }
    }
    if(count == input.length-1){
         console.log(input[0][j]);
    }
}

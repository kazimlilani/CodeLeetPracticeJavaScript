// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


n = 10;
function countDown(fromNumber) {
    if(fromNumber % 2 !=0){
     console.log(fromNumber);
    }
   if(fromNumber > 0 ){
   countDown(fromNumber-1)
   }
   
}
countDown(n); 

//oodNumber = 7;

//console.log(oodNumber % 2 == 0);
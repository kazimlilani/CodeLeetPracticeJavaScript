/*
function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


arr = [901,902,9001,1];
result = 0
min = arr[0];

for(i=0; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
}
//console.log(min)

for(j=0; j<arr.length; j++){
    if(arr.includes(min)){
        min++;
    }
}
console.log(min)



  
  





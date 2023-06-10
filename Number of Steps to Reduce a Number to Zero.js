//1342. Number of Steps to Reduce a Number to Zero
//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

var numberOfSteps = function(num) {
   steps=0;
    while (num > 0){
      steps++;


if(String(num % 2 == 0) == 'false'){
    num = num-1;
}
else if(String(num % 2 == 0) == 'true'){
    num = num/2;
}
}
return steps;
};
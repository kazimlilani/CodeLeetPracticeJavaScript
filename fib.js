

//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
/*
first = 1;
second = 1;
third = 0;

limit = 10;

for(i=0; i<limit; i++){
    
    third = first + second;
    first = second;
    second = third
    console.log(third)
}
*/


fib =  [0,1];

for(i=2; i<10; i++){
    fib[i] = fib[i-1] + fib[i-2];
}
console.log(fib)
console.log(fib[4+1])
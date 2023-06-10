// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

height =5;

  for (let i = 1; i <= height; i++) {
    //let row = '';
   
    for (let j = 1; j <= height; j++) {
      if (j <= height - i) {
        process.stdout.write(" ");
      } else {
       process.stdout.write("*");
      }
    }
     console.log("");
  }



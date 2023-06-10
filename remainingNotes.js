// Online Javascript Editor for free process.stdout.write();
// Write, Edit and Run your Javascript code using JS Online Compiler

given = 1000
bill = 720;
remaining = given - bill;
notes = [100,50,10];

for(i=0; i < notes.length; i++){
   if(remaining >= notes[i]){
    console.log(Math.trunc(remaining/notes[i])+": "+notes[i]+"notes")
   remaining = remaining -  (Math.trunc(remaining/notes[i]))*notes[i];
}
}
/*
console.log("remaining total amount:"+remaining)
if(remaining >= 200){
    console.log(Math.trunc(remaining/100)+": 100 notes")
   remaining = remaining -  (Math.trunc(remaining/100))*100;
}

if(remaining < 99){
    console.log(Math.trunc(remaining/50)+": 50 notes")
   remaining = remaining -  (Math.trunc(remaining/50))*50;
}
if(remaining < 50){
    console.log(Math.trunc(remaining/10)+": 10 notes")
   remaining = remaining -  (Math.trunc(remaining/10))*10;
}
console.log(remaining+": in coins")
*/


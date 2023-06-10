// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var ransomNote = "zzzz";
var magazine = "aaazaaazaaz";
count = 0;

for(i=0; i<magazine.length; i++){
  
    //console.log(i)
    if(ransomNote.includes(magazine[i])){
        ransomNote = ransomNote.replace(magazine[i],'');
           count++;
           console.log(ransomNote)
       }
}
//console.log(count)
//console.log(ransomNote.length)
if(ransomNote.length == 0){
    console.log("true");
}else {
      console.log("false");
}

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


n="levels";

const count = [];

for(i=0; i<n.length; i++){
   //console.log(n.charAt(i));
   
  if(String(count.includes(n.charAt(i))) == 'false'){
      count.push(String(n.charAt(i)));
  }
  else  {
     // count.remove(String(n.charAt(i)));
     
   //  count.splice(filter(v => v !== n.charAt(i));
     count.splice(count.indexOf(n.charAt(i)), 1);
   //console.log(n.charAt(i));
  }
 
}
// count.splice(count.lastIndexOf('e'), 1);
//count.push('z')
//count.pop('s');
 console.log(count);
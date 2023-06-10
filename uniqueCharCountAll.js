const input = "aaabbbcccazzz";
const unique = ['a','b','c','z'];
count=0;


for(i=0; i<unique.length; i++){
    count=0;
    //console.log("first look: "+unique[i]);
    
    for(j=0; j<input.length;j++){
       // console.log(input[j])
       if(unique[i] == input[j])
       {
           count++;
       }
    }
    console.log(count+unique[i]);
}












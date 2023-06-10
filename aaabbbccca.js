


input = 'aaabbbccca';
output = '';

const counts = {};

//counts['a'] = 1;
//counts['b'] = 1;


for(i=0; i<input.length; i++){
    
    if(counts[input[i]]){
       counts[input[i]]++;
    }else {
        counts[input[i]]=1;
    }
    
}




console.log(counts)


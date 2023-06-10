mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]]
 
arr = [];
final = [];

for(i=0; i<mat.length;i++){
  result =0;  
    for(j=0; j<mat[i].length; j++){
        result +=mat[i][j];
    }
   // console.log("Row :"+i+":"+result)
    arr.push([i,result])
}

  arr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  
 //const weakestRows = [];
for(x=0; x<2; x++){
    final.push(arr[x][0]);
  //  console.log(arr[x][0])
    // weakestRows.push(arr[x].index);
}

console.log(final)



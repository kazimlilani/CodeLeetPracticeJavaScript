

/*
const str = 'ABCCCCBBCA';
console.log(str)

result = str.replace("CCCC","");
console.log(result)

result1 = result.replace("BBB","");
console.log(result1)
*/

console.log(removeConsecutiveChars("ABCCCCBBCA"));
//console.log(removeConsecutiveChars1(removeConsecutiveChars1("ABCCCCBBCA")));

function removeConsecutiveChars(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1] || str[i] !== str[i + 2]) {
      result += str[i];
    } else {
      i += 2;
    }
  }

  return result;
}

function removeConsecutiveChars1(str) {
  let result = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count < 3) {
        result += str[i].repeat(count);
      }
      count = 1;
    }
  }

  return result;
}


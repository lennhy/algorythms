#!/usr/bin/env node

var str = "LiserMin";
var stringArr = 'ggefwwgpiii';
var i=0;
var arr=[];
var arry = [1,2,4,5,6, 44, 9,10, 45];

hasNoDuplicates(str);
IsApermutation("bed", "dbe");
urlify("hell no jose", 0)
palindromePermutation("fal", "laf");
CountnumsThatHavMoreThanOne(stringArr);
arrayChunk(arry, 2);

// function hasNoDuplicates(str){
//
//   for(let i=0; i < str.length; i++){
//     for(let k=1; k < str.length; k++){
//       if(i!==k && str[i]===str[k]){
//         return console.log(str[k] + " is a duplicate");
//       }
//     }
//   }
//   return console.log("there are no duplicates");
// }
// Refactor
// 1 O(A+B)
function hasNoDuplicates(str){
  var chars={};
  var count=0;

  for(let i=0;i< str.length; i++){
    if(chars[str[i]]){
      chars[str[i]]++;
    }else{
      chars[str[i]] = 1;
    }
  }
  console.log(chars);

  for(let char in chars){
    if(chars[char] > 1){
      return console.log("there are duplicates");
    }
  }
  return console.log("there are no duplicates");
}


// 2. O(N^2)
function IsApermutation(string1, string2){
    // check first if they have the same number of letters first before starting the calculation
    if(string1.length == string2.length){
      let length = string1.length;
      let count =0;
      for(let i=0; i < string1.length; i++){
        for(let k=0; k < string2.length; k++){  // O(n)^2
          if(string1[i]==string2[k]){
            count++;
          }
        }
      }
      if(count == length){
        return console.log("Both strings are permutations");
      }
      else{
        return console.log("Both strings are permutations");
      }
  }
  else{
    return console.log("it is not a permutation");
  }
}



// 2. refactor
function IsApermutation(string1, string2){
    // check first if they have the same number of letters first before starting the calculation
    if(string1.length !== string2.length){
      return console.log("it is not a permutation");
    }

    let length = string1.length;
    let count =0;
    for(let i=0; i < string1.length; i++){
      for(let k=0; k < string2.length; k++){  // O(n)^2
        if(string1[i]===string2[k]){
          count++;
        }
      }
    }
    if(count == length){
      return console.log("Both strings are permutations");
    }
    else{
      return console.log("Both strings are not permutations");
    }
}


// 3. O(N)
function urlify(string){
  //recursion
  while(i < string.length){
    // if a " " is found
    if(string[i] === " "){
       arr.push("%20");
     }else{
       arr.push(string[i]);
      console.log(arr)
    }
    i++;
    return urlify(string)
  }
  return console.log(arr.join(''));
}



// 4. O(N)
function palindromePermutation(string1, string2){
  // Check to see if the strings are equal in size if not then return 0
  // check if the front and back indice values match each time you loop through the string
  if(string1.length !== string2.length){
    return console.log("It's not a palindromePermutation jjj");
  }
  let l = string2.length - 1

  while(i < string1.length){
    console.log([i] + "-----" + [l])
    if(string1[i] !== string2[l]){
      return console.log("It's not a palindromePermutation");
    }
    i++;
    l--;
    palindromePermutation(string1, string2)
  }
  return console.log("It's a palindromePermutation")
}




// 1.1 O(A+B) --- A is stringArr and B is chars
// Alternative
// var stringArr=['g','e','f','w','w','g','p'];
function CountnumsThatHavMoreThanOne(stringArr){

  var chars={};
  var count=0;
  // Alternative
  // for(let char of stringArr){
  //   if(chars[char]){
  //     chars[char]++;
  //   }else{
  //     chars[char] = 1;
  //   }
  // }
  for(let i=0;i< stringArr.length; i++){
    if(chars[stringArr[i]]){
      chars[stringArr[i]]++;
    }else{
      chars[stringArr[i]] = 1;
    }
  }
  console.log(chars);

  for(let char in chars){
    if(chars[char] > 1){
      count++;
    }
  }
  return(console.log(count + " letters are recurring"));
}


// 1.2 O(N)
function arrayChunk(arry, size){
  let newArr = []; // Create an empty temporary array to hold size values
  let length = arry.length; // Save the original length of arry
  let arry2 =[]; // Create an empty new permanent array to hold all the nested values

  for(let i=0; i < length; i++){
    newArr.push(arry[i]); // push all values into newArr until it has size values
    if(newArr.length===size) {
      arry2.push(newArr); // if newArr has size values push the array into arry2
      newArr = []; // Make new empty again and save next size values
    }
    if(newArr.length!==size && i % 4 ===0){ // If there are not size values left
      arry2.push(newArr); // push the remaining value / values
    }
  }
  return console.log(arry2);
}

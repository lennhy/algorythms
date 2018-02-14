#!/usr/bin/env node

var str = "LiserMin";
var stringArr = 'ggefwwgpiii';
var sen = "there is a dog in the backyard";
var i=0;
var arr=[];
var arry = [1,2,4,5,6, 44, 9,10, 45];
var num = 6;
var vowelText = "This is a Atest";
const matrixArr =[
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]


// nxnSpiralMatrix(4)
hasNoDuplicates(str);
IsApermutation("bed", "dbe");
urlify("hell no jose", 0)
palindromePermutation("fal", "laf");
CountnumsThatHavMoreThanOne(stringArr);
arrayChunk(arry, 2);
capitalize(sen)
matrix(matrixArr);

// stepShape(3);
// stepPyramid(3);


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

  for(let i=0;i< str.length; i++){
    console.log("THisssss" + str[i])
    if(chars[str[i]]){
      chars[str[i]]++;
    }
    else{
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
  var chars={};
  var chars2={};

  for(let i=0;i< string1.length; i++){
    if(chars[string1[i]]){
      chars[string1[i]]++;
    }else{
      chars[string1[i]] = 1;
    }
  }

  for(let i=0;i< string2.length; i++){
    if(chars2[string2[i]]){
      chars2[string2[i]]++;
    }else{
      chars2[string2[i]] = 1;
    }
  }
  // console.log(chars 0  + chars2);

  // return console.log("there are no duplicates");
    // check first if they have the same number of letters first before starting the calculation
  //   if(string1.length == string2.length){
  //     let length = string1.length;
  //     let count =0;
  //     for(let i=0; i < string1.length; i++){
  //       for(let k=0; k < string2.length; k++){  // O(n)^2
  //         if(string1[i]==string2[k]){
  //           count++;
  //         }
  //       }
  //     }
  //     if(count == length){
  //       return console.log("Both strings are permutations");
  //     }
  //     else{
  //       return console.log("Both strings are permutations");
  //     }
  // }
  // else{
  //   return console.log("it is not a permutation");
  // }
}



// 2. refactor
// function IsApermutation(string1, string2){
//     // check first if they have the same number of letters first before starting the calculation
//     if(string1.length !== string2.length){
//       return console.log("it is not a permutation");
//     }
//
//     let length = string1.length;
//     let count =0;
//     for(let i=0; i < string1.length; i++){
//       for(let k=0; k < string2.length; k++){  // O(n)^2
//         if(string1[i]===string2[k]){
//           count++;
//         }
//       }
//     }
//     if(count == length){
//       return console.log("Both strings are permutations");
//     }
//     else{
//       return console.log("Both strings are not permutations");
//     }
// }


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
// function arrayChunk(arry, size){
//   let newArr = []; // Create an empty temporary array to hold size values
//   let length = arry.length; // Save the original length of arry
//   let arry2 =[]; // Create an empty new permanent array to hold all the nested values
//
//   for(let i=0; i < length; i++){
//     newArr.push(arry[i]); // push all values into newArr until it has size values
//     if(newArr.length===size) {
//       arry2.push(newArr); // if newArr has size values push the array into arry2
//       newArr = []; // Make new empty again and save next size values
//     }
//     if(newArr.length!==size && i % 4 ===0){ // If there are not size values left
//       arry2.push(newArr); // push the remaining value / values
//     }
//   }
//   return console.log(arry2);
// }

function arrayChunk(arry, size){
  let newArr = []; // Create an empty temporary array to hold size values
  // let length = arry.length; // Save the original length of arry
  // let arry2 =[]; // Create an empty new permanent array to hold all the nested values

  for(let i=0; i < arry.length; i+=size){
    newArr.push(arry.slice(i, i+size))

    // newArr.push(arry[i]); // push all values into newArr until it has size values
    // if(newArr.length===size) {
    //   arry2.push(newArr); // if newArr has size values push the array into arry2
    //   newArr = []; // Make new empty again and save next size values
    // }
    // if(newArr.length!==size && i % 4 ===0){ // If there are not size values left
    //   arry2.push(newArr); // push the remaining value / values
    // }
  }
  return console.log(newArr);
}

function capitalize(sen){
  let arr=[];
  let newSen = sen.split(' ');

  for(let i=0; i < newSen.length; i++ ){
      arr.push(newSen[i][0].toUpperCase() + newSen[i].slice(1))
      // take the first letter out of the word and change it to uppercase
    //     word += sen[i];
    //     console.log(word)
    //   }else{
    //     firstLetter = word[0].toUpperCase();
    //     newWord = firstLetter + word.slice(1, -1)
    //   // sen[ first letter of a word]
    //   // take the remaingin words after that letter and add it to the letter
    //   // do this for each letter in the sentence
    //   // let remainLet = word.slice(0, i )
    //   arr.push(newWord);
    //   // arr.push(word);
  }

  return console.log(arr.join(' '));
}

// capitalize Alternative
function capitalize(sen){
  let result = sen[0].toUpperCase()
  for(let i=1; i < sen.length; i++ ){
    if(sen[i-1]===" "){
      result += sen[i].toUpperCase()
    }else{
      result +=sen[i]
    }
  }
  return console.log(result)
}
// var sen = "there is a dog in the backyard";

// function stepShape(n){
  // let string="";
  // string.split(" ", num)
  // console.log(string + "x")
  // for(let i=0; i < num; i++){
  //   string += "#"
  //   console.log(string+"s")
  // }
  // return;
  // Start
//   for(let row=0; row < n; row++) {
//     let stair=''; // New string which will print a stair in a stair case on every console.log
//     for(let col=0; col < n; col++){
//       // Iterate over this loop 3 times before itereate over first loop
//       if(col <= row){
//         // 1st 3 iterations - This will create a row = #_ _ the first 3 times the second loop (col loop) loops in the first loop (row loop) and so fought
//         // 2nd 3 iterations - This will create a row = # # _ the second 3 times
//         // 3rd 3 iterations - This will create a row = # # # the third 3 times
//         stair+= '#';
//       }
//       else{
//         stair+=' ';
//       }
//     }
//     console.log(stair + "x");
//   }
//   // End
// }
// Alternative Recursive solution
// function stepShape(num, row=0, stair=''){
//
//   if(row === num){
//     return;
//   }
//   if(num === stair.length){
//     console.log(stair);
//     return stepShape(num, row+1);
//   }
//   if(stair.length <= row){
//     stair+= '#';
//   }
//   else{
//     stair+=' ';
//   }
//   stepShape(num, row, stair);
// }

// function stepPyramid(n){
//   // This is based off a patern which is 2 * n -1 = the total that of spaces when the staircase is complete
//   let midpPoint = Math.floor((2 * n - 1 ) / 2); // will give you the midpoint of the array
//
//   for(let row=0; row < n; row++){
//     let stair ='';
//
//     for(let values=0; values < 2*n-1; values++){
//       if(midpPoint  - row <= values && midpPoint + row >=values){
//         stair+='#';
//       }else{
//         stair+=' ';
//       }
//     }
//     console.log(stair)
//   }
// }
function vowel(vowelText){
  let vowels =  vowelText.match(/[aeiou]/gi)
  return console.log(vowels ?  vowels.length : false);
  // Alternative use the includes method
}

// function nxnSpiralMatrix(n){
//   let results = [];
//   for(let i=0; i < n; i++){
//     results.push([]);
//   }
//   let counter=1;
//   let startColumn=0;
//   let endColumn=n-1;
//   let startRow=n-1;
//   let endRow=n-1;
//   while(startColumn <=endColumn && startRow <=endRow){
//     // Top Row
//     for(let i=0; i < startColumn, i<=endColumn; i++){
//       results.push([]);
//     }
//   }
//
// }

// const Stack2 = require('./stack');




let name = "name";
let writtenName = "bill";
var hashTable = {};
hashTable["la"]="aa";
console.log(hashTable);

// class Queue { // Create a queue - First in First out
//   constructor(data){
//     // this.data=[];
//     this.data
//   }
//   add(record) {
//     this.data.unshift(record);
//   }
//   remove() {
//     return this.data.pop()
//   }
//   peek(){
//     return this.data[this.data.length-1]
//   }
// }

class Stack { // Create a queue - First in First out
  constructor(){
    this.data=[];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.shift()
  }
  peek(){
    return this.data[this.data.length-1]
  }
}

function weave(sourceOne, sourceTwo, q){
  console.log(q);
  while(sourceOne.peek() || sourceTwo.peek()){
    if(sourceOne.peek()){
     q.add(sourceOne.remove())
    }
    if(sourceTwo.peek()){
     q.add(sourceOne.remove())
    }
  }
  console.log(sourceOne, sourceTwo)
}

function cueToStack(stack1, stack2, queue1)
{
  stack1.add(queue1)
  stack2.add(queue1)
  return queue1;
}

// var queue = new Queue();
// var lib = queue.add("page 1","page 2","page 3", "page 4", "page 5", "page 6");
// var lib2 = queue.remove();
// var queue1 = new Queue();
// var stack1 = new Stack();
// var stack2 = new Stack();
// var q = new Queue();

// var sourceOne = new Queue();
// var sourceTwo= new Queue();
// vowel(vowelText);
// weave(sourceOne, sourceTwo);
// sourceOne.add([2,3,5,0]);
// sourceOne.add([99,3,511,0]);


// LinkedList.prototype.push = function(val){
//     var node = {
//        value: val,
//        next: null
//     }
//     console.log(node)
//     if(!this.head){
//       this.head = node;
//     }
//     else{
//       current = this.head;
//       while(current.next){
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }
//   var sll = new LinkedList();

  //push node
  // sll.push(2);
  // sll.push(3);
  // sll.push(4);
  // console.log(sll.head);

class Node{
  constructor (data, next = null){
    this.data = data;
    this.next = next;
 }
}

class LinkedList {
  constructor () {
    this.head = null;
  }
  insertFirst(data){
    this.head = new Node(data, this.head) // set head equal to the new node created
  }
}

const nodeOne  = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15)
console.log(list);

// The difference of a matrix 2 sums

function matrix(matrixArr){
  let total1=0;
  let total2=0;
  // start with the first index of the first array and add 1 to the index for each array index you are using to add the numbers
  // if the
  // save each number in an array
  // add the numbers
  // then do the same thing again in the opposite direction
  // O(N)
  for(let i=0; i < matrixArr.length; i++ ){
    total1 += matrixArr[i][i];
    matrixArr[i+1];
  }
  for(let i=1, j=0;i < matrixArr.length+1; i++, j++ ){
    // console.log("this" + matrixArr[j][matrixArr.length-i])
    total2 += matrixArr[j][matrixArr.length-i];
    matrixArr[i+1];
  }
  if(total1 > total2){
    return console.log(total1 - total2)
  }else{
    return console.log(total2 - total1)
  }
}

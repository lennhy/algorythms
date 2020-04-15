#!/usr/bin/env node
"use strict";

// var str = "LiserMin";
// var stringArr = 'ggefwwgpiii';
// var sen = "there is a dog in the backyard";
// var i=0;
// var arr=[];
// var arry = [1,2,4,5,6, 44, 9,10, 45];
// var num = 6;
// var vowelText = "This is a Atest";
// const matrixArr =[
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// ]

//========================= TREE VALUES
// var arr = [23, 231, 9, 22, 92, 190, 10, 11, 12]
//
// const node = new Node(2);
// node.add(17);
// node.add(23);
// node.add(16);
// node.add(90);
// const tree = new Tree();
// tree.root = node;
// tree.traverseBreadthFirst();

// ========================== END OF TREE VALUES

// nxnSpiralMatrix(4)
// console.log("No 1 -------------------------")
// console.log(hasNoDuplicates(str));
// console.log("No 2 -------------------------")
// console.log(IsApermutation("bedwsq", "dwsqbe"));
// console.log("No 3 -------------------------")
// console.log(arrayChunk(arry, 6))
// console.log("No 4 -------------------------")
// console.log(urlify("hell no jose", 0))
// console.log("No 4 -------------------------")
// palindromePermutation("fal", "laf");
// console.log("No 5 -------------------------")
// CountnumsThatHavMoreThanOne(stringArr);
// console.log("No 6 -------------------------")
// arrayChunk(arry, 2);
// console.log("No 7 -------------------------")
// capitalize(sen)
// console.log("No 8 -------------------------")
// matrix(matrixArr);
// console.log("No 9 -------------------------")
// stepShape(3);
// console.log("No 10 -------------------------")
// stepPyramid(3);

// console.log("No 12 -------------------------")
// console.log("Node "+ node);
// console.log("No 13 -------------------------")
// console.log("Tree "+ tree);
// console.log("No 14 -------------------------")
// console.log("Tree after traverse "+ JSON.stringify(tree))


// No. 1
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

// // Refactor
// // 1 O(A+B)
// No. 1
// function hasNoDuplicates(str){
//   var chars={};
//   for(let i=0;i< str.length; i++){
//     if(chars[str[i]]){
//       chars[str[i]]++;
//     }
//     else{
//       chars[str[i]] = 1;
//     }
//   }
//   for(let char in chars){
//     if(chars[char] > 1){
//       return "there are duplicates";
//     }
//   }
//   return "there are no duplicates";
// }

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
//       return console.log("it is not a permutation");
//     }
//   }
//   else{
//     return console.log("it is not a permutation");
//   }
// }

// Refactor
// // 2. O(A+B)
// No. 2
// function IsApermutation(string1, string2){
//   var chars={};
//   var chars2={};
//
//   for(let i=0;i< string1.length; i++){
//     if(chars[string1[i]]){
//       chars[string1[i]]++;
//     }else{
//       chars[string1[i]] = 1;
//     }
//   }
//
//   for(let i=0;i< string2.length; i++){
//     if(chars2[string2[i]]){
//       chars2[string2[i]]++;
//     }else{
//       chars2[string2[i]] = 1;
//     }
//   }
//
//   for(let j in chars){
//     if(chars[j] !== chars2[j]){
//       return "False - it is not a permutation!";
//     }
//   }
//   return "True - It is a permutation!"
// }
//
// // No. 3
// function arrayChunk(arr, val){
//   let newArray=[];
//   let nestedArray=[];
//   for(let i =0; i < arr.length; i++){
//     newArray.push(arr[i])
//     if(i === arr.length -1){
//       nestedArray.push(newArray)
//       return nestedArray;
//     }
//     if(newArray.length === val){
//       nestedArray.push(newArray)
//       newArray = new Array();
//     }
//   }
//   return nestedArray;
// }

// No. 3
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
//       return "Both strings are permutations";
//     }
//     else{
//       return "Both strings are not permutations";
//     }
// }
//
//

// O(N)
// No. 4
// function urlify(string){
//   //recursion
//   while(i < string.length){
//     // if a " " is found
//     if(string[i] === " "){
//        arr.push("%20");
//      }else{
//        arr.push(string[i]);
//     }
//     i++;
//     return urlify(string);
//   }
//   return arr.join('');
// }
//
//
//
// // 4. O(N)
// function palindromePermutation(string1, string2){
//   // Check to see if the strings are equal in size if not then return 0
//   // check if the front and back indice values match each time you loop through the string
//   if(string1.length !== string2.length){
//     return console.log("It's not a palindromePermutation jjj");
//   }
//   let l = string2.length - 1
//
//   while(i < string1.length){
//     console.log([i] + "-----" + [l])
//     if(string1[i] !== string2[l]){
//       return console.log("It's not a palindromePermutation");
//     }
//     i++;
//     l--;
//     palindromePermutation(string1, string2)
//   }
//   return console.log("It's a palindromePermutation")
// }
//
//
//
//
// // 1.1 O(A+B) --- A is stringArr and B is chars
// // Alternative
// // var stringArr=['g','e','f','w','w','g','p'];
// function CountnumsThatHavMoreThanOne(stringArr){
//
//   var chars={};
//   var count=0;
//   // Alternative
//   // for(let char of stringArr){
//   //   if(chars[char]){
//   //     chars[char]++;
//   //   }else{
//   //     chars[char] = 1;
//   //   }
//   // }
//   for(let i=0;i< stringArr.length; i++){
//     if(chars[stringArr[i]]){
//       chars[stringArr[i]]++;
//     }else{
//       chars[stringArr[i]] = 1;
//     }
//   }
//   console.log(chars);
//
//   for(let char in chars){
//     if(chars[char] > 1){
//       count++;
//     }
//   }
//   return(console.log(count + " letters are recurring"));
// }
//
//
// // 1.2 O(N)
// // function arrayChunk(arry, size){
// //   let newArr = []; // Create an empty temporary array to hold size values
// //   let length = arry.length; // Save the original length of arry
// //   let arry2 =[]; // Create an empty new permanent array to hold all the nested values
// //
// //   for(let i=0; i < length; i++){
// //     newArr.push(arry[i]); // push all values into newArr until it has size values
// //     if(newArr.length===size) {
// //       arry2.push(newArr); // if newArr has size values push the array into arry2
// //       newArr = []; // Make new empty again and save next size values
// //     }
// //     if(newArr.length!==size && i % 4 ===0){ // If there are not size values left
// //       arry2.push(newArr); // push the remaining value / values
// //     }
// //   }
// //   return console.log(arry2);
// // }
//
// function arrayChunk(arry, size){
//   let newArr = []; // Create an empty temporary array to hold size values
//   // let length = arry.length; // Save the original length of arry
//   // let arry2 =[]; // Create an empty new permanent array to hold all the nested values
//
//   for(let i=0; i < arry.length; i+=size){
//     newArr.push(arry.slice(i, i+size))
//
//     // newArr.push(arry[i]); // push all values into newArr until it has size values
//     // if(newArr.length===size) {
//     //   arry2.push(newArr); // if newArr has size values push the array into arry2
//     //   newArr = []; // Make new empty again and save next size values
//     // }
//     // if(newArr.length!==size && i % 4 ===0){ // If there are not size values left
//     //   arry2.push(newArr); // push the remaining value / values
//     // }
//   }
//   return console.log(newArr);
// }
//
// function capitalize(sen){
//   let arr=[];
//   let newSen = sen.split(' ');
//
//   for(let i=0; i < newSen.length; i++ ){
//       arr.push(newSen[i][0].toUpperCase() + newSen[i].slice(1))
//       // take the first letter out of the word and change it to uppercase
//     //     word += sen[i];
//     //     console.log(word)
//     //   }else{
//     //     firstLetter = word[0].toUpperCase();
//     //     newWord = firstLetter + word.slice(1, -1)
//     //   // sen[ first letter of a word]
//     //   // take the remaingin words after that letter and add it to the letter
//     //   // do this for each letter in the sentence
//     //   // let remainLet = word.slice(0, i )
//     //   arr.push(newWord);
//     //   // arr.push(word);
//   }
//
//   return console.log(arr.join(' '));
// }
//
// // capitalize Alternative
// function capitalize(sen){
//   let result = sen[0].toUpperCase()
//   for(let i=1; i < sen.length; i++ ){
//     if(sen[i-1]===" "){
//       result += sen[i].toUpperCase()
//     }else{
//       result +=sen[i]
//     }
//   }
//   return console.log(result)
// }
// // var sen = "there is a dog in the backyard";
//
// function stepShape(n){
//   let string="";
//   string.split(" ", num)
//   console.log(string + "x")
//   for(let i=0; i < num; i++){
//     string += "#"
//     console.log(string+"s")
//   }
//   return;
//   Start
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
//
// function stepPyramid(n) {
//   let array = ["#"];
//
//   for(let i=0; i < n-1; i++){
//        array.unshift(" ");
//       // console.log(array);
//   }
//
//   for(let j=0; j < array.length; j++){
//        console.log(array.join(""));
//        array.shift();
//        array.push("#");
//
//   }
//   array;
//
// }
//
// // function nxnSpiralMatrix(n){
// //   let results = [];
// //   for(let i=0; i < n; i++){
// //     results.push([]);
// //   }
// //   let counter=1;
// //   let startColumn=0;
// //   let endColumn=n-1;
// //   let startRow=n-1;
// //   let endRow=n-1;
// //   while(startColumn <=endColumn && startRow <=endRow){
// //     // Top Row
// //     for(let i=0; i < startColumn, i<=endColumn; i++){
// //       results.push([]);
// //     }
// //   }
// //
// // }
//
// // const Stack2 = require('./stack');
//
//
//
//
// let name = "name";
// let writtenName = "bill";
// var hashTable = {};
// hashTable["la"]="aa";
// console.log(hashTable);
//
// // FIFO (First in First Out)
// class Queue { // Create a queue - First in First out
//   constructor(data){
//     this.data=[];
//     // this.data
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
//
// class Stack { // Create a queue - First in First out
//   constructor(){
//     this.data=[];
//   }
//   push(record) {
//     this.data.push(record);
//   }
//   pop() {
//     return this.data.shift()
//   }
//   peek(){
//     return this.data[this.data.length-1]
//   }
// }
//
// function weave(sourceOne, sourceTwo, q){
//   console.log(q);
//   while(sourceOne.peek() || sourceTwo.peek()){
//     if(sourceOne.peek()){
//      q.add(sourceOne.remove())
//     }
//     if(sourceTwo.peek()){
//      q.add(sourceOne.remove())
//     }
//   }
//   console.log(sourceOne, sourceTwo)
// }
//
// function cueToStack(stack1, stack2, queue1)
// {
//   stack1.add(queue1)
//   stack2.add(queue1)
//   return queue1;
// }
//
// var queue = new Queue();
// var lib = queue.add("page 1","page 2","page 3", "page 4", "page 5", "page 6");
// var lib2 = queue.remove();
// var queue1 = new Queue();
// var stack1 = new Stack();
// var stack2 = new Stack();
// var q = new Queue();
//
// // var sourceOne = new Queue();
// // var sourceTwo= new Queue();
// // vowel(vowelText);
// // weave(sourceOne, sourceTwo);
// // sourceOne.add([2,3,5,0]);
// // sourceOne.add([99,3,511,0]);
//
//
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
//
//   // push node
//   sll.push(2);
//   sll.push(3);
//   sll.push(4);
//   console.log(sll.head);
//
// // START OF LINKED LIST
// class Node{
//   constructor(data, next=null){
//     this.data = data;
//     this.next = next;
//  }
// }
//
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//
//   insertFirst(data){
//     const node = new Node(data, this.head) // set head equal to the new node created
//     this.head = node; // the head is now set to the new node and its next property is set to the old head's value
//   }
//
//   size(){
//     let counter =0;
//     let node = this.head;
//     while(node){
//       counter++;
//       node = node.next;
//     }
//     return counter;
//   }
//
//   getFirst(){
//     return this.head;
//   }
//
//   getLast(){
//     if (!this.head){
//       return "There are no nodes";
//     }
//     let node = this.head;
//     while(node){
//       if(!node.next){
//         return node;
//       }
//       node = node.next; // update the node to the next one in our chain
//     }
//   }
//
//   clear(){
//     this.head = null; // want the linked list to thingk that all the nodes are empty that there are no more nodes
//   }
//
//   removeFirst(){
//     if (!this.head){
//       return "There are no nodes";
//     }
//     this.head = head.next;
//     node = this.head;
//     while(node){
//       node = node.next; // update the node to the next one in our chain
//     }
//     return node;
//   }
//
//   removeLast(){
//     if (!this.head){
//       return "There are no nodes";
//     }
//     if (!this.head.next){
//       this.head = null;
//       return "There are no nodes";
//     }
//     let previous;
//     let node = this.head;
//     while(node.next){
//       previous = node;
//       node = node.next;
//     }
//     previous.next = null;
//     return this.head;
//   }
//
//   insertLast() {
//     if (!this.head){
//       this.head = data;
//     }
//     let node = this.head;
//     while(node.next){
//         // if(!node.next){
//         // }
//       node = node.next;
//     }
//     node.next = new Node(data);
//     return this.head;
//   }
// }
//
// getAt(index){
//   // if(!this.head){
//   //   return null;
//   // }
//
//   let counter = 0;
//   let node = this.head
//   while(node){
//     if(counter === index){
//       return node;
//     }
//     counter++;
//     node = node.next;
//   }
//   return null; // If no value in first node;
// }
//
// removeAt(index){
//   if(!this.head){
//     return;
//   }
//
//   if(index===0){
//     // delete head
//     this.head = this.head.next; // Remove the previous node (this.head) by setting the pointer to this.head.next so the memory forgets about this.head
//     return;
//   }
//
//   const previous = this.getAt(index - 1 )
//   previous.next = previous.next.next
// }
//
//
// const nodeOne  = new Node(5);
// const list = new LinkedList();
// list.head = nodeOne;
// list.insertFirst(15)
// list.insertFirst(30)
// list.insertFirst(56)
//
//
// // console.log("LIST "+list);
// console.log(JSON.stringify( list.removeLast()))
//
// // The difference of a matrix 2 sums
//
// function matrix(matrixArr){
//   let total1=0;
//   let total2=0;
//   // start with the first index of the first array and add 1 to the index for each array index you are using to add the numbers
//   // if the
//   // save each number in an array
//   // add the numbers
//   // then do the same thing again in the opposite direction
//   // O(N)
//   for(let i=0; i < matrixArr.length; i++ ){
//     total1 += matrixArr[i][i];
//     matrixArr[i+1];
//   }
//   for(let i=1, j=0;i < matrixArr.length+1; i++, j++ ){
//     // console.log("this" + matrixArr[j][matrixArr.length-i])
//     total2 += matrixArr[j][matrixArr.length-i];
//     matrixArr[i+1];
//   }
//   if(total1 > total2){
//     return console.log(total1 - total2)
//   }else{
//     return console.log(total2 - total1)
//   }
// }
//
// // Notes
// // Many of intgegers
// // Can buy or sell each day can't do both on the same day
// // no buy and sell
// // can only buy and then sell the next day
// // How to maxiize your imcome
//
// // Programming Language = Javascript
//                        // M  T  W  T  F  S
// var StockArr = [ 7, 1, 5, 3, 6, 4] // Each index is a different Day of the week
//
// function maximizePro(stock){
//   let highestStock = 0;
//   // I assume that you does not know what if the stock price will go up or down the next day until the next day has arrived so you will buy stock on the first day
//   let firstDay = stock[0];
//   var profit =0;
//
//   console.log("first day buy "+firstDay);
//
//   for(let i=0; i < stock.length; i++){
//     // Check to see if the stock price today is more than the stock from yesterday
//     // If the stock price today is higher than yesterday then sell the stock today if not keep it until the next day and check again
//     if(highestStock < stock[i]){
//       highestStock = stock[i]
//     }
//   }
//   console.log("sell Maximum stock of "+ highestStock);
//   // subtract the price of the stock you bought the first day from the highest stock you sold
//   profit = Math.abs(firstDay - highestStock) // Return an absolute value
//
//   return "You gained a profit of " +profit;
// }
//
// console.log(maximizePro(StockArr));
// // Hacker Rank


// class Node{
//   constructor(data) {
//     this.data = data;
//     this.children = [];
//   }
//
//   add(data){
//     this.children.push(new Node(data));
//   }
//
//   remove(data){
//     this.children = this.children.filter(node=>{
//       return node.data !== data;
//     });
//   }
// }
//
// // Regular function
// // function incrementBy10(node){
// //   node.data+=100;
// // }
//
// Arrow function
// const incrementBy10 = (node) =>  node.data+=300;
// //
// //
// class Tree {
//   constructor() {
//     this.root = null;
// }
//
//   traverseBreadthFirst(){
//     const arr = [this.root]; // put the root node in the array
//
//     while(arr.length){ // As long as there is a value in the array run the code below
//       const node = arr.shift(); // Take out the very first element You don't want a nested array only the indivdual child node elments
//       for(let child of node.children){ // Retrieve all of node's children
//         arr.push(child) // push all those children into the end of the array
//         incrementBy10(child)
//       }
//     }
//
//   }
//
//   traverseDepthFirst(){
//     const arr = [this.root]; // put the root node in the array
//     while(arr.length){ // As long as there is a value in the array run the code below
//       const node = arr.shift();
//       for(let child of node.children){
//         arr.unshift(child) // add to the start of the array
//         incrementBy10(child)
//       }
//     }
//   }
// }
// // End of Tree


// Sort algorythms

// Bubble sort O(N)^2
// function bubbleSort(arr){
//   for(let i=0; i < arr.length; i++){
//     for(let j=0; j < (arr.length-i -1); j++){ // arr.length-i -1 is used to decrement from index 8 - 0 and - to start from index 8 we need to minus 1
//       if(arr[j] > arr[j+1]){ // Compare and swap the largest value until you reach the end and then do it again
//         let lesser = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = lesser;
//       }
//     }
//   }
//   return arr;
// }
// //
// console.log(bubbleSort(arr))
// //
// // Selection Sort O(N)^2
// function selectionSort(arr){
//   for(let i=0; i < arr.length; i++){
//     let indexOfMin = i;
//
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[j] < arr[indexOfMin]){
//         indexOfMin = j;
//       }
//     }
//
//     if(indexOfMin !== i){ // If indexOfMin = j or if minimum index changed to j
//       let lesser = arr[indexOfMin] // switch values of indices
//       arr[indexOfMin] = arr[i];
//       arr[i] = lesser;
//     }
//   }
//   return arr;
// }
// //
// console.log(selectionSort(arr));
// //
// // // O*(log+n)
// function mergeSort(arr){
//   console.log(arr)
//   if(arr.length === 1){
//     return arr;
//   }
//
//   const center = Math.floor(arr.length / 2);
//   const left = arr.slice(0, center); // from zero up to and not including the last value
//   const right = arr.slice(center); // from center value to the end of the array
//
//   return merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right){
//   const results = [];
//   while(left.length && right.length){
//     if (left[0] < right[0]){
//       results.push(left.shift()) // take the first element out
//     }else{
//       results.push(right.shift()) // take the first element out
//     }
//   }
//
//   // Empty the remaining values from right or left
//   return results.concat(left, right)
// }
// console.log(mergeSort(arr));

// function quickSort(arr){
//   let left = 0;
//   let right = arr.length -1
//   if(x > 0){
//     while(){
//
//     }
//   }
// }

// PART 2 FROM Javascript Algos and Strucs masterclass
// LINKED LISTS 2
// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null
//     }
// }
//
// class SinglyLinkedList{
//     constructor(){
//
//     }
// }
// let array = [22, 120, 80, 20, 19, 8, 122]


// loop through array
// 1st value compare with next,
// if value is lower swap
// continue until reach end

function bubbleSort(array){ // less efficient
  let temp=0
  for(let j=0; j < array.length; j++ ){
    for(let i=0; i < array.length-1; i++){
      temp = array[j]
      if(array[j] < array[i]){
        array[j] = array[i]
        array[i] = temp
      }
    }
  }
  console.log(array)
  return array;
}

function bubbleSort2(array){ // Refactored and More efficient
  let j = array.length-1
  while(j >= 0){
    console.log("One pass complete")
    for(let i=0; i < j-1; i++){
      console.log(array[i], array[i+1])
      console.log(array)
      let temp = array[i]
      if(array[i] > array[i+1]){
        array[i] = array[i+1]
        array[i+1] = temp
      }
    }
    j--
  }
  console.log(array)
  return array;
}

// bubbleSort2(array)

function selectionSort(array){
  let min; // = 22
  var swapPosition;
  for(let j=0; j < array.length; j++){
    min = array[j]
    for(let i=j; i < array.length; i++){
      console.log(array[i], min)
      // start from next value and compare
      if(array[i] < min){
        swapPosition = i
        min = array[i]
        array[swapPosition] = array[j]
        array[j] = min
      }
    }
    console.log("end of loop")
  }
  console.log(array)
  return array
}

let array = [300, 120, 80, 8, 2]

// selectionSort(array)

function insertionSort(arr){
  let j=arr.length-1;
  for(let i=1; i < arr.length; i++){
    while( j > 0){
      if(arr[i] < arr[j]){

      }
      j--
    }
  }
  // start with the second value
  // 1 compare value to first if it is less then put it infront if more leave
  // keep going to left until value to left is less
  // 2 next value compare to left of it repeat step 1
  return arr;
}

// function bubbleSort2(array){ // less efficient
//   let temp=0
//   for(let j=0; j < array.length; j++ ){
//     for(let i=0; i < array.length-1; i++){
//       console.log(array)
//       console.log("----------")
//       temp = array[j]
//       console.log(array[j], array[i])
//       if(array[j] < array[i]){
//         array[j] = array[i]
//         array[i] = temp
//       }
//     }
//   }
//   console.log(array)
//   return array;
// }

// var arr=[90, 43, 21, 9, 11]
    // 43, 90, 21, 9, 11
    // 43, 90, 90, 9, 11
    // 43, 90, 21, 9, 11
    // 43, 90, 21, 21, 11
    // 43, 90, 9, 21, 11
// function insertionSort(arr){
//   var currVal;
//   for(var i=1; i < arr.length; i++){
//     console.log(arr)
//     currVal = arr[i]
//     console.log("here ^ ------------ v")
//     for(var j=i-1; j>=0 && arr[j] > currVal; j--){
//       // console.log(i)
//       // console.log( arr[j])
//       // console.log( currVal)
//       arr[j+1] = arr[j]
//     }
//     console.log(arr)
//     arr[j+1] = currVal
//   }
//   return arr
// }

// console.log(insertionSort(arr))

// var arr1=[9, 20, 29, 90, 110]
// var arr2=[1, 10, 40, 88]

// function merge1(arr1, arr2){
//   let i=0;
//   let j=0;
//   let results =[]
//   while(i < arr1.length && j < arr2.length){
//     if(arr2[j] > arr1[i]){
//       results.push(arr1[i])
//       i++
//     }
//     else{
//       results.push(arr2[j])
//       j++
//     }
//   }
//   while(i < arr1.length){
//     results.push(arr1[i])
//     i++
//
//   }
//   while(j < arr2.length){
//     results.push(arr2[j])
//     j++
//
//   }
//   return results
// }

// function merge(arr1, arr2){
//   let i=0;
//   let j=0;
//   let k=0;
//   let results =[]
//
//     while(arr1.length && arr2.length){
//       if(arr2[j] > arr1[i]){
//         results.push(arr1.shift())
//         i++
//       }
//       else{
//         results.push(arr2.shift())
//         j++
//       }
//     }
//
//     var lastValuesOfArray = arr1.length === 0 ? arr2 : arr1;
//
//     while(k < lastValuesOfArray.length){
//       results.push(lastValuesOfArray[k])
//       k++
//     }
//
//   return results
// }

// function merge2(arr1, arr2){
//   let i=0;
//   let results =[]
//   let lastValuesOfArray
//   let longerlength = arr1.length > arr2.length ? arr1.length : arr2.length;
//
//     while(i < longerlength){
//       if(arr1[i] !== undefined && arr2[i] !== undefined){
//         if(arr2[i] > arr1[i]){
//           results.push(arr1[i])
//           i++
//         }
//         else{
//           results.push(arr2[i])
//           i++
//         }
//       }else{
//           lastValuesOfArray = arr1.length === undefined ? arr2 : arr1;
//           results.push(lastValuesOfArray[i])
//           i++
//       }
//     }
//   return results
// }

// let longerlength = arr1.length > arr2.length ? arr1.length : arr2.length;
// var arr=[90, 200, 20, 9, 110, 33, 22 ]

// function mergeSort(arr){
//   if(arr.length <= 1){
//     return arr
//   }
//   let mid = Math.floor(arr.length / 2)
//   let left = mergeSort(arr.slice(0, mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge1(left, right)
// }
// // console.log(mergeSort(arr))
//
// function recursion(arr){
//   if (arr.length === 0){
//     console.log("the end")
//     return
//   }
//   console.log(arr)
//   arr.shift()
//   return recursion(arr)
// }
//
// function sumRange(num){
//   console.log(num)
//   if (num === 1 ){
//     return 1
//   }
//   return num + sumRange(num-1)
// }
//
// var arr=[90, 200, 20, 9, 110, 33, 22 ]
// // sumRange(30)



// prime numbers factors
function primeNumbers(number){
  let primeNums = [2]
  let isPrim = false;
  let max =0;
  // check if any other number below this number can divide into this number
  // excluding 1 and itself or any number that is greater than prime number * 2
  for(let i =1; i <= number; i++){
    let divider = i-1

    while( divider > 1){
          if(i % divider !== 0){
            isPrim = true;
            // possibly a prime number move to the next loop step
          }
          if(i % divider === 0){
            // break;
            isPrim = false;
            // Need this break statement or else the loop will keep going even after you find a unmber that can divide into it
            break
            // def not a prime number stop loop and move to parent loop
          }
        divider--
      }
      // Get only prime factors of n here
      if(isPrim == true){
        if(number % i === 0){
          primeNums.push(i)
        }
      }
    }
    for(let i=0; i < primeNums.length; i++ ){
        if(max < primeNums[i]){
          max = primeNums[i]
        }
    }
    // get hightest prime factor of n here
    return max;


  // let primeNum = 0;
  // let isPrim = false;
  // let max =0;
  // // check if any other number below this number can divide into this number
  // // excluding 1 and itself or any number that is greater than prime number * 2
  // for(let i =2; i <= number; i++){
  //   let divider = i-1
  //   while( divider > 0){
  //         if(i === 2){
  //           isPrim = true;
  //         }
  //         // console.log(isPrim)
  //
  //         if(i % divider !== 0 && i !== 2){
  //           isPrim = true;
  //           // possibly a prime number move to the next loop step
  //         }
  //         if(i % divider === 0 && i !== 2){
  //           // break;
  //           isPrim = false;
  //           // Need this break statement or else the loop will keep going even after you find a unmber that can divide into it
  //           break
  //           // def not a prime number stop loop and move to parent loop
  //         }
  //       divider--
  //     }
  //
  //     // Get only prime factors of n here
  //     if(isPrim ){
  //       if(number % i === 0){
  //         // get hightest prime factor of n here
  //         if(primeNum < i){
  //           primeNum = i
  //         }
  //       }
  //     }
  //   }
  //   return primeNum;
  }

console.log(primeNumbers(2))
// function primeFactors(n){
//
//   let arrOfPrimeNums = primeNumbers(n)
//   for(let i = arrOfPrimeNums.length-1; i >= 0; i--){
//     let lessThani = 0;
//     while( lessThani < arrOfPrimeNums.length && arrOfPrimeNums[i] * arrOfPrimeNums[lessThani] > n){
//       if(arrOfPrimeNums[i] * arrOfPrimeNums[lessThani] > n){
//         arrOfPrimeNums.pop()
//       }
//       lessThani++
//     }
//   }
//   for(let i = arrOfPrimeNums.length-1; i >= 0; i--){
//     // Get the highest prime number that can divide eveny into n
//     if(n % arrOfPrimeNums[i] === 0){
//       return arrOfPrimeNums[i]
//     }
//   }
//   return n;
//
// }
// console.log(primeFactors(13195))

// function highestPrimeFactor(n){
//   for(let i=2; (i*2) <= n; i++){
//     arr.push(i)
//   }
// }
    // if(all numbers cannot divide into this number ){
    //     primeNums.push(num)
    // }
    // i++

  // for(let z = 2; z < n; z++){
  //   let j=z-1;
  //   while( j !== 0){
  //     if(z % j !== 0){
  //       j--
  //     }
  //     else{
  //       // break;
  //       j++
  //     }
  //
  //   }
  //
  // }
// }

// console.log(merge1(arr1, arr2))

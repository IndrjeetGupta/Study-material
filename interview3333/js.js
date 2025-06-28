
// higher order function

// Higher-Order Functions (HOFs) in JavaScript are functions that either:

// Take one or more functions as arguments, or
// Return another function as their result.

// Why Use Higher-Order Functions?
// Reusability: They make code more modular and reusable.
// Abstraction: You can abstract common behaviors and apply them to various scenarios.
// Code Readability: They help to simplify complex logic.


// function high(name){
//     if (name == "shanu"){
//         return function(age){
//             console.log(`condidate name ${name} and age ${age}`)
//             console.log(name)



//         }
//     }
//     if (name == "ram"){
//         return function(age){
//             // console.log(`condidate name ${name} and age ${age}`)

//         }
//     }
// }
// high('shanu')(20)
// high('ram')(500000000)

// _________________________________________

// callback function

// function sum(a,b){
//     console.log( a+b)
// }

// function test(a,b, sum){
//     sum(a,b)
    
    
// }

// test(3,5,sum)

// const fone =(name , ftwo) =>{
//     setTimeout(() => {
//         console.log(name)
//         ftwo()
//     }, 3000);
    

// }

// const ftwo = () =>{
//     console.log("function one is excute")

// }

// fone('shanu' , ftwo)

//____________________________________________

// this keyword

// 🔹 this Keyword in JavaScript
// The this keyword in JavaScript refers to the object that is executing the current function. Its value depends on how and where the function is called.



// const obj = {
//      name : "shanu",
//      age : 25,
//      sum : function(){
//         console.log("ram")
//         console.log(this.name)

//      }
    
// }
// obj.sum()


// let a = [1,2,3,4,5,6];
// a.splice(2,2, "shanu")
// console.log(a)


//----------------------------------------
// test() exec()
// let s = 'abcd'
// let p = /d/
// console.log(p.test(s))

//----------------------------------------

// constructor functon

// function Person(a,b){
//     this.a = a
//     this.b = b
//     this.fullName= function(){
//         console.log(`${this.a} ${this.b}`)
//     }
// }

// const p1 = new Person('shanu' , 'babu')
// const p2 = new Person('shanu' , 'babu')

// console.log(p1.a)
// p1.fullName()


// call apply and bind methods

// function callMethod(a, city){
//     console.log(`${a} ${this.name} your age ${this.age} you are from ${city}`)

// }

// const p1 = {name : "shanu" , age: 20}

// callMethod.call(p1, 'hellow' , 'rajpur')


// function applyMethod(person){
//     console.log(person, this.name)

// }

// const person = {name : 'shanu', age: 20}
// applyMethod.apply(person,['hi'])


// function bindMethod(a){
//     console.log(a, this.name)

// }

// const person = {name : 'ram' , age : 1000000000}

// const updatefun = bindMethod.bind(person, 'hi')
// updatefun()



// {
//     let a = 10;

// }
// console.log(a)


// const abj1 = {
//     name: "shanu"
// }

// const b2 = Object.create(abj1)
// console.log(b2.name)

// const a = [1,2,3,4,5,2,4,1]

// const check = a.filter((e,i) =>{
//     return e % 2===0
// })

// console.log(check)


 //------------------------------------
//  recurtion
// Recursion is a programming technique where a function calls itself to solve a problem. 


// function add(number) {
//     if (number <= 0) {
//       return 0;
//     } else {
//       return number + add(number - 1);
//     }
//   }
 

// console.log(add(4))

// -----------------------------
// closure -it allows to access the outer function variable and function inside the inner function but in closure hava ablity of a function to remeber variable and function that are declared outer function.
// closure are combination of function and lexical enviroment.

//

// let c = 20;
// function outer(a){
//     var b = 10
//     function inner(){
//         let sum = a+b+c
//         console.log(sum)
//     }
//     return inner
// }

// let inner = outer(4)
// inner()


// function outer() {
//     let count = 0; // Variable inside outer function

//     function inner() { 
//         count++; // Inner function remembers `count`
//         console.log(count);
//     }

//     return inner; // Returning the inner function
// }

// const counter = outer(); // outer() runs, but `count` is still remembered

// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3



//________________________________________
// lexical scope - it allows to access the outer function variable and function inside the inner function

// let c = 20;
// function outer(a){
//     var b = 10
//     function inner(){
//         let sum = a+b+c
//         console.log(sum)
//     }
//     inner()
// }
// outer(4)

//-----------------------------------
// prototype
// A prototype is an object from which other objects inherit properties and methods in JavaScript. 


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the prototype
// Person.prototype.greet = function() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// };

// const person1 = new Person("Indrajeet", 25);
// console.log(person1.greet()); // Output: Hello, my name is Indrajeet and I am 25 years old.



// The Prototype Chain is a mechanism in JavaScript where objects inherit properties and methods from other objects through the prototype property. This allows for method reuse and inheritance.


// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function() {
//     return `Hello, my name is ${this.name}`;
// };

// const person1 = new Person("Indrajeet");

// console.log(person1.greet()); // Hello, my name is Indrajeet
// console.log(person1.__proto__ === Person.prototype); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true
// console.log(Object.prototype.__proto__); // null (End of prototype chain)


//=============================================================

// What is Promise.all() in JavaScript?
// Promise.all() is a method that takes multiple promises and returns a single promise that resolves when all the input promises have resolved. If any of the promises reject, Promise.all() immediately rejects with that error.

//--------------------------------------------------------
// waht is memoization  


// let t = 0;
// function sum2(n){
//     for(let i =0; i <=n; i++){
//         t += i;
//     }
//     return t;
// }
// time()
// console.log('ram')
// console.log(sum2(5))
// timeEnd()


// console.log('func')

// let total = 0;
// function sum(n){
//     for(let i =0; i <=n; i++){
//         total += i;
//     }
//     return total;
// }

// function memoization(sum){
//     let cache = {};
//     return function(...args){
//         let n = args[0];
//         if(n in cache){
//             console.log('cache')
            
//             return cache[n];
//             console.log(cache)

//         }
//         else{
//             console.log("calculate first time")
//             let result = sum(n)
//             cache[n] = result
//             return result
//         }
//     }

// }
// time()
// const effi = memoization(sum)
// console.log(effi(5))
// timeEnd()


// Function to add two numbers
// function add(a, b) {
//     return a + b;
//   }
  
//   // Memoized version of the add function
//   function memoizedAdd() {
//     let cache = {};
  
//     return function(a, b) {
//       const key = `${a}-${b}`;
//       if (key in cache) {
//         console.log("Result retrieved from cache");
//         return cache[key];
//       } else {
//         console.log("Result computed and cached");
//         const result = add(a, b);
//         cache[key] = result;
//         return result;
//       }
//     };
//   }
  
//   const memoizedAddition = memoizedAdd();
//   time()
//   console.log(memoizedAddition(2, 3)); 
//   timeEnd()


/// ++++++++++++++++++++++++++++++++++

// arrow function and traditional funtion
  
  

// function add(a,b){
//     console.log(arguments)
// }
// // console.log(add(12,3))
// add(12,4)
// check arguments

// const add = (a,b) =>{
//     // console.log(arguments)
//     return b+a
// }
// console.log(add(10,12))

// arrow function not use in constructor 
// arrow function do not have own this

// const obj = {
//     name : 'shanu',
//     age : 20,
//     fullName : function(){
//         console.log(`my namen is ${this.name}`)
//     }
// }
// obj.fullName()


// const obj = {
//     name : 'shanu',
//     age : 20,
//     fullName : () =>{
//         console.log(`my namen is ${this.name}`)
//     }
// }
// obj.fullName()

// implicity return by arrow function;

// const fun = () =>  100;
// console.log(fun())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// TDZ

// console.log(a)

// let a = 10;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 7. What are classes in javascript?
// Introduced in the ES6 version, classes are nothing but syntactic sugars for constructor functions. They provide a new way of declaring constructor functions in javascript. 

// class Student {
//     constructor(name , age){
//         this.name = name,
//         this.age = age
//         this.full = function(){
//             console.log(`my name is ${this.name}`)
//         }

//     }
// }

// const p1 = new Student("shanu", 25)
// p1.full()
// console.log()

// star health is healthcare

// function expresstion and class expresstion are not hosted

// function outer(){
//     var a = 10
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// const va =  outer()
// console.dir(va)

// va()

// currying is a technique in JavaScript that allows you to transform functions with multiple arguments into a sequence of functions, each taking one argument at a time. It promotes code reusability,
 

// function curr(a){
//     return function(b){
//         return a+ b
//     }

// }
// console.log(curr(5)(4))

// infinite curring 


// function add(a,p){
//     return function(b,q){
//         if (b) return add(a + b + p + q)
//             else {
//         return a
//         }

//     }

// }
// console.log(add(1,2)(1,1)())





// function hi(a){

//     return function inner(b){
    
       
    
//     console.log(b)
    
//     return funtion three(name){
    
//     }
//     }
  
//   }
//   hi(5)(4)('indrajeet')
  
  
//   o/p => 7
  
//   sum(1,2)(1,1)()
//   o/p => 5
  
//   sum(1,2,3)(1,2)()
  
  
//_____________________________________________________________________________
  
  
// const arr = [1,2,3,4,5,6,7];

// // const fil = arr.filter((e,i,a) => e % 2)  
// // console.log(fil)

// Array.prototype.MyFilter = function(callback){
   
//     let filterArray = [];
//     for (let i =0; i <this.length; i ++){
//         if ( callback(this[i], i , this)){
//             filterArray.push(this[i])
//         }
//     }
//     return filterArray
    
// }
// const filt = arr.MyFilter((e) =>{
//     return e % 2 ===0
// })
// console.log(filt)


// const arr = [1,2,3,4,5,6,7];

// // const fil = arr.filter((e,i,a) => e % 2)  
// // console.log(fil)

// Array.prototype.MyMap = function(callback){
   
//     let filterArray = [];
//     for (let i =0; i <this.length; i ++){
      
//             filterArray.push( callback(this[i], i , this))
        
//     }
//     return filterArray
    
// }
// const filt = arr.MyMap((e) =>{
//     return e + 2
// })
// console.log(filt)


// const arr = [1,2,3,4,5,6,7];

// Array.prototype.ForEach = function(callback){
   
//     for (let i =0; i <this.length; i ++){
      
//              callback(this[i], i , this)
        
//     }
    
// }
// arr.ForEach((e) => {
//     console.log(e)
// })


// Array.prototype.myReduce = function(callback, initialValue) {
//     // Check if an initial value is provided, if not, set the first element of the array as initial value
//     var accumulator = initialValue !== undefined ? initialValue : this[0];

//     // Set the starting index based on whether an initial value is provided
//     var startIndex = initialValue !== undefined ? 0 : 1;

//     // Iterate over each element of the array starting from the appropriate index
//     for (var i = startIndex; i < this.length; i++) {
//         // Call the callback function with four arguments: accumulator, current element, current index, and the array itself
//         accumulator = callback(accumulator, this[i], i, this);
//     }

//     // Return the final accumulator value
//     return accumulator;
// };

// // Example usage:
// var numbers = [1, 2, 3, 4, 5];

// // Sum all numbers using reduce
// var sum = numbers.myReduce(function(accumulator, currentValue , i ,a) {
//     return a
// }, 0);

// console.log(sum); // Output: 15

// Memoization_______________________________________________________________

// function sum(n){
//     let sum = 0;
//     for(let i =1; i <=n; i++){
//         sum += i;

//     }
//     return sum;
// }




// const arrayOfArrays = [[1, 2], [2, 3], [1, 4]];

// const mergedArray = arrayOfArrays.reduce((accumulator, currentArray) => {
//   return accumulator.concat(currentArray);
// }, []);

// console.log(mergedArray);



// const a = [[1, 2], [2, 3], [1, 4]];
// console.log(a.flat())


//=================================================


// function test(){
//     for( var i=0; i <3; i++){
//         setTimeout(() =>{
//             console.log(i)
            
//         },i*1000)
//     }
// }
// test()



// Code 2:

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(b[i]), 1000);
// }

// {
//   var variable3 = [1, 2, 3, 4];
// }

// console.log(variable3); 


//_______________________________________________________________________________________________________
// shallow copy and deep copy in javascript

// const obj1 = {
//     name : 'indrajeet',
//     age : 20
// }

// const obj2 = obj1
// obj2.name = 'ram'
// console.log(obj1)

// shallow copy__________________________________________________

// const obj1 = {
//     name : 'indrajeet',
//     age : 20
// }
//  // first way 
// // const obj2 = {...obj1}

// // second way

// const obj2 = Object.assign({},obj1)
// obj2.name = 'ram'

// console.log(obj1)

// console.log(obj2)


// deep copy -----------------------------------------------------

// by the help of deep copy you can nested object 

// const obj1 = {
//     name : 'shanu',
//     age : 20,
//     address : {
//         city : 'rajpur'
//     }
// }

// const obj2 = JSON.parse(JSON.stringify(obj1)) 
// obj2.address.city = 'mahadevpur'
// console.log(obj2)
// console.log(obj1)

//---------------------------------------------------------------------------------------


//====================================================================================


// const random = Math.floor(Math.random()*5+1)

// console.log(random)
// const promise1 = new Promise((res, rej) =>{
//     if (random == 5){
//         res('got the value');
//     }
//     else {
//         rej('error')
//     }
// })

// promise1
// .then((result) =>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })


//==================================================================

// Given an array of numbers, use a higher-order function to return a new array with each number squared.

// const a = [1,2,3,4,5];

// const squre = a.map((e) =>{
//     return e*e;
// })
// console.log(squre)

//==================================================================

// function squareNumbers(arr) {
//     return arr.map((e) =>{
//         return e*e
//     })
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = squareNumbers(numbers);

// console.log(squaredNumbers); 



//=========================================================================
// Write a higher-order function that takes a function as an argument and returns a new function that logs the arguments and result of the original function.

// function withLogging(fn) {
//     return function(...args) {
//       console.log(`Arguments: ${args}`);
//       const result = fn(...args);
//       console.log(`Result: ${result}`);
//       return result;
//     };
//   }
  
//   // Example usage
//   function add(a, b) {
//     return a + b;
//   }
  
//   const addWithLogging = withLogging(add);
  
//   addWithLogging(2, 3); // Arguments: 2,3  Result: 5


//=======================================================================================

// Write a function that takes two numbers and a callback function, and returns the result of the callback function applied to the two numbers.
// function fun(num1, num2, callback){
//     return callback(num1,num2)
// }

// function callback(num1,num2){
//     return num1+num2
// }

// console.log(fun(3,4,callback))


// =========================================================================

// print object key is string
 
// const obj = {
//     'name' : 'shanu',
//     'age' : 26,
//     'village' : 'rajpur'
// }

// console.log(`my name is ${obj['name']} and age is ${obj['age']}`)


// const obj = {
//     name : 'shanu',
//     age : 26
// }

// console.log(`my name is ${obj.name}`)

//================================================================================================================================

//===================================================================================

// how to find duplicate values

// const a  = [1,2,2,3,3,4,5,6,6,1]
// const output = a.filter((e,i,a) =>{
//     return a.indexOf(e) !== i
// })

// console.log(output)

// remove duplicate value

// const a  = [1,2,2,3,3,4,5,6,6,1]
// const output = a.filter((e,i,a) =>{
//     return a.indexOf(e) === i
// })

// console.log(output)




// const a = [1,2,2,4,5,5,9,9,1]

// const output = a.filter((e,i,a) =>{
//     return a.indexOf(e) !== i
// })
// console.log(output)








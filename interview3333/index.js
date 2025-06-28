 
 // string method ===========================================================================
//================================================================
// charCodeAt

// var str = 'my name is indranjeet'

// var result = str.charCodeAt(1)

// console.log(result)

// it return unique code


//================================================================
// concat 

// var s1 = 'hi my name is shanu'
// var s2 = ' i am from rajpur'
// var s3 = ' also i am developer'

// var result = s1.concat(s1,s3)

// console.log(result)


//================================================================
// indexOf
// its return index of substring if substring same more then two its always return first substring

// var s = 'is my name is shanu'
// console.log(s.indexOf('is'))


// slice method ==========================================================
  // slice(startIndex, endIndex)

//   const a = [1,2,3,4,5,6,7,7]

//   let newArray = a.slice(3,6)

//   console.log(newArray)

// let str = 'my name is shanu gupta'

// let newString = str.slice(1,5)

// console.log(newString)


// substring method ==========================================================
  // substring(startIndex, endIndex)

//     const a = 'my name is ram'
//   let newArray = a.substring(3,6)

//   console.log(newArray)


// substr method ==========================================================
  // substr(startIndex, length)

//   let s = 'my name is mahadev'

//   let newS = s.substr(3,6)
//   console.log(newS)

// toLoweCase() and toUpperCase()===================================

// let str = 'my name is IDrajeet Gupta'
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// trim method -----------------------------------
// let str = '            my name is shanu gupta'
// console.log(str)
// console.log(str.trim(' '))


//===============================================

// split method ===================================================
// split the string using separator

// a.split(seperator , limit)

// let s = 'my name is shanu gupta'
// let res = s.split(' ')
// let res2 = s.split(' ' , 2)
// console.log(res2)
// console.log(res)

// replace method --------------------------------------------------

// const a = 'my name is indrajeet'
// const res = a.replace('indrajeet', 'shanu')
// console.log(res)

// match method --------------------------------------------------

// const a = 'my name is indrajeet'
// const res = a.match('indrajeet]')
// console.log(res)
// return detail


// search method --------------------------------------------------
// retrun the position

// const a = 'my name is indrajeet'
// const res = a.search('indrajeet')
// console.log(res)
//  return position of index else return -1


 // Number  method ===========================================================================

//  let num = 3.122222222334
//  console.log(num.toFixed(2))

// let num = '3'
// console.log()
// let store = parseInt(num)
// console.log(typeof store)


// toString

// parseFlote
// const n = '10.10'
// const res = parseFloat(n)
// console.log(typeof res)

// let a = 'string'
// console.log(isNaN(a))


// Math method is javascript object that provides varites of methods for perfroming of mathematical operation like math.abs math.floor



// object.assign method
//================================================================

// const obj1 = {
//     name : 'shanu',
//     age : 26
// }

// const obj2 = {
//     name1 : 'shanu',
//     age1 : 28
// }

// const merge = Object.assign(obj1, obj2)
// console.log(merge)

// const obj1 = {
//     name : 'shanu',
//     age : 26
// }

// const obj2 = {
//     name : 'shanu',
//     age : 28
// }

// const merge = Object.assign(obj1, obj2)
// console.log(merge)

// Object.assign method use to merge the object but if both object key is same the only show last object


//================================================================
// Object.keys method

// const obj = {
//     name : 'shanu',
//     age : 26,
//     city : 'rajpur'
// }

// const result = Object.keys(obj)


// console.log(result)

// by the help of this method you can convert object key in arrray and also apply some condition


//================================================================
// Object.values method

// by the help of this method you can convert object valyes in arrray and also apply some condition

// const obj = {
//     name : 'shanu',
//     age : 26,
//     city : 'rajpur'
// }

// const result = Object.values(obj)
// console.log(result)


// Array Methd --------------------------------------------------------------

// const a = [1,2,3,4,5]
//  a.push(3,4)
// // console.log(res)
// console.log(a)

// const b = [2,3,4,5,6]
// const re = b.pop()
// // console.log(re)
// console.log(b)



// const a  = [1,2,3,4,5,6]
// const res =  a.shift()
// console.log(res)

// console.log(a)


// const a  = [1,2,3,4,5,6]

//  let b = a.unshift(5)
// console.log(a)


// concat method join two or more then array 

// let a1 = [1,2,3]
// let a2 = [4,5,6]
// let a3 = [7,8,9]

// let newArray = a1.concat(a2,a3)
// console.log(newArray)

// join method join inside array element and convert in to string

// let a = ['name', 'age' , 'city']

// let newArray = a.join()
// let newArray2 = a.join(" ")
// console.log(newArray)

// ==================================

// indexOf method 

// let frutes = ['apple', 'mango' , 'orange', 'mango' , 'banana']

// console.log(frutes.indexOf('mango', 2))

// let frutes = ['apple', 'mango' , 'orange', 'mango' , 'banana']

// console.log(frutes.indexOf('mango'))

// let frutes = ['apple', 'mango' , 'orange', 'mango' , 'banana']

// console.log(frutes.lastIndexOf('mango', 2))



//====================================================================

// include method check in array element prensent or not if present show true or flase

// let a = [1,2,3,4,65,7]
// console.log(a.includes(22))



// find method  iterate the array and check element present or not 

// let a = [1,2,3,4,65,7]
// let res = a.find((e) =>{
//   return e > 40

// })
// console.log(res)

// ==========================================================

// findIndex

// let a= [1,3,4,5,2,50,30,]
// let res = a.findIndex((e) =>{
//   // return e > 30
//   return e == 30
// })
// a[res] = 100
// console.log(res)
// console.log(a)

//===================================================================
// // every method
// // every method check all condition is satify or not if satify then return treu else false

// let a = [1,2,3,4,5]
// const result = a.every((e) => {
//   return e > 1
// })

// console.log(result)
 // some check if any condition satify then return true 

// let a = [1,2,3,4,5]
// const result = a.some((e) => {
//   return e > 3
// })
// console.log(result)

// Array.isArray----------------------------------
// let a = [1,2,3,4]
// console.log(Array.isArray(a))

// Array.fill----------------------------------

// let a = [1,2,3,4]
// a.fill(0,2,4)
// a.fill(element,postion of index, length length start from zero index)

// console.log(a)

// anonimous function 

// An anonymous function in JavaScript is a function without a name. It's often used as a callback or assigned to a variable. Here's what it looks like:

// const add = function (a,b){
//   return a+b
// }
// console.log(add(2,4))

// generator function

// function* test(){
//   for(let i =0; i <5; i++){
//     yield i
//   }
// }
 
// const result = test()
// console.log(result.next(),result.next(),result.next())

// switch operator
// let day = 2
// switch(day){
//   case 1:
//     console.log('Monday')
//     break
//     case 2:
//       console.log('Tusday')
//       break
//       default :
//       console.log('not valid')
// }


// date ===============================================
// let date = new Date()
// const gd = date.getDate()
// const gm = date.getMonth()
// const gfy = date.getFullYear()
// let a = ''
// let b = ''
// if(gd < 10){
//    a = `0${gd}`
// }
// else if(gm < 10){
//    b = `0${gm}`

// }
// console.log(`${gd}_${b}_${gfy}`)

// // console.log(date)
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

//====================================================================================
// callback hell

// Callback Hell happens when multiple asynchronous operations (like API calls, timers) depend on each other, leading to nested callbacks that are hard to read, debug, and maintain

// console.log("Start");

// setTimeout(() => {
//     console.log("Step 1");

//     setTimeout(() => {
//         console.log("Step 2");

//         setTimeout(() => {
//             console.log("Step 3");

//             setTimeout(() => {
//                 console.log("Step 4");
//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// console.log("End");

// ==========================================================================

// solution of callback is promises
// console.log("Start");

// function delay(time, message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time);
//     });
// }

// delay(1000, "Step 1")
//     .then(() => delay(1000, "Step 2"))
//     .then(() => delay(1000, "Step 3"))
//     .then(() => delay(1000, "Step 4"))
//     .catch((error) => console.error("Error:", error));

// console.log("End");

//  //===========================================================================

// console.log("Start");

// function delay(time, message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve();
//         }, time);
//     });
// }

// async function executeSteps() {
//     await delay(1000, "Step 1");
//     await delay(1000, "Step 2");
//     await delay(1000, "Step 3");
//     await delay(1000, "Step 4");
// }

// executeSteps();
// console.log("End");


// Difference Between Callback and Promise in JavaScript



// Syntax 
// callback
// Function passed as a parameter and executed later.
// promise
//Uses .then(), .catch(), and .finally().

// Handling Errors
// callback
// 	Errors need to be manually handled inside the callback function.
// promise
//Errors can be caught using .catch().


// Readability
// callback
// 	Can lead to "callback hell" (nested callbacks) making code hard to read.
// promise
//More readable with chaining and async/await support.

// chaining
// callback
// 	Difficult to manage chaining without deep nesting.
// promise
//Easy to chain with .then().

// const newPromise =new Promise((res , rej) =>{
//   let flag = false

//   if(flag){
//     res('promise resolve successfully')
//   }
//   else{
//     rej('promise faild')
//   }
// })
// newPromise
// .then((result) =>{
//   console.log(result)
// })
// .catch((err) =>{
//   console.log(err)
// })
// .finally(() => console.log('promise completed')) // always excutes




// const customers = [
//   { customerId: "C1", name: "Alice" },
//   { customerId: "C2", name: "Bob" },
//   { customerId: "C3", name: "Charlie" }
// ];

// const purchases = [
//   { customerId: "C1", amount: 300 },
//   { customerId: "C1", amount: 250 },
//   { customerId: "C2", amount: 150 },
//   { customerId: "C3", amount: 600 }
//   ]
  


// const result1 = purchases.filter((item) =>{
//     return item.amount >= 500
// })
// let id = result1[0].customerId

// const result2 = customers.filter((item) =>{
//     return item.customerId == id
// })

// console.log(result2[0].name)

// [ 2, 3, 4, 5, 6, 1 ]


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

//======================================================
//=====================================================
//=====================================================
//====================================================


// 1. Event Loop & Callback Queue

// JavaScript is single-threaded, but it can handle asynchronous operations like HTTP requests or timers thanks to the event loop. Here's how it works:

// Call Stack: Executes synchronous code.

// Web APIs: Browser-provided APIs (like setTimeout, fetch) handle async tasks.

// Callback Queue: When async tasks complete, their callbacks are pushed to this queue.

// Event Loop: Constantly checks if the call stack is empty, and if so, pushes a callback from the queue to the stack.


//==================================================

// 🔄 What is Event Delegation in JavaScript?
// Event delegation is a technique where you attach a single event listener to a parent element instead of individual child elements, and use event bubbling to catch events from children.
 ///////////


// Template literals (also called template strings) are a feature in JavaScript that make it easier to build strings, especially when mixing in variables or creating multiline text.

// 🧵 Syntax:
// You use backticks instead of quotes: ` ```

// javascript
// Copy
// Edit
// const name = "Indrajeet";
// const greeting = `Hello, ${name}!`; // "Hello, Indrajeet!"

// Absolutely! Destructuring in JavaScript lets you unpack values from arrays or objects into individual variables — it's a clean, concise way to extract data.

// const data = ['dog', 'cat','rat']
// const [a,b] = data
// console.log(b)

// const obj = {
//   name : 'ram',
//   age : 25
// }

// const {name, age} = obj
// console.log(name)

//=========================================================================
// localStorage
// Think of it like a long-term memory for your website.

// It remembers things even after you close the browser.

// Example: if a user picks dark mode, you can save that in localStorage, so it’s still dark mode tomorrow.

// javascript
// Copy
// Edit
// localStorage.setItem("mode", "dark"); // saves it
// localStorage.getItem("mode");         // gets it back


//=========================================================================


// sessionStorage
// This is like short-term memory.

// It only remembers while the tab is still open.

// Once the tab is closed, the data is gone.

// Useful for things like form progress while filling out a page.

// javascript
// Copy
// Edit
// sessionStorage.setItem("step", "1");
// sessionStorage.getItem("step");

//======================================================

// 🍪 What are Cookies?
// Cookies are small pieces of data that websites store in your browser. They were mainly made for the server to remember things about you — like:

// If you’re logged in

// What items are in your cart

// Your preferences

// They get sent to the server with every request — that’s the key!

// javascript
// Copy
// Edit
// document.cookie = "username=Indrajeet; expires=Fri, 1 Jan 2026 12:00:00 UTC";
// 🗃️ How Are Cookies Different from localStorage?

// Feature	🍪 Cookies	🗃️ localStorage
// Size Limit	~4 KB	~5 MB
// Sent to Server?	✅ Yes (with every request)	❌ No
// Access Type	Server + JavaScript	Only JavaScript
// Expiry	You set it or it’s session-only	Stays forever unless deleted
// Best For	Login/session info (for server)	Storing app data/preferences

//====================================================
// How would you optimize a slow JavaScript-heavy webpage?

// 1. Minimize JavaScript
// Remove unused code.

// Use a tool like Tree Shaking (e.g. in Webpack).

// Minify files with tools like Terser.

//  2. Lazy Load Content
// Only load what's visible — load images, videos, and sections as the user scrolls.

// 🧊 7. Avoid Memory Leaks
// Remove event listeners when components unmount.

// Clear intervals and timeouts.

//=============================================
// ES2020 Features
// 1. Optional Chaining (?.)
// Safely access nested values without breaking your code.

// js
// Copy
// Edit
// const user = { profile: { name: "Indrajeet" } };
// console.log(user.profile?.name); // "Indrajeet"
// console.log(user.address?.city); // undefined (no error!)
// 2. Nullish Coalescing (??)
// Only fallback if the value is null or undefined — not 0 or false.

// js
// Copy
// Edit
// const count = 0;
// const finalCount = count ?? 10; // ✅ returns 0, not 10
// 3. BigInt
// Handles numbers bigger than Number.MAX_SAFE_INTEGER.

// js
// Copy
// Edit
// const big = 1234567890123456789012345n;


// ✅ ES2021 Features
// 1. Logical Assignment Operators
// Shorthand for setting values if undefined or falsey.

// js
// Copy
// Edit
// let theme;
// theme ??= "light"; // only sets if theme is null/undefined
// 2. String.prototype.replaceAll()
// Replaces all matches, not just the first one.

// js
// Copy
// Edit
// "apple apple".replaceAll("apple", "banana"); // "banana banana"
// 3. Promise.any()
// Returns the first fulfilled promise — great for fallback APIs.

// js
// Copy
// Edit
// Promise.any([fetch(url1), fetch(url2)]).then(console.log);


// ✅ ES2022 Features
// 1. at() Method
// Access array/string elements from the end.

// js
// Copy
// Edit
// const arr = [1, 2, 3];
// console.log(arr.at(-1)); // 3
// 2. Top-Level Await (in modules only)
// Use await directly without wrapping in async function.

// js
// Copy
// Edit
// // in a module
// const res = await fetch("/data.json");
// 3. Error Cause
// Add context to errors.

// js
// Copy
// Edit
// try {
//   throw new Error("Failed", { cause: "Network timeout" });
// } catch (e) {
//   console.log(e.cause); // "Network timeout"
// }

//============================================================

// 🧹 What Is Garbage Collection?
// Garbage collection is automatic memory cleanup.

// JavaScript automatically removes data from memory when it's no longer needed — so you don’t have to manually free memory like in C or C++.

// 🧠 How Does It Work?
// The most common method is called Mark-and-Sweep.

// 🔁 Here's what happens:
// Mark: JS finds all variables that are still reachable (in use).

// Sweep: It removes everything else from memory — all unreachable values.

// 🧩 What Does “Reachable” Mean?
// A value is reachable if:

// It’s in the global scope

// It’s in a function that’s still running

// It’s in a closure

// It's being referenced by another reachable object

// 📦 Example:
// javascript
// Copy
// Edit
// function greet() {
//   let name = "Indrajeet";
//   console.log("Hello " + name);
// }
// greet(); // "Hello Indrajeet"
// // After this, `name` is no longer needed => Garbage Collected
// 🚫 Memory Leaks (When GC Can’t Help)
// Even with GC, memory leaks can happen if:

// You keep references to unused objects (like in global variables)

// You forget to remove event listeners

// You store stuff in closures or Map/Set and never clean them

// ✅ Best Practices to Help GC
// Set unused variables to null

// Remove event listeners on unmount (React)

// Avoid global variables unless needed


//==============================================================

// Yes, I’ve worked with both CommonJS and ES Modules — they’re two popular systems for organizing and sharing code across files in JavaScript.

// Let me break it down simply:

// 📦 CommonJS (used in Node.js)
// Syntax: require() and module.exports

// Runs synchronously

// Mostly used in Node.js

// ✅ Example:
// js
// Copy
// Edit
// // math.js
// const add = (a, b) => a + b;
// module.exports = { add };

// // main.js
// const { add } = require('./math');
// console.log(add(2, 3)); // 5
// 📦 ES Modules (modern JavaScript)
// Syntax: import and export

// Runs asynchronously

// Used in modern browsers and Node.js (with type: module)

// ✅ Example:
// js
// Copy
// Edit
// // math.js
// export const add = (a, b) => a + b;

// // main.js
// import { add } from './math.js';
// console.log(add(2, 3)); // 5
// 🧠 Key Differences

// Feature	CommonJS	ES Modules
// Syntax	require/module.exports	import/export
// Execution	Synchronous	Asynchronous
// Environment	Node.js	Browser + Node.js
// File Extension	.js	.mjs or with "type": "module"
// 🛠 Where I’ve Used Them
// CommonJS: In backend Node.js projects using Express.

// ES Modules: In React apps, frontend Vanilla JS apps, and modern Vite/Webpack builds.


// 🔁 JavaScript Event Loop Overview
// Executes synchronous code first (top to bottom).

// Then processes Microtasks.

// Then processes Macrotasks.

// Repeats this cycle.

// 🧩 Microtasks
// Higher priority than Macrotasks.

// Executed after the current call stack is empty and before any Macrotask.

// Common examples:

// Promise.then, Promise.catch, Promise.finally

// queueMicrotask()

// MutationObserver (used for DOM changes)

// Example:
// javascript
// Copy
// Edit
// console.log('Start');

// Promise.resolve().then(() => {
//   console.log('Microtask');
// });

// console.log('End');
// Output:

// sql
// Copy
// Edit
// Start
// End
// Microtask
// 🧱 Macrotasks
// Scheduled to run after microtasks are done.

// Common examples:

// setTimeout

// setInterval

// setImmediate (Node.js)

// I/O operations

// requestAnimationFrame (Browser)

// Example:
// javascript
// Copy
// Edit
// console.log('Start');

// setTimeout(() => {
//   console.log('Macrotask');
// }, 0);

// console.log('End');

























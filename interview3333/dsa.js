// function test(num, str){
//     var newNum = num.toString();
//     var result = ''
//     var maxLength = Math.max(newNum.length, str.length)
    
//     for(let i = 0; i <maxLength; i++){
//         if (i < str.length){
//             result += str[i]
//         }
//         if (i < newNum.length){
//             result += newNum[i]
//         }
//     }
//     if (result === 'a1b2c3456' )
//     {
//         console.log('got the data')
//     }
//     else console.log(' not received')
//     return result
// }

// var num = 123456
// var str = 'abc'

// console.log(test(num, str))

//======================================================== anagram

// function test(s1, s2){
//     let a = s1.split('').sort().join('')
//     let b = s2.split('').sort().join('')
    
//     if (a === b){
//         return 'yes'
//     }
//     else {
//         return 'no'
//     }
    
// }

// let s1 = 'mama'
// let s2 = 'mmaa'

// let result = test(s1, s2)
// console.log(result)

//=========================================================================
// in binary search first sort the array
//

// function test(a,t){
//     let l = 0;
//     let r = a.length-1
    
//     while(l <=r){
//         let m = Math.floor((l+r) /2)
//         if(a[m] === t){
//             return m
//         }
//         else if(a[m] < t){
//             l = m+1
//         }
//         else {
//             r = m-1
//         }
//     }
//     return -1
    
// }


// const a = [2,5,3,7,8,1]
// const sortArray = a.sort()

// const t = 8
// const result = test(sortArray,t)

// if (result !== -1){
//     console.log(result)
// }
// else {
//     console.log('not found')
// }



// Find an element in a sorted array – Implement standard binary search.
// Find the first occurrence of a target in a sorted array.
// Find the last occurrence of a target in a sorted array.
// Count the number of occurrences of a target in a sorted array.
// Find the smallest element in a rotated sorted array.
// Find the peak element in an array (element that is greater than its neighbors).
// Find the square root of a number using binary search.
// Find the position to insert a target in a sorted array (lower bound).

// string base 

// Reverse a string.
// Check if a string is a palindrome.
// Find the first non-repeating character in a string.
// Count the number of words in a string.
// Find the longest word in a sentence.
// Convert a string to title case (capitalize the first letter of each word).
// Check if two strings are anagrams.
// Remove duplicate characters from a string.
// Replace all spaces in a string with %20 (URL encoding).
// Count occurrences of a specific character in a string.

// Intermediate String Questions

// Implement run-length encoding (string compression).
// Find the most frequent character in a string.
// Find the first occurrence of a substring in a given string (implement indexOf).
// Remove all vowels from a string.
// Find all substrings of a given string.
// Check if a string contains only unique characters.
// Reverse words in a sentence without reversing the order of characters.
// Convert a given string to camel case.
// Convert a given string to snake case.
// Convert a given string to kebab case.



// solutin --------------------------------------------


// reverse string
// let s = 'shanu'
// let resString = ''
// for(let i = s.length -1; i >= 0; i--){
//     resString += s[i]
// }
// console.log(resString)



// callback hell 

// solution of callback 

// function delay(time , message){
//     return new Promise((res) =>{
//         setTimeout(() =>{
//             console.log(message)
//             res()

//         },time)
//     })
// }

// const ram = async () =>{
//     await delay(1000, 'step 1')
//     await delay(1000, 'step 2')
//     await delay(1000, 'step 3')
//     await delay(1000, 'step 4')
// }
// ram()


// function firstNonRepeatingCharacter(str) {
//     const charCount = new Map();
  
//     // Count occurrences of each character
//     for (const char of str) {
//       charCount.set(char, (charCount.get(char) || 0) + 1);
//     }
  
//     // Find the first character with a count of 1
//     for (const char of str) {
//       if (charCount.get(char) === 1) {
//         return char;
//       }
//     }
  
//     return null; // If no non-repeating character is found
//   }
  
//   console.log(firstNonRepeatingCharacter([1,2,1,3,4])); // "c"

  
  



// function test(s){
//     let map = new Map()

//     for( let char of s){
//         map.set(char, (map.get(char) || 0) + 1)
//     }
//     for(let char of s){
//        return char
//     }
//     return null


// }

// console.log(test('abcdabc'))


// for (let i = 0; i < parseInt(n); i++) {
//     let ch = s[i];
//     if (map.has(ch)) {
//         map.set(ch, map.get(ch) + 1);
//     } else {
//         map.set(ch, 1);
//     }
// }

// map.forEach((value, key) => {
//     console.log(`${key}-${value}`);
// });


function bubbleSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no swaps happened in this pass, the array is already sorted
        if (!swapped) break;
    }
    
    return arr;
}

// Example usage:
let numbers = [5, 3, 8, 4, 2];
console.log("Sorted array:", bubbleSort(numbers));























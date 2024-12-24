// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse String:", reverseString("hello")); // Example: olleh

// Count Characters
function countCharacters(str) {
    return str.length;
}
console.log("Count Characters:", countCharacters("hello world")); // Example: 11

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log("Capitalize Words:", capitalizeWords("hello world from javascript")); // Example: Hello World From Javascript

// Array Functions

// Find Maximum
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Find Maximum:", findMax([1, 2, 3, 4, 5])); // Example: 5

// Find Minimum
function findMin(arr) {
    return Math.min(...arr);
}
console.log("Find Minimum:", findMin([1, 2, 3, 4, 5])); // Example: 1

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of Array:", sumArray([1, 2, 3, 4, 5])); // Example: 15

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log("Filter Array (Even):", filterArray([1, 2, 3, 4, 5], num => num % 2 === 0)); // Example: [2, 4]

// Mathematical Functions

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); // Example: 120

// Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Prime Number Check (7):", isPrime(7)); // Example: true
console.log("Prime Number Check (8):", isPrime(8)); // Example: false

// Fibonacci Sequence
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
console.log("Fibonacci Sequence (10 terms):", fibonacciSequence(10)); // Example: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

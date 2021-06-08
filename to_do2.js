// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    let arr = []
    for (num; num >= 0; num--){
        arr.push(num)
    }
    return [arr, arr.length]
}

// console.log(countdown(5))

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printReturn(num1, num2) {
    console.log(num1)
    return num2
}

// console.log(printReturn(1,2))

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    return arr[0] + arr.length
}

// console.log(firstPlusLength([1,2,3]))

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr){
    let second = arr[1]
    count = 0

    for (let i = 0; i<arr.length; i++){
        if (arr[i] > second) {
            console.log(arr[i])
            count++
        }
    }
    return count
}

// console.log(greaterThanSecond([1,3,5,7,9,13]))

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greaterThanSecondGeneralized(arr){
    let second = arr[1]
    let newArr = []

    for (let i = 0; i<arr.length; i++){
        if (arr[i] > second) {
            newArr.push(arr[i])
        }
    }
    return newArr.length
}

// console.log(greaterThanSecondGeneralized([1,3,5,7,9,13]))

// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLength(num1, num2){
    let newArr = []
    if (num1 == num2){
        console.log("Jinx!")

    } else {
        for (num1; num1 > 0; num1--){
            newArr.push(num2)
        }
    }
    return newArr
}

// console.log(thisLength(4,2))
// console.log(thisLength(1,1))

// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirst(arr){
    if (arr[0] > arr.length){
        console.log("Too big!")
    } else if (arr[0] < arr.length) {
        console.log("Too small!")
    } else {
        console.log("Just right!")
    }
}

// fitTheFirst([1,2,3,4])
// fitTheFirst([4,2,3,4])
// fitTheFirst([5,2,3,4])

// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function fToC(num) {
    return (num - 32)*5/9
}

// console.log(fToC(32))

// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

function cToF(num) {
    return (9/5 * num) + 32
}

// console.log(cToF(5))

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

// for (let i = 200; i > -100; i--){
//     if(cToF(i) == fToC(i)){
//         console.log(i)
//     }
// }
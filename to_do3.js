// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

function biggie(arr){
    for (i=0; i<arr.length; i++){
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
    return arr
}

// console.log(biggie([-1,3,5,-5]))


// Print Low, Return High
// Create a function that takes an array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr){
    let low = arr[0]
    let high = arr[0]
    for (i=0; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i]
        } else if (arr[i] > high){
            high = arr[i]
        }
    }
    console.log(low)
    return high
}

// console.log(lowHigh([-1,3,5,-5]))

// Print One, Return Another
// Build a function that takes an array of numbers. The function should print the second-to-last value in the array, and return first odd value in the array.

function printReturn(arr){
    let firstOdd = 0
    let secondToLast = arr[arr.length-2]

    console.log(secondToLast)

    for (i=0; i<arr.length;i++){
        if (arr[i]%2!=0){
            firstOdd = arr[i]
            break
        }
    }
    return firstOdd
}

// console.log(printReturn([0,2,3,4,6,7,8,9]))

// Double Vision
// Given an array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    let newArr = []
    for (i=0; i<arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr
}

// console.log(doubleVision([1,2,3,4,5]))

// Count Positives
// Given an array of numbers, create a function to replace last value with the number of positive values. Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    let count = 0
    for (i=0; i<arr.length; i++){
        if (arr[i] > 0){
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}

// console.log(countPositives([-1,1,1,1]))

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr){
    let count = 0
    for (i=0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            if (count < 0){
                count = 0
            }
            count++
        } else {
            if (count > 0){
                count = 0
            }
            count--
        }
        if (count == -3){
            console.log("That's odd!")
            count = 0
        } else if (count == 3){
            console.log("Even more so!")
            count = 0
        }
    }
}

// evensOdds([1,1,1,2,2,2,1,2,1,2,2,2,1,1,1])

// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function incrementSeconds(arr){
    for(i=1; i<arr.length; i += 2){
        arr[i] += 1
    }
    return arr
}

// console.log(incrementSeconds([1,2,3,4,5]))


// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLengths(arr){
    let length = arr[0].length
    for (i=1; i<arr.length; i++){
        let newLength = arr[i].length
        arr[i] = length
        length = newLength
    }
    return arr
}

// console.log(previousLengths(["","i","ii","iii","iiii","iiiii"]))

// Add Seven to Most
// Build a function that accepts an array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function sevenToMost(arr){
    for(i=1; i<arr.length; i++){
        arr[i] += 7
    }
    return arr
}

// console.log(sevenToMost([7,0,0,0,0]))

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]

function reverseArr(arr){
    let temp = 0
    for(i=0; i<(arr.length/2);i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

// console.log(reverseArr([3,1,6,4,2]))
// console.log(reverseArr([1,2,3,4,5,6]))

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(arr){
    for(i=0; i<arr.length; i++){
        if (arr[i] > 0){
            arr[i] *= -1
        }
    }
    return arr
}

// console.log(outlookNegative([-1,2,-3,4,-5,6]))

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(arr){
    if (arr.includes("food")){
        for(i = 0; i<arr.length; i++){
            if (arr[i]=="food"){
                console.log("yummy")
            }
        }
    } else {
        console.log("I'm hungry")
    }
}

// alwaysHungry(["food",1,2,"food",4,5,"food"])
// alwaysHungry([1,2,3,4,5,6])

// Swap Toward the Center
// Given array, swap first and last, third and third-tolast, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapToward(arr){
    let temp = 0
    for(i=0; i<(arr.length/2); i+= 2){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

// console.log(swapToward([1,2,3,4,5,6]))
// console.log(swapToward([true,42,"Ada",2,"pizza"]))

// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

function scaleArray(arr,num){
    for(i=0; i<arr.length; i++){
        arr[i] *= num
    }
    return arr
}

// console.log(scaleArray([1,2,3,4,5,6], 5))
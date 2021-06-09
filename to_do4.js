// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function lastFew(arr,num){
    return arr.slice(num-1)
}

// console.log(lastFew([2,4,6,8,10],3))

// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

function mathHelp(m,b){
    return (b*-1)/m
}

// console.log(mathHelp(5,10))

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function whatHappensToday(){
    outcome = Math.random()*100
    console.log(outcome)
    if (outcome < 10) {
        console.log("Volcano killed kenny");
    } else if (outcome < 25) {
        console.log("Tsunami killed kenny")
    } else if (outcome < 45) {
        console.log("Earthquake killed kenny")
    } else if (outcome < 70) {
        console.log("Blizzard killed kenny")
    } else {
        console.log("Meteors killed kenny")
    }
}

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). In this new function test for each disaster independently, instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none. Maybe Kenny will survive!

function whatReallyHappensToday(){
    outcome1 = Math.random()*100
    outcome2 = Math.random()*100
    outcome3 = Math.random()*100
    outcome4 = Math.random()*100
    outcome5 = Math.random()*100
    
    if (outcome1 < 10) {
        // console.log(outcome1)
        console.log("Volcano killed kenny");
    }
    if (outcome2 < 15) {
        // console.log(outcome2)
        console.log("Tsunami killed kenny")
    } 
    if (outcome3 < 20) {
        // console.log(outcome3)
        console.log("Earthquake killed kenny")
    }
    if (outcome4 < 25) {
        // console.log(outcome4)
        console.log("Blizzard killed kenny")
    } 
    if (outcome5 < 30) {
        // console.log(outcome5)
        console.log("Meteors killed kenny")
    }
}

// whatReallyHappensToday()

// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function soaringIQ(){
    let iq = 101
    let count = 1

    while (count < 99) {
        iq += (count*.01)*iq
        count++
    }
    return iq
}

// console.log(soaringIQ())

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D".

function letterGrade(grade){
    if (grade >= 90){
        return "A"
    } else if (grade < 90 && grade >= 80){
        return "B"
    } else if (grade < 80 && grade >= 70){
        return "C"
    } else if (grade < 70 && grade >= 60){
        return "D"
    } else {
        return "F"
    }
}

// console.log(letterGrade(90))
// console.log(letterGrade(65))
// console.log(letterGrade(47))

// More Accurate Grades
// For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-" .

function moreAccurateGrade(grade){
    if (grade >= 90){
        return "A"
    } else if (grade < 90 && grade >= 80){
        if (grade > 87) {
            return "B+"
        } else if (grade < 83) {
            return "B-"
        } else {
            return "B"
        }
    } else if (grade < 80 && grade >= 70){
        if (grade > 77) {
            return "C+"
        } else if (grade < 73) {
            return "C-"
        } else {
            return "C"
        }
    } else if (grade < 70 && grade >= 60){
        if (grade > 67) {
            return "D+"
        } else if (grade < 63) {
            return "D-"
        } else {
            return "D"
        }
    } else {
        return "F"
    }
}

// console.log(moreAccurateGrade(88))
// console.log(moreAccurateGrade(41))
// console.log(moreAccurateGrade(89))
// console.log(moreAccurateGrade(76))
// console.log(moreAccurateGrade(62))
// //q 1
// // var city = prompt("Enter city name")
// if (city == "karachi") {
//     alert("Welcome to city of light")
// }

// //q 2
// // var gender = prompt("Enter your gender")
// if (gender == "male") {
//     alert("Good morning sir!")
// } else {
//     alert("Good morning Ma'am")
// }

//q 3
// const userInput = prompt("Enter traffic signal color").toLowerCase()
// let output = ""
// let isValid = true

// if (userInput === "red") {
//     output = "Must stop"
// } else if (userInput === "yellow") {
//     output = "Ready to move"
// } else if (userInput === "green") {
//     output = "Move now"
// } else {
//     alert("Invalid color")
//     isValid = false

// }
// if (isValid) {
//     document.write(`
// <table border="1">
//     <tr>
//         <th>Signal color</th>
//         <th>Message</th>
//     </tr>
//     <tr>
//         <td>${userInput}</td>
//         <td>${output}</td>
//     </tr>
// </table>
// `)
// }
// //q 4
// const fuelInput = +prompt("enter your remaining fuel")
// if (fuelInput < 0.25) {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("yo have fuel")
// }
// //q 5
// //a
// var a = 4
// if (++a === 5) {
//     alert("value is true")
// }
// //b
// var b = 82
// if (b++ === 83) {
//     alert("given condition for varaible is false")
// }
// //c
// var c = 12
// if (c++ === 13) {
//     alert("condition 1 is false")
// }
// if (c === 13) {
//     alert("condition 2 is true")
// }
// if (++c < 14) {
//     alert("condition 3 is false")

// }
// if (c === 14) {
//     alert("condition 4 is true")

// }
// //d
// var materialCost = 20000
// var laborCoast = 2000
// var totalCost = materialCost + laborCoast

// if(totalCost === materialCost+laborCoast){
// alert("The coast equal")
// }
// //e
// if (true){
//     alert("true")
// }
// if(false){
//     alert("false")
// }
// //f
// if ("car" < "cat"){
//     alert("car is smaller then cat")

// }

//q 6
// var subjectOne = +prompt("Enter your obtained mark subject 1")
// var subjectTwo = +prompt("Enter your obtained mark subject 2")
// var subjectThree = +prompt("Enter your obtained mark subject 3")
// var subjectTotal = +prompt("Enter your total marks")

// var obtainedTotal = subjectOne + subjectTwo + subjectThree
// var per = (obtainedTotal / subjectTotal) * 100
// var remarks = ""
// var grade = ""

// if (per >= 80) {
//     grade = "A-one"
//     remarks = "Excellent"
// } else if (per >= 70) {
//     grade = "A"
//     remarks = "Good"
// } else if (per >= 60) {
//     grade = "B"
//     remarks = "You need to improve"
// } else {
//     grade = "Fail"
//     remarks = "Sorry"
// }

// document.write(`
//     <h1>Marks Sheet</h1> </br></br>
//     <h3>Total Marks: ${subjectTotal}</h3>
//     <h3>Marks obtained: ${obtainedTotal}</h3>
//     <h3>Perercentage: ${per}</h3>
//     <h3>Grade: ${grade}</h3>
//     <h3>Remarks: ${remarks}</h3>


//     `)
// //q 7
// var secretNumber = 5
// var userNumber = +prompt("Guess the secret number ranging from 1 to 10")
// if (userNumber === secretNumber) {
//     alert("Bingo! correct answer")
// } else if (userNumber + 1 === secretNumber) {
//     alert("Close enough to the correct answer")
// } else {
//     alert("You can't guess the number ")
// }
//q 8
// var userDivideNumber = +prompt("Enter the number for divide by 3")
// if (userDivideNumber%3 === 0) {
//     alert("the number is divisible by 3")
// }else {
//     alert("the number is not divisible by 3")
// }

// //q 9
var givenNumber = +prompt("cheak your given number is odd or even")
var isEven = givenNumber % 2 === 0
if (isEven) {
    alert("Your given number is even")
} else {
    alert("Your given number is odd")
}
//q 10
var temperature = +prompt("what is temerature your city")
if (temperature > 40) {
    alert("Its too hot outside")
} else if (temperature > 30) {
    alert("The weather today is normal")
} else if (temperature > 20) {
    alert("Todays water is cool")
} else if (temperature > 10) {
    alert("OMG! Todays weather is so cool")
}
//q 11
var firstNumber = +prompt("Enter the 1st number for calculation")
var secondNumber = +prompt("Enter the 2nd number for calculation")
var operator = prompt("enter the opeator")

if (operator === "+") {
    alert("calculation" + firstNumber + secondNumber)
}else if (operator === "-"){

}

//q 1
// var cheakOutput = prompt("cheak your given input")
// if (cheakOutput.charCodeAt() >= 48 && cheakOutput.charCodeAt() <= 57) {
//     alert('this is number')
// } else if (cheakOutput.charCodeAt() >= 65 && cheakOutput.charCodeAt() <= 90) {
//     alert('this is UPPERCASE latter')

// } else if (cheakOutput.charCodeAt() >= 97 && cheakOutput.charCodeAt() <= 122) {
//     alert('this is LOWERCASE latter')

// }

//q 2
// var num1 = + prompt("Enter the first number")
// var num2 = + prompt("Enter the second number")
// if (num1 > num2) {
//     alert(num1 + " " + "number  is larger than" + " " + num2)
// } else if (num2 > num1) {
//     alert(num2 + " " + "number  is larger than" + " " + num1)

// } else {
//     alert('number is equal')
// }
//q 3
// var cheakNumber = +prompt("Enter a numer ")
// if (cheakNumber > 0) {
//     alert("The number is positive")
// } else if (cheakNumber < 0) {
//     alert("The number is negitive")

// } else if (cheakNumber === 0) {
//     alert("The number is zero")

// }
//q 4 
var valueCheak = prompt("Enter a latter for cheak vowels").toLocaleLowerCase()
if (valueCheak === "a" || valueCheak === "e" || valueCheak === "i" || valueCheak === "o" || valueCheak === "u") {
    alert("The latter is vowels")
} else {
    alert("The latter is not vowels")

}

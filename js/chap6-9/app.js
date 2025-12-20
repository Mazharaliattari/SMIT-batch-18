
//q 1
var a = 10
document.write(`
    Result: <br>
    The value of a is: ${a}<br>
    .........................<br><br>
    `)
document.write(`The value of ++a is: ${++a}<br>
    Now the Value of a is: ${a}<br><br>
    
    `)
document.write(`
    The value of a++ is:${a++}<br>
    now the value of a is: ${a}<br><br>
    `)
document.write(`
    The value off --a is: ${--a}<br>
    Now the value of a is: ${a}<br><br>
    `)
document.write(`
    The value off --a is: ${a}<br>
    Now the value of a is: ${--a} <br><br>
    `)
// q 3
var greetUser = prompt('Please Enter Your Name')
alert(`Greet user \n${greetUser}`)

// q 4
var userNumber = prompt("Enter any number for multiplaction")

if (userNumber == "" || userNumber == null) {
    userNumber = 5

}
document.write(`
        Multiplaction is Here:<br>
        ${userNumber} x 1 = ${userNumber * 1} <br>
        ${userNumber} x 2 = ${userNumber * 2} <br>
        ${userNumber} x 3 = ${userNumber * 3} <br>
        ${userNumber} x 4 = ${userNumber * 4} <br>
        ${userNumber} x 5 = ${userNumber * 5} <br>
        ${userNumber} x 6 = ${userNumber * 6} <br>
        ${userNumber} x 7 = ${userNumber * 7} <br>
        ${userNumber} x 8 = ${userNumber * 8} <br>
        ${userNumber} x 9 = ${userNumber * 9} <br>
        ${userNumber} x 10 = ${userNumber * 10} <br><br><br>
    
        `)

//q 5
var subjectOne = prompt("Please enter your 1st subject")
var obtOne = +prompt(`What is your obtained mark in ${subjectOne}`)

var subjectTwo = prompt("Please enter your 2nd subject")
var obtTwo = +prompt(`What is your obtained mark in ${subjectTwo}`)

var subjectThree = prompt("Please enter your 3rd subject")
var obtThree = +prompt(`What is your obtained mark in ${subjectThree}`)

var eachSubMarks = 100
var totalMarks = 300
var percentage1 = obtOne * eachSubMarks / 100
var percentage2 = obtTwo * eachSubMarks /100
var percentage3 = obtThree * eachSubMarks /100

var grandPercentage = (obtOne + obtTwo + obtThree) / totalMarks * 100

document.write(`
    <table>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${subjectOne}</td>
            <td>${eachSubMarks}</td>
            <td>${obtOne}</td>
            <td>${percentage1}</td>
        </tr>
        <tr>
            <td>${subjectTwo}</td>
            <td>${eachSubMarks}</td>
            <td>${obtTwo}</td>
            <td>${percentage2}</td>
        </tr>
        <tr>
            <td>${subjectThree}</td>
            <td>${eachSubMarks}</td>
            <td>${obtThree}</td>
            <td>${percentage3}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>${totalMarks}</td>
            <td>${obtOne + obtTwo + obtThree}</td>
            <td>${grandPercentage}</td>
        </tr>
    </table>
    
    
    
    
    `)


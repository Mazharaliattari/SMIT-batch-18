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
const userInput = prompt("Enter traffic signal color").toLocaleLowerCase()
if (userInput == "red") {
    document.write(
        `<table>
    <tr>
        <th>Signal color</th>
        <th>Message</th>
    </tr>
    <tr>
        <td>${userInput}</td>
        <td></td>
    </tr>
    
    
    </table>`)
}else if(userInput == "yellow"){
 document.write(
        `<table>
    <tr>
        <th>Signal color</th>
        <th>Message</th>
    </tr>
    <tr>
        <td>${userInput}</td>
        <td></td>
    </tr>
    
    
    </table>`)
}else if(userInput == "green"){
 document.write(
        `<table>
    <tr>
        <th>Signal color</th>
        <th>Message</th>
    </tr>
    <tr>
        <td>${userInput}</td>
        <td></td>
    </tr>
    
    
    </table>`)
}
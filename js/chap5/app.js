//chap 5

//q 1
var num1 = 3
var num2 = 5
var resultPlus = num1 + num2
document.write(`sum of ${num1} and ${num2} is ${resultPlus} <br>`)

//q 2
var subtraction = 5
var subtraction1 = 3
var resultSubtraction = subtraction - subtraction1
document.write(`subtraction of ${subtraction} and ${subtraction1} is ${resultSubtraction} <br>` )

var multiply = 5
var multiply1 = 3
var resultMultiply = multiply1 * multiply
document.writeln(`Multiply of ${multiply} and ${multiply1} is ${resultMultiply} <br>` )

var divide = 5
var divide1 = 3
var resultDivide =divide / divide1
document.write(`Division of ${divide} and ${divide1} is ${resultDivide} <br>`)

var modules = 12
var modules1 = 5
var resultModules = modules % modules1
document.write(`Modules of ${modules} and ${modules1} is ${resultModules} <br><br>` )

//q 3
var declear;
document.write(`Value after variable declear is ${declear} <br>`)

var initialize = 5
var increment = 1
var resultIncrement = increment + initialize
var addition = 7
var additionresult =addition + resultIncrement
var decrement = 1
var decrementresult = additionresult - decrement
var mod = 3
var modresult = decrementresult % mod

document.write(`Initial value: ${initialize} <br>`)
document.write(`Value after increment is ${resultIncrement} <br>`)
document.write(`Value after addition is ${additionresult} <br>`)
document.write(`Value after decrement is ${decrementresult} <br>`)
document.write(`The reminder is ${modresult} <br> <br><br>`)

// q 4
var ticketPrice = 600
var ticketPurchase = 5
var ticketresul = ticketPrice * ticketPurchase
document.write(`Total coast to buy ${ticketPurchase} ticket to a movie is ${ticketresul}PKR <br><br>`)

//q 5
document.write(`Table of 4 <br><br>`)
var tableFour = 4

var table1 = 1
var tabResult1 = table1 * tableFour
document.write(`${tableFour}x${table1}=${tabResult1} <br>`)

var table2 = 2
var tabResult2 = table2 * tableFour
document.write(`${tableFour}x${table2}=${tabResult2} <br>`)

var table3 = 3
var tabResult3 = table3 * tableFour
document.write(`${tableFour}x${table3}=${tabResult3} <br>`)

var table4 = 4
var tabResult4 = table4 * tableFour
document.write(`${tableFour}x${table4}=${tabResult4} <br>`)

var table5 = 5
var tabResult5 = table5 * tableFour
document.write(`${tableFour}x${table5}=${tabResult5} <br><br>`)

//q 7
var priceOfItem1 = 650
var quantity1 = 3
var resultItem1 = priceOfItem1 * quantity1

var priceOfItem2 = 100
var quantity2 = 7
var shipCharge = 100
var resultItem2 = priceOfItem2 * quantity2

var grandResult = resultItem1 + resultItem2 + shipCharge

document.write(`Price of iteme1 is ${priceOfItem1} <br>`)
document.write(`Quantity of iteme 1 is ${quantity1} <br>`)
document.write(`Price of iteme 2 is ${priceOfItem2} <br>`)
document.write(`Quantity of iteme 2 is ${quantity2} <br>`)
document.write(`Shipping charges is ${shipCharge} <br>`)
document.write(`Total coast of Your order is ${grandResult} <br><br>`)

//q 8
var totalMark = 980
var obtMark = 804
var resultStudent =  obtMark / totalMark * 100
document.write(`Total Mark ${totalMark} <br>`)
document.write(`Obtained Mark ${obtMark}<br>`)
document.write(`Percentage: ${resultStudent}<br><br>`)

//q 9
var usd = 10
var riyal = 25
var convert = (usd * 104) + (riyal * 28)
document.write(`Total currency in PKR ${convert} <br><br>`)

//q 10
var newNum = 7
var singleExpretion = ((newNum + 5) * 10) / 2
document.write(` Answer of question No 10 is: ${singleExpretion} <br><br>`)

//q 11
var currentYear = 2025
var birthYear = 1999
var currentAge = currentYear - birthYear
document.write(`Current Year: ${currentYear} <br>`)
document.write(`Birth Year: ${birthYear}<br>`)
document.write(`Your age is: ${currentAge}<br> <br>`)

// q 13 
var faviorateSnake = "chocolate"
var currentSnakeage = 25
var maxAge = 80
var estimated = 2

var yearLeft = maxAge - currentSnakeage
var perdayMultiply = yearLeft * 365

var totalSnacks = perdayMultiply * estimated
document.write(`Favourite Snacke: ${faviorateSnake}<br>`)
document.write(`Current age: ${currentSnakeage}<br>`)
document.write(`Estimated age: ${maxAge}<br>`)
document.write(`Amount of Snacke per day: ${estimated}<br>`)
document.write(`you will need ${totalSnacks} ${faviorateSnake} to last you until the ripe old age ${maxAge}`)
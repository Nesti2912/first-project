let wordRotation = document.getElementById('wordRotation')
let word = 'w3resource'

let arrWord = Array.from(word)

function rotateWord()
{
    let lastSymbol = arrWord[arrWord.length-1]
    arrWord.pop()
    arrWord.unshift(lastSymbol)

}

function rotateWord2(){
   let lastSymbol = word.substring(word.length -1, word.length)
   let fullSymbols = word.substring(0, word.length - 1)
   console.log('last symbol: ' + fullSymbols)
   word = lastSymbol + fullSymbols
}


setInterval(function(){
    rotateWord()
    wordRotation.innerText = arrWord.toString()
}, 1000)

/* Exersise 2 */

let firstNumber = document.getElementById('firstNumber')
let secondNumber = document.getElementById('secondNumber')
let btnMultiply = document.getElementById('multiply')
let btnDivide = document.getElementById('divide')
let result = document.getElementById('result')

function multiplyNumbers(number1, number2){
    return number1 * number2
}
function divideNumbers(number1, number2){
    if (number2 == 0) return Error('Number cant be zero')
    return number1 / number2
}

btnDivide.addEventListener('click', function(){
    result.innerText = divideNumbers(
        firstNumber.value, secondNumber.value)
})
btnMultiply.addEventListener('click', function(){
    result.innerText = multiplyNumbers(
        firstNumber.value, secondNumber.value)
})


/* Exersise 3 */

let btnGetURL = document.getElementById('getURL')
let resultURL = ducument.getElementById('resultURL')
let linkToURL = ducument.getElementById('linkToURL')

btnGetURL.addEventListener('click', function(){
    resultURL.innerHTML = 'href: ' + window.location.href 
    + '<br>protocol: ' + window.location.protocol
    + '<br>hostname: ' + window.location.hostname
    + '<br>host: ' + window.location.host
})

btnMoveToURL.addEventListener('click', function(){
    let ask = prompt(Do you want to go to google com?)
    if (ask != null) {
        window.location.reload()
    }
})

linkToURL.addEventListener('click', function(event){
    event.preventDefault()

    let ast = alert(Are you sure to go to google com?)
    if (ask)
    {
        let myDate = new Date()
        window.localStorag.setItem('reloadTime',
        myDate.getMinutes() + ':' + myDate.getSeconds()
        )
        window.location.href = 'http://google.com'
    }
})
resultURL.innerHTML = localStorage.getItem('reloadTime')